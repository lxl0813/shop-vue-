import request from '@/beforeEach/request.js';

//取顶级分类
export function getCate(data){
    return request({
        method:"get",
        url:"cate",
        data,
        
    })
}

export function getsonCate(data){
    return request({
        method:"post",
        url:"soncate",
        data,
        
    })
}