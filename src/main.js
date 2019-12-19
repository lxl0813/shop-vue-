import Vue from 'vue'
import App from './App.vue'
import router from './routers/index.js'
import Vant from 'vant';
import store from '@/store/index.js'
import 'vant/lib/index.css';

import '@/beforeEach/routerGuard.js'
Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
