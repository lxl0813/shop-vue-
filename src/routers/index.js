import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const routes = [
    { 
	    path:'/',
        name:'show',
	    meta:{
		    title:"电子商城——首页",
	    },
	    component:resolve=>require(['@/home/show/show.vue'], resolve)
    },
	
	{
		path:'/home',
		redirect:{path:'/'},
	},
	
	{
		path:'*',
		name:'notFound',
		meta:{
		    title:"NotFound",
		},
		component:resolve=>require(['@/home/error/notFound.vue'], resolve)
	},
	
	{
		path:'/login',
		name:'login',
		meta:{
		    title:"电子商城——登录",
		},
		component:resolve=>require(['@/home/auth/login.vue'], resolve)
	},
	
	{
		path:'/register',
		name:'register',
		meta:{
			title:"电子商城——注册",
		},
		component:resolve=>require(['@/home/auth/register.vue'], resolve)
	},
	
	{
		path:'/cate',
		name:'cate',
		meta:{
			title:"电子商城——分类",
		},
		component:resolve=>require(['@/home/cate/cate.vue'], resolve)
	},
	
	{
		path:'/cart',
		name:'cart',
		meta:{
			title:"电子商城——购物车",
		},
		component:resolve=>require(['@/home/cart/cart.vue'], resolve)
	},
	
	{
		path:'/user',
		name:'user',
		meta:{
			title:"电子商城——用户",
		},
		component:resolve=>require(['@/home/user/user.vue'], resolve)
	},

	{
		path:"/search",
		name:"search",
		meta:{
			title:"电子商城——商品",
		},
		component:resolve=>require(['@/home/search/search.vue'], resolve)
	},

	{
		path:"/goods",
		name:"goods",
		meta:{
			title:"电子商城——商品详情",
		},
		component:resolve=>require(['@/home/goods/goods.vue'], resolve)
	},

	{
		path:'/checkorder',
		name:'checkorder',
		meta:{
		    title:"电子商城——订单确认",
		},
		component:resolve=>require(['@/home/order/checkorder.vue'], resolve)
	},


];

const router = new VueRouter({
    routes 
})

export default router