import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //搜索选项
        search: {
            keyword: "",
            option: 0, //全局/标题
            source: true //切换搜索‘站群’和‘共享平台’
        }
    },
    mutations: {
        updateSearch(state, search) {
            state.search = search
        }
    }
})
