/*
 * @Author: alex (chenzeyongjsj@163.com) 
 * @Date: 2018-02-01 23:36:04 
 * @Last Modified by: alex (chenzeyongjsj@163.com)
 * @Last Modified time: 2018-02-02 00:21:31
 */

<template>
  <div id="Instructions" class="float-right">
    <p class="instructions-container" @click="dialogVisible = true">
      <i class="el-icon-question float-left"></i>
      <span class="float-right">使用说明</span>
    </p>
    <el-dialog title="使用说明" :visible.sync="dialogVisible" width="50%">
      <div v-for="item in instructionsInfo" :key="item.id">
        <p>{{item.title}}</p>
        <p>{{item.content}}</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Instructions",
  props: {
    instructionsInfo: Array
  },
  data() {
    return {
      dialogVisible: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../assets/css/less_config";
#Instructions {
  position: absolute;
  top: 18px;
  right: 20px;
  &::after {
    content: "";
    display: block;
    visibility: hidden;
    clear: both;
  }
  .instructions-container {
    color: @base_grey;
    cursor: pointer;
    &:hover {
      .el-icon-question,
      span {
        color: @base-color2;
      }
    }
    .el-icon-question {
      font-size: 18px;
      transition: all 0.3s;
    }
    span {
      font-size: 14px;
      margin-left: 5px;
      transition: all 0.3s;
    }
  }
}
</style>
