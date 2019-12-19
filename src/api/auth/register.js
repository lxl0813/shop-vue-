import request from '@/beforeEach/request.js';

//发送验证码
export function sendMsg(data){
    return request({
        method:"post",
        url:"sendMsg",
        data,
    })
}



//注册
export function register(data){
    return request({
        method:"post",
        url:"register",
        data,
        
    })
}

//重新获取token
export function token(data){
    return request({
        method:"post",
        url:"refreshToken",
        data,
    })
}