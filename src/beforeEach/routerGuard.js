import router from '@/routers/index.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {getToken} from './token.js'

router.beforeEach((to, from, next) => {
    NProgress.start()
	const token =getToken();
	if(token){
		if(to.path=='/login'||to.path=='/register'){
			router.replace({path:'/'});
		}else{
			next();
		}
	}else{
		if(to.path=='/checkorder' || to.path=='/user'){
			router.push({path:"/login",query:{redirect:to.path}});
		}else{
			next();
		}
	}
})

router.afterEach((to, from) => {
    NProgress.done();
})