<template>
	<div :style ="note">
		<!-- 商城logo -->
		<van-row>
			<van-col span="8"></van-col>
			<van-col span="8">
				<van-image
				    radius="100%"
					width="100"
					height="100"
					src="http://q0bp36mbu.bkt.clouddn.com/01.png"
                />
			</van-col>
			<van-col span="8"></van-col>
        </van-row>
          
        <br>
        <!-- 输入框 -->
        <van-row>
  			<van-col span="24" >
				<van-cell-group>
					<van-field
						v-model="user.user_phone"
						left-icon="contact"
						clearable
						label="手机号:"
						right-icon="question-o"
						placeholder="请输入手机号码或邮箱"
						@blur="checkPhone"
						:error-message="message.user_phone"
					/>
                </van-cell-group> 
                <br>
				<van-cell-group>  
					<van-field
						v-model="user.user_pwd"
						type="password"
						label="密码:"
						placeholder="请输入密码"
						left-icon="contact"
						right-icon="question-o"
						@blur="checkPwd"
						:error-message="message.user_pwd"
					/>
                </van-cell-group>  
                <br>
				<van-cell-group> 
					<van-field
						v-model="user.user_repwd"
						type="password"
						label="确认密码:"
						placeholder="请输入密码"
						left-icon="contact"
						right-icon="question-o"
						@blur="checkRepwd"
						:error-message="message.user_repwd"
					/>
                </van-cell-group> 

			</van-col>
        </van-row>
        
		<br>
        <van-button :disabled="!isPass" size="large" @click="login"  color="linear-gradient(to right, #4bb0ff, #6149f6)">点击登录</van-button>
        <br><br><br>
        <van-row>
  			<van-col span="8" ></van-col>
			<van-col span="9">
				<router-link :to="{path:'/register'}" ><font size="2">没有账号 前往注册</font></router-link>
			</van-col>
			<van-col span="7" ></van-col>
		</van-row>
    </div>
</template>

<script>
	import {login} from '@/api/auth/login.js'
	import {setToken,getToken} from '@/beforeEach/token.js'
	import {setRetoken} from '@/beforeEach/retoken.js'
	import { getCart ,delCart} from '@/beforeEach/cart';
	//import {addCartLocal} from '@/api/cart.js'
	import Vue from 'vue';
	import { Notify } from 'vant';
	Vue.use(Notify);


	export default {
		data() {
			return {
			    note: {
					backgroundImage:"url('http://q0bp36mbu.bkt.clouddn.com/background.jpg')",
					backgroundRepeat: "no-repeat",
					backgroundSize: "100% 100%",
					position:'fixed',
					width:"100%",
					height:"100%",
					zIndex:-1
				},

				user:{
					user_phone:"",
					user_pwd:"",
					user_repwd:"",
				},
				
				validate:{
					user_phone:false,
					user_pwd:false,
					user_repwd:false,
				},

				message:{
					user_phone:"",
					user_pwd:"",
					user_repwd:"",

				}

			}
		},
		computed:{
			isPass:function(){
            return this.validate.user_phone && this.validate.user_pwd && this.validate.user_repwd;
			}
		},
		methods:{
			checkPhone: function(){
				if(this.user.user_phone==""){
					this.validate.user_phone=false
					this.message.user_phone="请填写手机号"
					return false;  
				}

				const reg = /^1[3456789]\d{9}$/
                if(!reg.test(this.user.user_phone)){
					this.validate.user_phone=false
					this.message.user_phone="手机号码格式错误"
					return false; 
				}
				this.validate.user_phone=true
				this.message.user_phone=""
			},

			checkPwd:function(){
                if(this.user.user_pwd==""){
					this.validate.user_pwd=false
					this.message.user_pwd="请填写密码"
					return false
				}

				const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/
                if(!reg.test(this.user.user_pwd)){
					this.validate.user_pwd=false;
					this.message.user_pwd="密码必须是6到18位的英文字母和数字组成"
					return false; 
				}
				this.validate.user_pwd=true
				this.message.user_pwd=""
			},

			checkRepwd:function(){
                if(this.user.user_phone==""){
					this.validate.user_repwd=false;
					this.message.user_repwd="请填写密码"
					return false; 
				}

                if(this.user.user_repwd!=this.user.user_pwd){
					this.validate.user_repwd=false;
					this.message.user_repwd="请确保密码一致"
					return false; 
				}
				this.validate.user_repwd=true
				this.message.user_repwd=""
			},
			
			login:function(){
                login({user_phone:this.user.user_phone,user_pwd:this.user.user_pwd,cart:getCart()}).then(res=>{
					if(res.status==20000){
						Notify({ type: 'warning', message:res.message});
						setToken(res.token)
						setRetoken(res.refresh_token)
						delCart()
						this.$router.replace({path:"/"});
					}
				}).catch(error=>{
					Notify({ type: 'warning',message: 'sdfg' })
				});
			},

		

		
		}
	}


</script>

<style>
</style>

