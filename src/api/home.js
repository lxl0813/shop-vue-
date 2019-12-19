import request from '../beforeEach/request.js';

//取轮播图
export function banner(data){
    return request({
        method:"get",
        url:"banner",
        data,
        
    })
}






