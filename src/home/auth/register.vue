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
						@blur="checkPhone"
						label="手机号:"
						left-icon="contact"
						right-icon="question-o"
						placeholder="请输入手机号码或者邮箱"
						:error-message="message.user_phone"
					/>
                </van-cell-group> 
                <br>
				<van-cell-group>  
					<van-field
						v-model="user.user_pwd"
						@blur="checkPwd"
						type="password"
						label="密码:"
						placeholder="请输入密码"
						left-icon="contact"
						right-icon="question-o"
						:error-message="message.user_pwd"
					/>
                </van-cell-group>  
                <br>
				<van-cell-group> 
					<van-field	
						v-model="user.user_repwd"
						@blur="checkRepwd"
						type="password"
						label="确认密码:"
						placeholder="请输入密码"
						left-icon="contact"
						right-icon="question-o"
						:error-message="message.user_repwd"
					/>
                </van-cell-group> 
                <br>
				<van-cell-group>     
					<van-field
						v-model="user.code"
						@blur="checkCode"
						center
						left-icon="contact"
						clearable
						label="短信验证码:"
						placeholder="请输入验证码"
						:error-message="message.code"
					>
					<van-button slot="button" :disabled="code.disabled" size="small" type="primary" @click="sendMsg">{{code.word}}</van-button>
					</van-field> 
				</van-cell-group>

			</van-col>
        </van-row>
		<br>
        <van-button :disabled="!isPass" @click="register" size="large" color="linear-gradient(to right, #4bb0ff, #6149f6)">快速注册</van-button>
        <br><br><br>
		<van-row>
  			<van-col span="8" ></van-col>
			<van-col span="9">
				<router-link :to="{path:'/login'}" ><font size="2">已有账号 前往登录</font></router-link>
			</van-col>
			<van-col span="7" ></van-col>
		</van-row>	
    </div>
</template>

<script>
	import {register,sendMsg} from '@/api/auth/register.js'
	import {setToken} from '@/beforeEach/token.js'
	import {setRetoken} from '@/beforeEach/retoken.js'
	import Vue from 'vue';
	import { Notify } from 'vant';
	Vue.use(Notify);


	export default {
		data() {
			return {
			    note: {
					backgroundImage:"url('')",
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
					code:"",
				},
				
				validate:{
					user_phone:false,
					user_pwd:false,
					user_repwd:false,
					code:false,
				},

				message:{
					user_phone:"",
					user_pwd:"",
					user_repwd:"",
					code:""

				},
				code:{
                    disabled:true,
					word:"发送验证码",
					time:5
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
					this.message.user_phone="请填写"
					this.code.disabled=true
					return false;  
				}

				const reg1 = /^1[3456789]\d{9}$/
                const reg2 = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/
                if(!reg1.test(this.user.user_phone)&&!reg2.test(this.user.user_phone)){
					this.validate.user_phone=false
					this.message.user_phone="格式错误"
					this.code.disabled=true
					return false; 
				}
				
				this.validate.user_phone=true
				this.code.disabled=false
				this.message.user_phone=""
			},

			checkPwd:function(){
                if(this.user.user_pwd==""){
					this.validate.user_pwd=false
					this.message.user_pwd="请填写密码"
					return false
				}

				const reg1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/
				
                if(!reg1.test(this.user.user_pwd)){
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

			checkCode:function(){
                if(this.user.code==""){
					this.validate.code=false;
					this.message.code="请输入验证码"
					return false; 
				}
				this.validate.code=true
				this.message.code=""
			},

			//发送验证码
			sendMsg:function(){
				if(!this.code.disabled){
					this.code.disabled=true
					sendMsg({user_account:this.user.user_phone}).then(response=>{
						if(response.status==20000){
							Notify({ type: 'warning', message:response.message});
							const time = setInterval(()=>{
								if(this.code.time>0){
									this.code.word = "重新发送("+this.code.time+")"
									this.code.time--
								}else{
									clearInterval(time)
									this.code.word = "发送验证码";
									this.code.time = 5;
									this.code.disabled=false
								}
							},1000)		
						}

						if(response==40001){
							Notify({ type: 'warning', message: 'response.message' });
							this.code.disabled=false
						}
					}).catch(error=>{
						this.code.word = "发送验证码";
						this.code.disabled=false
                        Notify({ type: 'warning', message: '网络异常' });
				    }) 
				}
			},

			//提交注册
			register:function(){
				register(this.user).then(response=>{
                if(response.status==20000){
					Notify({ type: 'warning', message:response.message});
					setToken(response.token)
                    setRetoken(response.refresh_token)
					this.$router.replace({path:"/"});

				}
                if(response.status==40001){
                    Notify({ type: 'warning', message:response.message});
				}

				if(response.status=40000){
					Notify({ type: 'warning', message:response.message});
				}
				
				}).catch(error=>{
                    Notify({ type: 'warning',message: '网络异常' })
				})
				
			}



		}


	}
	
</script>
<style scoped>

</style>