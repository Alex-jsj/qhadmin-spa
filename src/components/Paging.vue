/*
 * @Author: alex (chenzeyongjsj@163.com) 
 * @Date: 2018-01-25 22:03:48 
 * @Last Modified by: alex (chenzeyongjsj@163.com)
 * @Last Modified time: 2018-01-26 00:47:51
 */
<template>
  <div id="paging">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPaging.currentPage" :page-sizes="currentPaging.pageSizes" :page-size="currentPaging.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="currentPaging.totals">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Paging",
  props: {},
  data() {
    return {
      //分页
      currentPaging: {}
    };
  },
  watch: {
    //分页
    total: function(newVal, oldVal) {
      console.log(newVal);
    }
  },
  mounted: function() {
    //获取分页数据
    this.$http({
      method: "get",
      url: "./static/mock/paging.json"
    })
      .then(response => {
        var cw =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        this.currentPaging = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    //分页
    handleSizeChange(val) {
      this.currentPaging.pageSize = val; // 设置每页显示的条数
    },
    handleCurrentChange(val) {
      this.currentPaging.currentPage = val; // 设置当前页
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#paging {
  width: 100%;
  margin-top: 40px;
  margin-bottom: 10px;
}
</style>
