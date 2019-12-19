<template>
	<footer class="aui-footer-default aui-footer-fixed">
		
		<router-link :to="{path:'/'}" class="aui-footer-item aui-footer-active">
			<span class="aui-footer-item-icon aui-icon aui-footer-icon-home"></span>
			<span class="aui-footer-item-text">首页</span>
		</router-link>
		
		<router-link :to="{path:'/cate'}" class="aui-footer-item">
			<span class="aui-footer-item-icon aui-icon aui-footer-icon-class"></span>
			<span class="aui-footer-item-text">分类</span>
		</router-link>
		
		<router-link :to="{path:'/cart'}" class="aui-footer-item">
			<span class="aui-footer-item-icon aui-icon aui-footer-icon-car"></span>
			<span class="aui-footer-item-text">购物车</span>
		</router-link>
		
		<router-link :to="{path:'/user'}" class="aui-footer-item">
			<span class="aui-footer-item-icon aui-icon aui-footer-icon-me"></span>
			<span class="aui-footer-item-text">我的</span>
		</router-link>
	</footer>
</template>

<script>
</script>

<style>
</style>
