import {addCartToMongo} from '@/api/cart.js'
import Vue from 'vue';
import { Notify } from 'vant';
Vue.use(Notify);

const mutations ={
    addCartToMongo:function(state,data){
        alert(1)
        addCartToMongo(data).then(res=>{
            if(res.status==20000){
                alert("ok")
                //Notify({ type: 'warning', message:res.message});
            }
        }).catch(error=>{
            Notify({ type: 'warning',message: '购物车添加失败' })
        })
    },
    addCart:function(state,data){
        const prop="cart_"+data.goods_id+"_"+data.product_id;
        if(state.cart[prop]==undefined){
            state.cart[prop]=data;
        }else{
            state.cart[prop].cart_number=state.cart[prop].cart_number+data.cart_number;
        }

    }
}
export default mutations