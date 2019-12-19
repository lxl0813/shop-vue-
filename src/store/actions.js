import {getToken} from '@/beforeEach/token.js'

const actions = {
    addCart:function(context,data){
        const token=getToken();
        if(token){
            //console.log("发送ajax")
            //alert(1)
            context.commit("addCartToMongo",data)
        }else{
            context.commit("addCart",data)
        }
    },
}
export default actions