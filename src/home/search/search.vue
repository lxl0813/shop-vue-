<template>
    <div>
        <header class="aui-header-default aui-header-fixed aui-header-bg">
			<a href="#" class="aui-header-item">
				<i class="aui-icon aui-icon-code"></i>
			</a>
				<div class="aui-header-center aui-header-center-clear">
					<div class="aui-header-search-box">
					<i class="aui-icon aui-icon-small-search"></i>
					<input id="" type="text"  placeholder="iphone8 手机钢化膜" class="aui-header-search">
				</div>
			</div>
			<a href="#" class="aui-header-item-icon">
				<i class="aui-icon aui-icon-packet"></i>
				<i class="aui-icon aui-icon-member"></i>
			</a>
		</header>

        <div class="aui-banner-content aui-fixed-top" data-aui-slider>
            <van-card
                @click="aaa(val.goods_id,val.goods_name)" 
                v-for="(val, index) in goods" :key="index"
                :price="val.goods_price"
                :origin-price="val.goods_market_price"
                :desc="val.goods_desc"  
                :title="val.goods_name"
                :thumb="val.goods_img"
                
            >
                <div slot="footer">
                    <van-button size="mini">按钮</van-button>
                    <van-button size="mini">按钮</van-button>
                </div>
            </van-card>    
        </div>  	 


        
        
    </div>
</template>

<script>

    import {goods} from '@/api/goods.js';
    import Vue from 'vue';
    import { Tab, Tabs } from 'vant';
    Vue.use(Tab).use(Tabs);
    import { Card } from 'vant';
    Vue.use(Card);
	import { Notify } from 'vant';
	Vue.use(Notify);


    export default {
        data(){
            return {
                
                cate_id:"",
                cate_name:"",
                goods:[],
                
            }
        },
        

        created(){
            //获取传入的参数
            this.cate_id = this.$route.query.cate_id,
            this.cate_name = this.$route.query.cate_name
            this.getgoods()
        },


        methods:{
            getgoods:function(){
                goods({cate_id:this.cate_id}).then(response=>{
                    if(response.status == 20000){
                        this.goods = response.data
                    }else{
                        Notify({ type: 'warning',message: response.message })
                    }

                }).catch(error=>{
                    Notify({ type: 'warning',message: '网络异常' })
                })
            },

            aaa:function(id){
                this.$router.push({
					//跳转的页面
					path: '/goods',
					//跳转传出的参数
					query: {
						goods_id:id,
						//goods_name:text
					}
			    })
			}


        }

    

}
</script>

<style >
    @import '../../static/css/core.css';
	@import '../../static/css/home.css';
	@import '../../static/css/icon.css';
</style>