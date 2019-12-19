<template>
    <div>
        <header class="aui-header-default aui-header-fixed aui-header-bg">
            <a href="javascript:history.back(-1)" class="aui-header-item">
                <i class="aui-icon aui-icon-back-white"></i>
            </a>
            <div class="aui-header-center aui-header-center-clear">
                <div class="aui-header-center-logo">
                    <div id="scrollSearchPro">
                        <span class="current">商品</span>
                        <span>评价</span>
                        <span>详情</span>
                    </div>
                </div>
            </div>
            <a href="javascript:;" class="aui-header-item-icon select"    style="min-width:0;">
                <i class="aui-icon aui-icon-share-pd selectVal" onselectstart="return false"></i>
                <div class="aui-header-drop-down selectList">
                    <div class="aui-header-drop-down-san"></div>
                    <div class="">
                        <p class="" onclick="location='http://www.a-ui.cn/'" >消息</p>
                        <p class="" onclick="location='index.html'">首页</p>
                        <p class="" onclick="location='index.html'">帮助</p>
                        <p class="" onclick="location='index.html'">分享</p>
                    </div>
                </div>
            </a>
	    </header>

        <!-- 商品轮播图 -->
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index" @click="albums">
                <img :src="image" width="100%"/>
            </van-swipe-item>
        </van-swipe>

        <!-- 商品手滑相册 -->   
        


        <!-- 商品信息：名称价格简介 -->
        <div class="aui-real-price clearfix">   
            <van-notice-bar
                :text="goods.content"
                left-icon="volume-o"
            />
            <span>
                <i>￥</i>{{goods.goods_price}}
            </span>
            <del><span class="aui-font-num">￥{{goods.goods_market_price}}</span></del>
            <div class="aui-settle-choice">
                <span>促销价</span>
            </div>
        </div>

        <div class="aui-product-title">
            <h2>
                {{goods.goods_name}}
            </h2>
            <p>
                {{goods.goods_small_content}}
            </p>
        </div>

        <van-row>   
            <van-col span="4" >商品参数 </van-col>
            <van-col span="20">
                <van-grid :column-num='group.length'>
                    <van-grid-item
                            @click="can"        
                            v-for="value in group"
                            :key="value"
                            icon="photo-o"
                            :text="value"
                        />
                </van-grid>
            </van-col>
        </van-row>
        
        <!-- 详细参数 -->
        
        <van-action-sheet v-model="cansu.show" title="详细参数">
            <p v-for="(value,key) in attr_value" :key="key">
                    <b><font color="#989B99">{{key}}</font>:{{value}}</b>
            </p>
        </van-action-sheet>



        <!-- 货品选择栏 -->
        <div class="aui-product-coupon">
            <a href="javascript:;" @click="goods_sku" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
                <div class="aui-address-cell-bd">选择</div>
                <div class="aui-address-cell-ft">颜色分类</div>
            </a>
            
            <van-sku
                v-model="sku.show"
                :sku="sku.sku"
                :goods="goods"
                :goods-id="goods_id"
                :quota="sku.quota"
                @sku-selected="selectattr"
                :hide-stock="sku.sku.hide_stock"
                @add-cart="addCart"
            />

            
            
            <a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
                <div class="aui-address-cell-bd">配送</div>
                <div class="aui-address-cell-ft">上海 至 北京海淀区</div>
            </a>
            <a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
                <div class="aui-address-cell-bd">运费</div>
                <div class="aui-address-cell-ft">免运费</div>
            </a>
            
        </div>

        
        <!-- 客服购买区 -->
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" />

            <router-link :to="{path:'/cart'}" class="aui-footer-item">
                <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
            </router-link>

            <van-goods-action-button @click="goods_sku" type="warning" text="加入购物车" />

            <van-goods-action-button @click="goods_sku" type="danger" text="立即购买" />

        </van-goods-action>
          
    </div>
</template>



<script>

    import {getgoods} from '@/api/goods.js';
    import Vue from 'vue';
    
    import {
        Swipe, 
        SwipeItem ,
        ImagePreview ,
        Notify, 
        Sku,
        ActionSheet,
        GoodsAction,
        GoodsActionIcon,
        GoodsActionButton,
        Row, Col,
        Grid, GridItem,
        NoticeBar
    }from 'vant';
    
    Vue
    .use(Swipe)
    .use(SwipeItem)
    .use(GoodsAction)
    .use(GoodsActionIcon)
    .use(GoodsActionButton)
    .use(Notify)
    .use(Sku)
    .use(ActionSheet)
    .use(ImagePreview)
    .use(Row).use(Col)
    .use(Grid).use(GridItem)
    .use(NoticeBar) 

    export default {
        data(){                 
            return {

                cansu:{
                    show:false,
                    cansu:{}
                },

                album:{
                    index: 0,
                    startPosition: 0,
                    images: [
                        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
                        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
                    ],
                },
                 
                sku:{
                    quota:5,
                    show: false,
                    sku: {
                        tree:{},
                        stock_num:{},
                        list:{},   
                        price:'', 
                        hide_stock: false // 是否隐藏剩余库存
                    },

                },
                
                goods_id:"",
                goods:{},
                group:{},
                attr_value:{},
                selectGoodsAttr:{},
                selectGoodsImg:"",
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ],

            }
        },

        created(){
            
            //获取传入的参数
            this.goods_id=this.$route.query.goods_id
            this.getgoods()
            
        },

        methods:{

            can:function(){
                if(this.attr_value==undefined){
                    this.cansu.show=false
                }else{
                    this.cansu.show=true
                }
                
            },
            //手滑相册
        
            albums:function(){
                ImagePreview(
                    this.album,

                )  
                
            },
                
            //获取该商品的基本信息
            getgoods:function(){
                getgoods({goods_id:this.goods_id}).then(response=>{
                    if(response.status == 20000){
                        this.goods = response.goods
                        this.group = response.group
                        this.attr_value = response.attr
                        this.sku.sku.tree = response.tree
                        this.sku.sku.stock_num = response.num
                        this.sku.sku.list = response.list
                        this.sku.sku.price = response.goods_price
                        
                    }else{
                        Notify({ type: 'warning',message: response.message })
                    }
   
                }).catch(error=>{
                    Notify({ type: 'warning',message: '网络异常' })
                })
            },

            selectattr:function(data){
                this.selectGoodsAttr[data.skuValue.skuKeyStr]=data.skuValue.name,
                this.selectGoodsImg=data.skuValue.imgUrl
                //console.log(data)
            },

            //点击显示商品选择栏
            goods_sku:function(){
                this.sku.show=true
            },

            //添加购物车
            addCart:function(skuData){
                if(skuData.selectedSkuComb==undefined){
                    var cartGoods={
                        goods_name:this.goods.goods_name,
                        goods_id:skuData.goodsId,
                        product_id:0,
                        goods_price:this.goods.goods_price ,
                        goods_attr:"",
                        goods_img:this.goods.goods_img,
                        goods_des:this.goods.goods_small_content,       
                        cart_number:skuData.selectedNum, 
                        goods_market_price:this.goods.goods_market_price   
                    }   
                }else{  
                    var cartGoods={
                        goods_name:this.goods.goods_name,
                        goods_id:skuData.goodsId,
                        product_id:skuData.selectedSkuComb.id,
                        goods_price:skuData.selectedSkuComb.price,
                        goods_attr:this.selectGoodsAttr,
                        goods_img:this.selectGoodsImg,
                        goods_des:this.goods.goods_small_content,
                        cart_number:skuData.selectedNum,
                        goods_market_price:this.goods.goods_market_price       
                    }   
                }
                //console.log(cartGoods)
                this.$store.dispatch("addCart",cartGoods)
                
            },

            buy:function(){

            }


            
        }

    }

</script>

<style >
    @import '../../static/css/core.css';
	@import '../../static/css/home.css';
	@import '../../static/css/icon.css';
</style>