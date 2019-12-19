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
			<a href="#" class="aui-header-item-icon">·
				<i class="aui-icon aui-icon-packet"></i>
				<i class="aui-icon aui-icon-member"></i>
			</a>
		</header>
			
        <div class="aui-banner-content aui-fixed-top" data-aui-slider>	
			<van-tree-select
				height="100%"
				:items="items"
				:main-active-index.sync="activeIndex"
			>
				<template slot="content">
					<van-grid :column-num="2" icon-size="80">
						<van-grid-item :icon="val.cate_img"  @click="aaa(val.cate_id,val.text)" v-for="(val, index) in texts" :key="index"  :text="val.text" />
					</van-grid>
				</template>
			</van-tree-select>
		
        </div>

        
		<Footer></Footer>
			
	</div>
	
</template>

<script>
	import Footer from '@/components/footer.vue';
	import {getCate,getsonCate} from '@/api/cate.js';
	import Vue from 'vue';
	import { Notify } from 'vant';
	Vue.use(Notify);
	

	export default {
		data(){
			return {
				activeIndex: 0,
				items:[],
				texts:[]
			}
		},

		created:function(){
			this.getCate();
			
		},

        watch: {
        	activeIndex(){
				this.getsonCate();
			}
          
        },
       
		methods:{
			getCate:function(){
				getCate().then(response=>{
                    if(response.status==20000){
						this.items=response.data
						this.getsonCate();
					}else{
                        Notify({ type: 'warning', message:response.message});
					}
                    
				}).catch(error=>{
                    Notify({ type: 'warning',message: '网络异常' })
				});
				
			},

			getsonCate:function(){
				getsonCate(this.items[this.activeIndex]).then(response=>{
                    if(response.status == 20000){
                        this.texts=response.data
					}else{
						this.texts=""
						Notify({ type: 'warning', message:response.message});
					}
				}).catch(error=>{
                    Notify({ type: 'warning',message: '网络异常' })
				})
			},

			aaa:function(id,text){
                this.$router.push({
					//跳转的页面
					path: '/search',
					//跳转传出的参数
					query: {
						cate_id:id,
						cate_name:text
					}
			    })
			}

		},

		components:{
			Footer,
		}
	}


</script>

<style>
    @import '../../static/css/core.css';
	@import '../../static/css/home.css';
	@import '../../static/css/icon.css';
</style>
