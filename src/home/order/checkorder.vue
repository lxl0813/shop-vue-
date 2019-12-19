<template>
    <div>
        
        <header class="aui-header-default aui-header-fixed aui-header-bg">
            <a href="javascript:history.back(-1)" class="aui-header-item">
                <i class="aui-icon aui-icon-back-white"></i>
            </a>
            <div class="aui-header-center aui-header-center-clear">
                <div class="aui-header-center-logo">
                    <div class="aui-car-white-Typeface">填写订单</div>
                </div>
            </div>
            <a href="#" class="aui-header-item-icon"   style="min-width:0">
                <i class="aui-icon aui-icon-member"></i>
            </a>
	    </header>
        
        
           
            <section class="aui-address-content">
                <div class="aui-address-box">
                    <div class="aui-address-box-list">
                        <a href="my-addres.html" class="aui-address-box-default">
                            <ul>
                                <li>
                                    <strong>李嘉华 185****6698</strong>
                                    <span class="aui-tag" id="aui-home">家里</span>
                                    <span class="aui-tag aui-tag-default" id="aui-default">默认</span>
                                </li>
                                <li>
                                    <i class="aui-icon aui-icon-address"></i>
                                    北京海淀区三环到四环之间学院路东里33号楼1门202
                                </li>
                            </ul>
                        </a>
                    </div>
                </div>

                
                

                <div class="aui-dri"></div>
                <div class="aui-list-product-float-item">
                    <a href="javascript:;" class="aui-list-product-fl-item" v-for="(val, index) in orderProduct" :key="index"  >
                        <div class="aui-list-product-fl-img">
                            <img :src="val.goods_img">
                        </div>
                        
                        <div class="aui-list-product-fl-text">
                            <h3 class="aui-list-product-fl-title">{{val.goods_name}}</h3>
                            <div class="aui-list-product-fl-mes">
                                <div>
                                    <span class="aui-list-product-item-price">
                                        <em>¥</em>
                                        {{val.products_price/100}}
                                    </span>
                                    <van-stepper :v-model="val.cart_number" input-width="30px" button-size="20px" />
                                </div>
                            </div>
                            <div>
                                <span v-for="(attr, key) in val.goods_attrs_value" :key="key">{{attr}}</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="aui-payment-bar">
                    <div class="shop-total">
                        <span class="aui-red aui-size">实付款: <em>￥{{this.allprice}}</em></span>
                    </div>
                    <a @click="examine" class="settlement" >
                        提交订单
                    </a>
                </div>
            </section>
        

    </div>    
</template>

<script>
    import {order,examineOrder} from '@/api/order.js'
    import Vue from 'vue';
    import {Notify,Stepper} from 'vant';
    Vue.use(Notify)
       .use(Stepper)


    export default {
        data() {
            return{

                
                //所有价格
                allprice:"",
                //提交过来的货品信息
                product:[],
                //查询到的最新货品信息
                orderProduct:{}
            }
        },

        created(){
            //获取传入的参数
            this.product = this.$route.query.product
            this.order()
            
        },
        watch:{
            orderProduct(){
                this.price()
            }
        },
        

        methods:{
            //根据提交过来的货品信息，查询数据库最新信息，生成一个订单展示确认页，展示出来
            order:function(){
                //alert(1)
                order(JSON.parse(this.product)).then(res=>{
                    if(res.status==20000){
                        this.orderProduct=res.data
                    }else{
                        Notify({ type: 'warning', message:response.message});
                    }
                }).catch(error=>{
                    Notify({ type: 'warning',message: '网络异常' })
                })
            },

            //提交订单，先进行审核，通过之后进入支付页面
            examine:function(){
                examineOrder(this.orderProduct).then(res=>{
                    if(res.status==20000){

                    }else{

                    }
                }).catch(error=>{
                    Notify({ type: 'warning',message: '网络异常' })                       
                })
            },
            
            price:function(){
                if(this.orderProduct!=""){
                    this.allprice=0;
                    this.orderProduct.forEach((val) => {
                        this.allprice+=val.products_price/100*val.cart_number;
                    });
                }
            }




        }


    }
</script>



<style scoped>
    @import '../../static/css/core.css';
	@import '../../static/css/home.css';
	@import '../../static/css/icon.css';    

</style>