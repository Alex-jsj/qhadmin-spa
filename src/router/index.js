import Vue from 'vue'
import Router from 'vue-router'
//前台首页
import Home from '@/pages/index/Home'
import Search from '@/pages/index/Search' //前台搜索页
import Rank from '@/pages/index/Rank' //前台搜索页
//登录页
import Login from '@/pages/admin/Login'
//后台首页
import Administrators from '@/pages/administrators/Administrators'
//系统管理员后台
import System_Administrators from '@/pages/system_administrators/System_Administrators'
import Workbench from '@/pages/system_administrators/Workbench' //首页
import AddSite from '@/pages/system_administrators/AddSite' //添加站点
import SiteList from '@/pages/system_administrators/SiteList' //站点列表
import ContentManagement from '@/pages/system_administrators/ContentManagement' //内容管理
import DataBackup from '@/pages/system_administrators/DataBackup' //数据备份
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
        {
            path: '/pages/administrators/Administrators',
            component: Administrators
        },
        {
            path: '/pages/system_administrators/System_Administrators',
            component: System_Administrators,
            children: [{
                    path: '/',
                    component: Workbench
                },
                {
                    path: 'Workbench',
                    component: Workbench
                },
                {
                    path: 'AddSite',
                    component: AddSite
                },
                {
                    path: 'SiteList',
                    component: SiteList
                },
                {
                    path: 'ContentManagement',
                    component: ContentManagement
                },
                {
                    path: 'DataBackup',
                    component: DataBackup
                },
            ]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
