// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//
//引入axios
import axios from 'axios'
Vue.prototype.$http = axios // 通过修改原型链，来更方便的使用

//引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//引入外部资源
import public_css from './assets/css/public.css'
import icon_css from './assets/iconfont/iconfont.css' //阿里巴巴图标库

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})
