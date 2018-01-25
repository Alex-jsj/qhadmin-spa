import Vue from 'vue'
import Router from 'vue-router'
//前台首页
import Home from '@/pages/index/Home'
import Search from '@/pages/index/Search' //前台搜索页
import Rank from '@/pages/index/Rank' //前台搜索页
//登录页
import Login from '@/pages/admin/Login'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/pages/index/Home',
            component: Home
        },
        {
            path: '/pages/index/Search',
            component: Search
        },
        {
            path: '/pages/index/Rank',
            component: Rank
        },
        {
            path: '/pages/admin/Login',
            component: Login
        },
    ]
})
