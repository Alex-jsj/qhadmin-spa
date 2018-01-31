/*
 * @Author: Alex chenzeyongjsj@163.com 
 * @Date: 2018-01-31 14:23:03 
 * @Last Modified by: Alex chenzeyongjsj@163.com
 * @Last Modified time: 2018-01-31 14:34:22
 */

<template>
  <div id="system_admin" class="public-wap">
    <!-- Header -->
    <Header></Header>
    <!-- Nav -->
    <Nav :systemNavShow="true"></Nav>
    <div class="main">
      <!-- SideBar -->
      <SideBar></SideBar>
      <!-- Subject -->
      <div class="subject"></div>
    </div>
    <!-- Footer -->
    <Footer :systemFooterShow="false"></Footer>
  </div>
</template>

<script>
/* 引入组件 */
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";
/* 后台登录页 */
export default {
  name: "System_Administrators",
  data() {
    return {
      systemNavShow: true, //本页面需要展示在nav的元素
      systemFooterShow: false //本页面在Footer需要隐藏的元素
    };
  },
  components: {
    Header,
    Nav,
    Footer,
    SideBar
  },
  mounted: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../../assets/css/less_config.less";
</style>
