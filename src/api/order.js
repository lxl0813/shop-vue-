import request from '../beforeEach/request.js';

//查询货品最新信息，生成订单
export function order(data){
    return request({
        method:"post",
        url:"order",
        data,
    })
}

//提交订单，进行审核
export function examineOrder(data){
    return request({
        method:"post",
        url:"examineOrder",
        data,
    })
}






