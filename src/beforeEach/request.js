import axios from 'axios';
import {getToken,delToken,setToken} from '@/beforeEach/token.js';
import {getReToken,setRetoken} from '@/beforeEach/retoken.js'
import Vue from 'vue';
import { Notify } from 'vant';
Vue.use(Notify);
import router from '@/routers/index.js'
const instance = axios.create({
    baseURL: 'http://www.api.com/api/',
    //baseURL: 'http://shopapi.lxlysy.com/api/',
    timeout:3000,
});

instance.interceptors.request.use(function (config) {
    // 在发送请求之前先获取token
    const token=getToken()
    if(token){
        config.headers["token"] = token;
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(async function (response) {
    // 对响应数据做点什么
    //token报错
    if(response.data.status==50000){
        //alert(1)
        delToken();
        router.replace({path:"/login"});
    }

    if(response.data.status==50001){
        //删除token
        //alert(2)
        delToken();
        //发送 axios 获取新的token
        const refresh_token= getReToken();
        await axios.request({
            method:"post",
            url:"http://www.api.com/api/refreshToken",
            //url:"http://shopapi.lxlysy.com/api/refreshToken",
            data:{
                refresh_token:refresh_token
            }
        }).then(response=>{
            if(response.data.status==60000){
                router.replace({path:"/login"})
            }
            if(response.data.status==20000){
                setToken(response.data.token);
                //alert(getToken());
                setRetoken(response.data.refresh_token);
                
            }
        }).catch(error=>{
            router.replace({path:"/login"});
        });

         //重新发送上一次请求，无痛刷新
         const config=response.config;
         const to=getToken();
         //alert(to);
         config.headers.token = to;
         response=await axios.request(config);
    }
       
    return response.data;
    
}, function (error) {
    // 对响应错误做点什么

    
    return Promise.reject(error);
  });
export default instance;
