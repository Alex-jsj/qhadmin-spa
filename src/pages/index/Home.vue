/*
 * @Author: alex (chenzeyongjsj@163.com) 
 * @Date: 2018-01-17 18:14:52 
 * @Last Modified by: Alex chenzeyongjsj@163.com
 * @Last Modified time: 2018-01-30 15:22:02
 */

<template>
  <div id="index" class="public-wap">
    <!-- nav -->
    <Nav :receptionNavShow="true"></Nav>
    <!-- main -->
    <div class="main">
      <div class="component">
        <div class="filter-container">
          <span class="filter-title float-left">全站检索</span>
          <el-input placeholder="请输入关键字" v-model="searchValue" class="input-with-select title-search float-left" size="mini" @keyup.enter.native="newsSearch()">
            <el-button slot="append" icon="el-icon-search" @click="newsSearch()"></el-button>
          </el-input>
          <span class="filter-title float-left">新闻查询</span>
          <el-select v-model="newsSearchValue" clearable size="mini" class="float-left" @change="newsList">
            <el-option v-for="item in newsSearchList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <div class="float-right">
            <span class="filter-title float-left">更新时间:</span>
            <span class="filter-title float-left">{{now_date|formatTime('YMDHM')}}</span>
          </div>
        </div>
        <div class="school-list">
          <ul class="list-ul">
            <li v-for="(list,index) in schoolList" :key="list.id" :class="index%2==0?loop_a:loop_b">
              <p class="ul-li-title">{{list.department}}</p>
              <ol class="list-ol">
                <li v-for="item in list.departmentList" :key="item.id" class="float-left">
                  <a :href="item.schoolUrl" target="_blank">
                    <div class="text-container">
                      <span class="school-id">{{item.schoolId}}</span>
                      <p class="school-name">{{item.schoolName}}</p>
                    </div>
                  </a>
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div id="footer">
      <div class="footer-container">
        <p>中国美术学院版权所有 技术支持：启焕科技</p>
      </div>
    </div>
  </div>
</template>

<script>
/* 引入组件 */
import Nav from "@/components/Nav";
/* 前台首页 */
export default {
  name: "Home",
  data() {
    return {
      //循环时隔行变色
      loop_a: "",
      loop_b: "bgChange",
      receptionNavShow: true, //本页面需要展示在nav的元素
      schoolList: [], //学校列表
      //全站搜索
      searchValue: "",
      //新闻查询
      newsSearchList: [
        {
          value: 1,
          label: "今日新闻"
        },
        {
          value: 2,
          label: "本周新闻"
        },
        {
          value: 3,
          label: "本月新闻"
        },
        {
          value: 4,
          label: "年度新闻"
        }
      ],
      newsSearchValue: "",
      //当前时间
      now_date: new Date().getTime()
    };
  },
  filters: {
    // 时间过滤器
    formatTime: function(value, type) {
      let dataTime = "";
      let data = new Date();
      data.setTime(value);
      let year = data.getFullYear();
      let month = data.getMonth() + 1;
      let day = data.getDate();
      let hour = data.getHours();
      let minute = data.getMinutes();
      let second = data.getSeconds();
      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      if (hour < 10) {
        hour = "0" + hour;
      }
      if (minute < 10) {
        minute = "0" + minute;
      }
      if (second < 10) {
        second = "0" + second;
      }
      if (type == "YMD") {
        dataTime = year + "-" + month + "-" + day;
      } else if (type == "YMDHMS") {
        dataTime =
          year +
          "-" +
          month +
          "-" +
          day +
          "  " +
          hour +
          ":" +
          minute +
          ":" +
          second;
      } else if (type == "HMS") {
        dataTime = hour + ":" + minute + ":" + second;
      } else if (type == "YM") {
        dataTime = year + "-" + month + "-";
      } else if (type == "YMDHM") {
        dataTime = year + "-" + month + "-" + day + "  " + hour + ":" + minute;
      }
      return dataTime; // 将格式化后的字符串输出到前端显示
    }
  },
  components: {
    Nav
  },
  mounted: function() {
    this.$http
      .get("./static/mock/schoolList.json")
      .then(response => {
        this.schoolList = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    //新闻检索
    newsSearch() {
      this.$store.commit("update_reception_search_keyword", "学术");
      this.$router.push({ path: "/pages/index/Search" });
    },
    //新闻列表
    newsList() {
      if (this.newsSearchValue) {
        if (this.newsSearchValue == 1) {
          
        } else if (this.newsSearchValue == 2) {
          
        } else if (this.newsSearchValue == 3) {
          
        } else if (this.newsSearchValue == 4) {
         
        }
      }
      this.$router.push({ path: "/pages/index/Search" });
    }
  }
};
</script>

<style lang="less">
@import "../../assets/css/less_config.less";
#index {
  width: 100%;
  position: relative;
  .main {
    .component {
      background: #fff;
      border-radius: 3px;
      padding: 20px;
      .filter-container {
        width: 100%;
        height: 28px;
        .title-search {
          width: 200px;
          margin-right: 33px;
          .el-input-group__append {
            padding: 0 10px;
            overflow: hidden;
            transition: all 0.3s;
            .el-button {
              transition: all 0.3s;
            }
            [class*=" el-icon-"],
            [class^="el-icon-"] {
              font-size: 16px;
              position: relative;
              top: 2px;
              transition: all 0.3s;
            }
            &:hover {
              border-color: @base-color2;
              .el-button {
                background: @base-color2;
              }
              [class*=" el-icon-"],
              [class^="el-icon-"] {
                color: #fff;
              }
            }
          }
        }
        .filter-title {
          line-height: 28px;
          color: @text-color;
          font-size: 14px;
          margin-right: 15px;
        }
        .float-right {
          .filter-title {
            line-height: 28px;
            color: @base_grey;
            font-size: 14px;
            margin-right: 8px;
          }
        }
      }
      .school-list {
        width: 100%;
        margin-top: 20px;
        padding-top: 50px;
        border-top: 1px solid @border_color;
        li {
          .ul-li-title {
            font-size: 18px;
            margin-bottom: 6px;
            color: @text-color;
          }
          .list-ol {
            border-top: 1px solid @border_color;
            padding-top: 20px;
            margin-bottom: 30px;
            &::after {
              .clear;
            }
            li {
              margin-right: 20px;
              &:nth-child(4n) {
                margin-right: 0;
              }
              a {
                display: block;
                width: 272px;
                height: 70px;
                color: @base_grey;
                font-size: 14px;
                text-align: center;
                border: 1px solid #a8def7;
                border-radius: 5px;
                background: #dff2fc;
                margin-bottom: 19px;
                position: relative;
                transition: all 0.3s;
                &:hover {
                  border: 1px solid #cdcdce;
                  background: #efeff0;
                  color: @base-color2;
                }
              }
              .text-container {
                width: 272px;
                position: absolute;
                top: 50%;
                left: 50%;
                padding: 0 14px;
                transform: translate(-50%, -50%);
              }
              .school-name {
                margin-top: 5px;
              }
            }
          }
        }
        .bgChange {
          .list-ol {
            li {
              a {
                border: 1px solid #cdcdce;
                background: #efeff0;
                &:hover {
                  border: 1px solid #a8def7;
                  background: #dff2fc;
                  color: @base_grey;
                }
              }
            }
          }
        }
      }
    }
  }
}
#footer {
  width: 100%;
  padding: 24px 0;
  .footer-container {
    width: 1190px;
    margin: 0 auto;
    &::after {
      .clear;
    }
    p {
      font-size: 14px;
      color: @base_grey;
      a {
        color: @base_grey;
        transition: all 0.3s;
        &:hover {
          color: @text-hover;
        }
      }
    }
  }
}
</style>
