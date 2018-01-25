/*
 * @Author: alex (chenzeyongjsj@163.com) 
 * @Date: 2018-01-25 22:03:48 
 * @Last Modified by: alex (chenzeyongjsj@163.com)
 * @Last Modified time: 2018-01-26 00:47:51
 */
<template>
  <div id="crumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: item.url }" v-for="item in crumbs" :key="item.id">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Crumb",
  props: {
    crumbs: '' //面包屑
  },
  data() {
    return {};
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
