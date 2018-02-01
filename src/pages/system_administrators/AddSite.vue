/*
 * @Author: Alex chenzeyongjsj@163.com 
 * @Date: 2018-01-31 15:51:10 
 * @Last Modified by: alex (chenzeyongjsj@163.com)
 * @Last Modified time: 2018-02-01 22:31:15
 */


<template>
  <div id="AddSite" class="public-container">
    <Crumb :crumbs="crumbs"></Crumb>
  </div>
</template>

<script>
/* 引入组件 */
import Crumb from "@/components/Crumb";
/* 工作台 */
export default {
  name: "AddSite",
  data() {
    return {
      //面包屑
      crumbs: [
        {
          name: "工作台",
          url: "/pages/system_administrators/System_Administrators"
        },
        {
          name: "站点管理",
          url: ""
        },
        {
          name: "添加站点",
          url: ""
        }
      ]
    };
  },
  components: {
    Crumb
  },
  mounted: function() {
    //侧边导航定位
    sessionStorage.setItem("system_menu_idx", 1);
    this.$store.commit("update_system_menu_idx", 1);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../../assets/css/less_config.less";
</style>
