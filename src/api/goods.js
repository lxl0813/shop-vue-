import request from '@/beforeEach/request.js';

//获取商品
export function goods(data){
    return request({
        method:"post",
        url:"goods",
        data,
    })
}
//获取商品详情
export function getgoods(data){
    return request({
        method:"post",
        url:"getgoods",
        data,
        
    })
}
