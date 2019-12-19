import request from '@/beforeEach/request.js';

//登录
export function login(data){
    return request({
        method:"post",
        url:"login",
        data,
        
    })
}
