import request from '@/beforeEach/request.js';


export function cart(data){
    return request({
        method:"post",
        url:"cart",
        data,
        
    })
}

//登陆后添加购物车
export function addCartToMongo(data){
    return request({
        method:"post",
        url:"addCartToMongo",
        data,
    })
}

export function updateNum(data){
    return request({
        method:"post",
        url:"updateNum",
        data,
    })
}
