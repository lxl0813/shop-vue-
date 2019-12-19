<template>

	<div>
		<header class="aui-header-default aui-header-fixed aui-header-bg">
            <a href="javascript:history.back(-1)" class="aui-header-item">
                <i class="aui-icon aui-icon-back-white"></i>
            </a>
            <div class="aui-header-center">
				<font color="#FFD700">我的购物车</font> 
            </div>
	    </header>

		<div class="aui-banner-content aui-fixed-top" data-aui-slider/>

		<van-checkbox-group v-model="checkedNames" @change="obai($event)"  ref="checkboxGroup" checked-color="#1E90FF">
			<van-card
				v-for="(cart, index) in shopCart" :key="index"
				:num="cart.cart_number"
				:price="cart.goods_price/100"
				:desc="cart.goods_des"  
				:title="cart.goods_name"
				:thumb="cart.goods_img"						
				:origin-price="cart.goods_market_price"		
				>
				<div slot="tags" >
					<van-tag plain type="danger" v-for="(attr, ind) in cart.goods_attr" :key="ind">{{attr}}</van-tag>
				</div>
				<div slot="footer">
					<van-stepper :value="value" async-change @change="updateNum"  input-width="40px" button-size="32px" integer />
					<van-checkbox :name="cart" shape="square"></van-checkbox>
				</div>
			</van-card>
		</van-checkbox-group>
		
		<van-submit-bar
		    :disabled="optional"
			:price="allprice"
			button-text="去结算"
			@submit="onSubmit"
		>
			<van-checkbox v-model="checked"  @click="toggleAll">全选</van-checkbox>
		</van-submit-bar>

	</div>
</template>

<script>

	import {cart} from '@/api/cart.js'
	import {getToken} from '@/beforeEach/token.js'
	import {getCart} from '@/beforeEach/cart.js'
	import {updateNum} from '@/api/cart.js'
	import Vue from 'vue';
	import { Card,Notify,SubmitBar,Stepper,Toast, Checkbox, CheckboxGroup} from 'vant';
	Vue.use(Card)
	   .use(Notify)
	   .use(SubmitBar)
	   .use(Stepper)
	   .use(Toast)
	   .use(Checkbox)
	   .use(CheckboxGroup);

    export default {
        data() {
			return{
				optional:true,
				allprice:0,
				checkedNames:[],
				value: 1,
				shopCart:[],
				selectShop:[],
				checked:false
			}
		},

		created:function(){
			this.isToken();
		},
		computed:{
			isall:function(){
				if((this.checkedNames.length)===this.shopCart.length){
					//this.checked=true
					return true
				}
				if((this.checkedNames.length)<this.shopCart.length){
					//this.checked=false
					return false
				}
			}
		},
		methods:{	
			onSubmit:function(){

			},
			obai:function(e){
				//console.log(e)
				//回调循环，价格相加
				if(e!=""){
					this.optional=false;
					this.allprice=0;
					e.forEach((val) => {
						this.allprice+=val.goods_price*val.cart_number;
					});
				}else{
					this.optional=true;
					this.allprice=0;
				}
				//判断所选数量，和总数量相比，小于，修改全选状态为false
				if(this.isall == false){
					//console.log(this.checkedNames)
					//alert(1)
					this.checked=false
				}
				//判断所选数量，和总数量相比，等于，修改全选状态为true
				if(this.isall==true){
					//alert(5)
					this.checked=true
				}
			},

			//点击全选按钮时，判断所选商品状态，
			toggleAll:function(){
				//如果所选商品数量小于总数量（不是全选状态），点击后商品全部选中
				if(this.isall == false){
					this.$refs.checkboxGroup.toggleAll(true);
				}
				//如果所选商品数量等于总数量（全选状态），点击后商品全部反选
				if(this.isall==true){
					this.$refs.checkboxGroup.toggleAll();
				}	
			},

            //判断用户是否登陆，登录从mongodb中取，没有从本地localstorge中取
            isToken:function(){
				if(getToken()){
					cart().then(res=>{
						if(res.status==20000){
							this.shopCart=res.data;
						}else{
							
						}
					}).catch(error=>{
						Notify({ type: 'warning',message: '网络异常' })
					});
				}else{
					this.shopCart=getCart()
				}
				
			},

			//点击修改商品数量			
			updateNum:function(value){
				alert(value)
				updateNum(value).then(res=>{

				}).catch(error=>{

				})
				Toast.loading({ forbidClick: true });
				setTimeout(() => {
					Toast.clear();
					// 注意此时修改 value 后会再次触发 change 事件
					this.value = value;
				}, 500);
			},
				
			//点击提交前往订单确认页面
			onSubmit:function(){
                this.$router.push({
					//跳转的页面
					path: '/checkorder',
					//跳转传出的参数
					query: {
						product :JSON.stringify(this.checkedNames) 
					}
			    })
			}	
			


		},

		


	}

</script>

<style>
	@import '../../static/css/core.css';
	@import '../../static/css/home.css';
	@import '../../static/css/icon.css';
</style>
