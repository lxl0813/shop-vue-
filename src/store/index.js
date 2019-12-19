import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import {setCart} from '@/beforeEach/cart.js'
import { getCart } from '../beforeEach/cart';



const store = new Vuex.Store({
    state: {
      cart:getCart()
    },

   
    actions,
    mutations,
        

    
});
store.subscribe((mutations,state)=>{
    if(mutations.type=="addCart"){
        setCart(state.cart);
    }
});
export default store;
