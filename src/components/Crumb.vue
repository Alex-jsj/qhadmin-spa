/*
 * @Author: alex (chenzeyongjsj@163.com) 
 * @Date: 2018-01-25 22:03:48 
 * @Last Modified by: alex (chenzeyongjsj@163.com)
 * @Last Modified time: 2018-02-01 22:31:32
 */
<template>
  <div id="crumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: item.url }" v-for="(item,index) in crumbs" :key="item.id" @click.native="menu_location(index)">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Crumb",
  props: {
    crumbs: "" //面包屑
  },
  data() {
    return {};
  },
  methods: {
    menu_location: function(index) {
      if (index == 0) {
        //侧边导航定位
        sessionStorage.setItem("system_menu_idx", 0);
        this.$store.commit("update_system_menu_idx", 0);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#crumb {
  height: 20px;
  margin-bottom: 20px;
}
</style>
