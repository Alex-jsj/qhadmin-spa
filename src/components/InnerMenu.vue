/*
 * @Author: Alex chenzeyongjsj@163.com 
 * @Date: 2018-02-02 11:01:48 
 * @Last Modified by: Alex chenzeyongjsj@163.com
 * @Last Modified time: 2018-02-02 15:07:40
 */

<template>
  <div id="inner-menu" :class="{'system-inner':innerMenu.system}">
    <ul class="nav-column">
      <li class="float-left" v-for="item in innerMenu.list" :key="item.id">
        <router-link :to="item.url">
          <el-button type="primary" size="mini">{{item.name}}</el-button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SecondMenu",
  props: {
    innerMenu: {} //面包屑
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#inner-menu {
  width: 100%;
  height: 66px;
  background: #fff;
  padding: 0 20px;
  padding-top: 18px;
  border-radius: 3px;
  &::after {
    content: "";
    display: block;
    visibility: hidden;
    clear: both;
  }
  .nav-column {
    li {
      margin-right: 10px;
      button {
        display: block;
        span {
          display: block;
        }
      }
    }
    .nav_column_list_mini {
      .el-button {
        padding: 7px 5px;
      }
    }
  }
}
#inner-menu.system-inner {
  height: 28px;
  padding: 0;
}
</style>
