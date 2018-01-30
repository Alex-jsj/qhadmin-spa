/*
 * @Author: alex (chenzeyongjsj@163.com) 
 * @Date: 2018-01-17 18:14:52 
 * @Last Modified by: Alex chenzeyongjsj@163.com
 * @Last Modified time: 2018-01-30 17:36:19
 */

<template>
  <div id="admin">
    <!-- Header -->
    <Header></Header>
    <!-- nav -->
    <Nav :systemNavShow="true"></Nav>
    <!-- list -->

    <!-- footer -->
    <Footer :systemFooterShow="false"></Footer>
  </div>
</template>

<script>
/* 引入组件 */
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
/* 后台登录页 */
export default {
  name: "System_Administrators",
  data() {
    return {
      systemNavShow: true, //本页面需要展示在nav的元素
      systemFooterShow: false //本页面需要隐藏在Footer的元素
    };
  },
  components: {
    Header,
    Nav,
    Footer
  },
  mounted: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../../assets/css/less_config.less";
#admin {
  width: 100%;
  height: 100vh;
  position: relative;
  #entry-list {
    width: 1200px;
    margin-left: 5px;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    &::after {
      .clear;
    }
    .entry-box {
      width: 290px;
      height: 160px;
      background: @base-color;
      margin-right: 10px;
      margin-bottom: 10px;
      border: 3px solid transparent;
      transition: all 0.3s;
      &:nth-child(2n) {
        background: @base-color2;
      }
      &:hover {
        border: 3px solid @base-color2;
        a {
          -webkit-transform: scale(1.1) translateZ(0);
          -ms-transform: scale(1.1) translateZ(0);
          -o-transform: scale(1.1) translateZ(0);
          transform: scale(1.1) translateZ(0);
        }
      }
      &:nth-child(2n):hover {
        border: 3px solid @base-color;
      }
      a {
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        overflow: hidden;
        transition: all 0.3s;
        .iconfont {
          display: block;
          color: #fff;
          font-size: 54px;
          margin-top: 27px;
        }
        span {
          display: block;
          color: #fff;
          font-size: 16px;
          margin-top: 21px;
          letter-spacing: 2px;
        }
      }
    }
    .div-show {
      display: block;
    }
    .div-not-show {
      display: none;
    }
    /* 编辑页面 */
    .editor-list {
      width: 600px;
      &::after {
        .clear;
      }
    }
    .editor-article {
      background: #fff;
      height: 330px;
      overflow: hidden;
      &::after {
        .clear;
      }
      width: 590px;
      margin-right: 10px;
      .table-text-color {
        height: 100%;
        color: @text-color;
        white-space: nowrap;
        transition: all 0.3s;
        &:hover {
          color: @base-color2;
        }
      }
    }
  }
  /* 少于5个时的页面样式 */
  #entry-list.list-4 {
    width: 820px;
    .entry-box {
      width: 400px;
      height: 220px;
      a {
        .iconfont {
          font-size: 54px;
          margin-top: 45px;
        }
      }
    }
  }
  /* 少于7个时的页面样式 */
  #entry-list.list-6 {
    .entry-box {
      width: 390px;
      height: 200px;
      a {
        .iconfont {
          font-size: 54px;
          margin-top: 45px;
        }
      }
    }
  }
  #Footer {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
