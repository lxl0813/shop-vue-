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
			
			<div class="aui-content-box">
				
				<div class="aui-banner-content aui-fixed-top" data-aui-slider>
					<van-loading type="spinner" color="#1989fa" v-if="image_show"/>
					<van-swipe :autoplay="3000">
					  <van-swipe-item v-for="(image, index) in images" :key="index">
					    <img :src="image.banner_img" width="100%"/>
					  </van-swipe-item>
					</van-swipe>
					
				</div>
				
				<section class="aui-grid-content">
					<div class="aui-grid-row">
						<a href="my-sign.html" class="aui-grid-row-item">
							<i class="aui-icon-large aui-icon-sign"></i>
							<p class="aui-grid-row-label">每日签到</p>
						</a>
						<a href="my-time.html" class="aui-grid-row-item">
							<i class="aui-icon-large aui-icon-time"></i>
							<p class="aui-grid-row-label">限时抢购</p>
						</a>
						<a href="my-membership.html" class="aui-grid-row-item">
							<i class="aui-icon-large aui-icon-vip"></i>
							<p class="aui-grid-row-label">会员专享</p>
						</a>
						<a href="my-purchase.html" class="aui-grid-row-item">
							<i class="aui-icon-large aui-icon-group"></i>
							<p class="aui-grid-row-label">好货拼团</p>
						</a>
						<a href="my-invitation.html" class="aui-grid-row-item">
							<i class="aui-icon-large aui-icon-share"></i>
							<p class="aui-grid-row-label">分享领券</p>
						</a>
					</div>
				</section>
				<div class="aui-avd-content clearfix">
					<a href="#">
						<img src="../../static/img/pd/cf-1.jpg" alt="">
					</a>
					<a href="#">
						<img src="../../static/img/pd/cf-3.jpg" alt="">
					</a>
				</div>
			
				<div class="aui-dri"></div>
				
				<div class="aui-recommend">
					<img src="../../static/img/bg/icon-tj1.jpg" alt="">
					<!--<h2>为你推荐</h2>-->
				</div>
				<section class="aui-list-product">
					<div class="aui-list-product-box">
						<a href="ui-product.html" class="aui-list-product-item">
							<div class="aui-list-product-item-img">
								<img src="../../static/img/pd/sf-15.jpg" alt="">
							</div>
							<div class="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div class="aui-list-product-mes-box">
									<div>
									<span class="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span class="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div class="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="ui-product.html" class="aui-list-product-item">
							<div class="aui-list-product-item-img">
								<img src="../../static/img/pd/sf-14.jpg" alt="">
							</div>
							<div class="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div class="aui-list-product-mes-box">
									<div>
									<span class="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span class="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div class="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="ui-product.html" class="aui-list-product-item">
							<div class="aui-list-product-item-img">
								<img src="../../static/img/pd/sf-13.jpg" alt="">
							</div>
							<div class="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div class="aui-list-product-mes-box">
									<div>
									<span class="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span class="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div class="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="ui-product.html" class="aui-list-product-item">
							<div class="aui-list-product-item-img">
								<img src="../../static/img/pd/sf-12.jpg" alt="">
							</div>
							<div class="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div class="aui-list-product-mes-box">
									<div>
									<span class="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span class="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div class="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="ui-product.html" class="aui-list-product-item">
							<div class="aui-list-product-item-img">
								<img src="../../static/img/pd/sf-11.jpg" alt="">
							</div>
							<div class="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div class="aui-list-product-mes-box">
									<div>
									<span class="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span class="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div class="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="ui-product.html" class="aui-list-product-item">
							<div class="aui-list-product-item-img">
								<img src="../../static/img/pd/sf-10.jpg" alt="">
							</div>
							<div class="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div class="aui-list-product-mes-box">
									<div>
									<span class="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span class="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div class="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="ui-product.html" class="aui-list-product-item">
							<div class="aui-list-product-item-img">
								<img src="../../static/img/pd/sf-9.jpg" alt="">
							</div>
							<div class="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div class="aui-list-product-mes-box">
									<div>
									<span class="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span class="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div class="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="ui-product.html" class="aui-list-product-item">
							<div class="aui-list-product-item-img">
								<img src="../../static/img/pd/sf-8.jpg" alt="">
							</div>
							<div class="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div class="aui-list-product-mes-box">
									<div>
									<span class="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span class="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div class="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="ui-product.html" class="aui-list-product-item">
							<div class="aui-list-product-item-img">
								<img src="../../static/img/pd/sf-16.jpg" alt="">
							</div>
							<div class="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div class="aui-list-product-mes-box">
									<div>
									<span class="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span class="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div class="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="ui-product.html" class="aui-list-product-item">
							<div class="aui-list-product-item-img">
								<img src="../../static/img/pd/sf-17.jpg" alt="">
							</div>
							<div class="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div class="aui-list-product-mes-box">
									<div>
									<span class="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span class="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div class="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="ui-product.html" class="aui-list-product-item">
							<div class="aui-list-product-item-img">
								<img src="../../static/img/pd/sf-18.jpg" alt="">
							</div>
							<div class="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div class="aui-list-product-mes-box">
									<div>
									<span class="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span class="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div class="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="ui-product.html" class="aui-list-product-item">
							<div class="aui-list-product-item-img">
								<img src="../../static/img/pd/sf-19.jpg" alt="">
							</div>
							<div class="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div class="aui-list-product-mes-box">
									<div>
									<span class="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span class="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div class="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="ui-product.html" class="aui-list-product-item">
							<div class="aui-list-product-item-img">
								<img src="../../static/img/pd/sf-20.jpg" alt="">
							</div>
							<div class="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div class="aui-list-product-mes-box">
									<div>
									<span class="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span class="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div class="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="ui-product.html" class="aui-list-product-item">
							<div class="aui-list-product-item-img">
								<img src="../../static/img/pd/sf-21.jpg" alt="">
							</div>
							<div class="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div class="aui-list-product-mes-box">
									<div>
									<span class="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span class="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div class="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="ui-product.html" class="aui-list-product-item">
							<div class="aui-list-product-item-img">
								<img src="../../static/img/pd/sf-22.jpg" alt="">
							</div>
							<div class="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div class="aui-list-product-mes-box">
									<div>
									<span class="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span class="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div class="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="ui-product.html" class="aui-list-product-item">
							<div class="aui-list-product-item-img">
								<img src="../../static/img/pd/sf-23.jpg" alt="">
							</div>
							<div class="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div class="aui-list-product-mes-box">
									<div>
									<span class="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span class="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div class="aui-comment">986评论</div>
								</div>
							</div>
						</a>
					</div>
				</section>
			</div>
			<Footer></Footer>
	</div>
	
</template>

<script> 
	import Footer from '@/components/footer.vue';
	import {banner} from '@/api/home.js';
	
	
	export default {
		data:function(){
			return {
				images:[],
				image_show:true,
				hot:[],
				recommend:[],
				best:[],
			}
		},
		
		created:function(){
			this.banner();
			this.getRecommend();
			this.getHot();
			this.getBest();
		},
		methods:{
			banner:function(){
				banner().then(res=>{
					if(res.status==20000){
						this.images=res.data;
						this.image_show=false;
					}
				}).catch(error=>{
					console.log("111")
				});
			},
			getHot:function(){
				// getHotGoods().then().catch()
			},
			getRecommend:function(){
				console.log("发送ajax推荐商品");
			},
			getBest:function(){
				console.log("发送ajax精品");
			}
		},

		components:{
			Footer,
		}
	}
	
	
</script>

<style scoped>
    @import '../../static/css/core.css';
	@import '../../static/css/home.css';
	@import '../../static/css/icon.css';
	
</style>
