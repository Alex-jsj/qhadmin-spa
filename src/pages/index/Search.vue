/*
 * @Author: alex (chenzeyongjsj@163.com) 
 * @Date: 2018-01-17 18:14:52 
 * @Last Modified by: alex (chenzeyongjsj@163.com)
 * @Last Modified time: 2018-01-26 00:49:46
 */

<template>
  <div id="search" class="public-wap">
    <!-- nav -->
    <Nav :searchNavShow="true"></Nav>
    <!-- main -->
    <div class="main">
      1
    </div>
  </div>
</template>

<script>
/* 引入nav模块 */
import Nav from "@/components/Nav";
/* 前台搜索页 */
export default {
  name: "Search",
  data() {
    return {
      searchNavShow: true //本页面需要展示在nav的元素
    };
  },
  watch: {},
  components: {
    Nav
  },
  mounted: function() {},
  methods: {}
};
</script>

