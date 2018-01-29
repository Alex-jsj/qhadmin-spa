/*
 * @Author: alex (chenzeyongjsj@163.com) 
 * @Date: 2018-01-17 18:14:52 
 * @Last Modified by: alex (chenzeyongjsj@163.com)
 * @Last Modified time: 2018-01-29 23:19:19
 */

<template>
  <div id="search" class="public-wap">
    <!-- nav -->
    <Nav :searchNavShow="true"></Nav>
    <!-- quick nav -->
    <div id="quick-nav">
      <div class="quick-container">
        <ul>
          <li class="float-left">
            <router-link to="../index/Rank" class="underline-hover">站点排行榜</router-link>
          </li>
          <li class="float-left">
            <a href="javascript:void(0);" target="_blank" class="underline-hover">学院官网</a>
          </li>
          <li class="float-left">
            <router-link to="../admin/Login" target="_blank" class="underline-hover">后台登录</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- main -->
    <div class="main">
      <div class="component">
        <!-- search info -->
        <div class="search-info">
          <span>找到【</span>
          <span>{{search_res.keywords}}</span>
          <span>】相关的结果约</span>
          <span>{{search_res.count}}</span>
          <span>条，用时</span>
          <span>{{search_res.time}}</span>
          <span>秒</span>
        </div>
        <!-- search value -->
        <div class="search-body">
          <div class="search-list float-left">
            <ul>
              <li v-for="item in search_res.result" :key="item.id">
                <a :href="item.url">
                  <span v-html="item.title" class="search-title"></span>
                  <span class="search-form">[{{item.form}}]</span>
                </a>
                <p class="search-content">{{item.content}}</p>
                <span class="search-date">{{item.date}}</span>
              </li>
            </ul>
          </div>
          <div class="search-filter float-right">
            <p class="filter-title">发表时间</p>
            <ul class="filter-date">
              <li v-for="(item,index) in dateList" :key="item.id" @click="filter_date(index)" :class="item.class?'li-active':''">{{item.name}}</li>
            </ul>
            <p class="filter-title">按站点搜索</p>
            <el-select v-model="reception_search.site" placeholder="输入站点快速搜索" size="mini" class="filter-site" filterable>
              <el-option v-for="item in siteList" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
        </div>
        <!-- 分页 -->
        <Paging></Paging>
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
/* 引入模块 */
import Nav from "@/components/Nav";
import Paging from "@/components/Paging";
/* 前台搜索页 */
export default {
  name: "Search",
  data() {
    return {
      searchNavShow: true, //本页面需要展示在nav的元素
      //搜索选项
      reception_search: {
        keyword: "",
        option: 0, //全局/标题
        source: true, //切换搜索‘站群’和‘共享平台’
        date: 0, //天/周/月筛选
        site: "" //站点筛选
      },
      //时间段
      dateList: [
        {
          name: "1天内",
          class: false
        },
        {
          name: "1周内",
          class: false
        },
        {
          name: "1月内",
          class: false
        },
        {
          name: "更早",
          class: false
        }
      ],
      //站点列表
      siteList: [
        {
          value: 0,
          label: "全部站点"
        },
        {
          value: 1,
          label: "中国画与书法艺术学院"
        },
        {
          value: 2,
          label: "绘画艺术学院"
        },
        {
          value: 3,
          label: "雕塑与公共艺术学院"
        },
        {
          value: 4,
          label: "跨媒体艺术学院"
        },
        {
          value: 5,
          label: "设计艺术学院"
        },
        {
          value: 6,
          label: "手工艺术学院"
        },
        {
          value: 7,
          label: "影视与动画艺术学院"
        },
        {
          value: 8,
          label: "建筑艺术学院"
        },
        {
          value: 9,
          label: "艺术人文学院"
        },
        {
          value: 10,
          label: "艺术管理与教育学"
        },
        {
          value: 11,
          label: "上海设计学院"
        },
        {
          value: 12,
          label: "国际教育学院"
        },
        {
          value: 13,
          label: "中德学院"
        },
        {
          value: 14,
          label: "继续教育学院"
        },
        {
          value: 15,
          label: "专业基础教学部"
        },
        {
          value: 16,
          label: "社会科学教学部"
        },
        {
          value: 17,
          label: "公共体育部"
        },
        {
          value: 18,
          label: "实验教学管理部"
        }
      ],
      //搜索结果
      search_res: {
        keywords: "",
        count: 0,
        time: 0,
        result: []
      }
    };
  },
  watch: {
    update_reception_search_keyword(newVal, oldVal) {
      this.reception_search.keyword = newVal;
      this.articleSearch();
    },
    update_reception_search_option(newVal, oldVal) {
      this.reception_search.option = newVal;
      this.articleSearch();
    },
    update_reception_search_source(newVal, oldVal) {
      this.reception_search.source = newVal;
      this.articleSearch();
    }
  },
  computed: {
    update_reception_search_keyword() {
      return this.$store.state.reception_search_keyword;
    },
    update_reception_search_option() {
      return this.$store.state.reception_search_option;
    },
    update_reception_search_source() {
      return this.$store.state.reception_search_source;
    }
  },
  components: {
    Nav,
    Paging
  },
  mounted: function() {
    var that = this;
    that.reception_search.keyword = that.$store.state.reception_search_keyword;
    that.articleSearch();
  },
  methods: {
    //新闻检索
    articleSearch() {
      var startTime = new Date().getTime() / 1000;
      var endTime = null;
      var that = this;
      that
        .$http({
          method: "get",
          url: "../../../static/mock/search.json",
          data: {
            keyword: that.reception_search.keyword,
            option: that.reception_search.option,
            source: that.reception_search.source ? "站群" : "学术共享平台",
            date: that.reception_search.date,
            site: that.reception_search.site
          },
          //格式化
          transformRequest: [
            function(data) {
              var ret = "";
              for (var i = 0; i < data.length; i++) {
                ret +=
                  encodeURIComponent(it) +
                  "=" +
                  encodeURIComponent(data[it]) +
                  "&";
              }
              ret = ret.slice(0, -1); // 去掉最后的空行
              return ret;
            }
          ],
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(response => {
          endTime = new Date().getTime() / 1000;
          that.search_res.keywords = that.reception_search.keyword; //关键字
          that.search_res.time = parseFloat((endTime - startTime).toFixed(3)); //搜索时间
          that.search_res.count = response.data.count; //总条数
          that.search_res.result = response.data.result; //搜索结果
        })
        .catch(error => {
          console.log(error);
        });
    },
    //筛选时间
    filter_date(index) {
      var that = this;
      for (var i = 0; i < that.dateList.length; i++) {
        that.dateList[i].class = false;
      }
      this.dateList[index].class = true;
      this.reception_search.date = index + 1;
    }
  }
};
</script>

<style lang="less">
@import "../../assets/css/less_config.less";
#search {
  #quick-nav {
    width: 100%;
    height: 36px;
    background: @base-color;
    .quick-container {
      width: 1190px;
      height: 100%;
      margin: 0 auto;
      ul {
        &::after {
          .clear;
        }
        li {
          margin-right: 32px;
          a {
            line-height: 36px;
            font-size: 14px;
            color: #fff;
            position: relative;
            transition: all 0.3s;
            &:hover {
              color: @text-hover;
            }
          }
          .underline-hover:before {
            bottom: -2px;
          }
        }
      }
    }
  }
  .main {
    width: 100%;
    margin-top: 0;
    padding-bottom: 20px;
    background: #fff;
    .component {
      width: 1190px;
      margin: 0 auto;
      margin-top: 20px;
      overflow: hidden;
      margin-top: 20px;
      position: relative;
      padding: 0;
      .search-info {
        font-size: 14px;
        color: @base_grey;
      }
      .search-body {
        &::after {
          .clear;
        }
        .search-list {
          width: 1007px;
          margin-top: 48px;
          margin-bottom: 48px;
          border-right: 1px solid @border_color;
          &::after {
            .clear;
          }
          ul {
            width: 788px;
            > li {
              padding-top: 18px;
              margin-bottom: 48px;
              border-top: 1px solid @border_color;
              &:last-of-type {
                margin-bottom: 0;
              }
              &:hover {
                .search-title {
                  color: @base-color2;
                }
                .search-form {
                  color: #333;
                }
              }
              > a {
                display: block;
                margin-bottom: 18px;
              }
              .search-title {
                font-size: 20px;
                color: #333;
                transition: all 0.3s;
              }
              .search-form {
                font-size: 20px;
                color: @base-color2;
                transition: all 0.3s;
              }
              .search-content {
                font-size: 16px;
                color: @base_grey;
                margin-bottom: 18px;
              }
              .search-date {
                font-size: 14px;
                color: @base_grey;
              }
              .search-class {
                color: #ef4f53;
              }
            }
          }
        }
        .search-filter {
          width: 183px;
          margin-top: 48px;
          .filter-title {
            width: 100%;
            background: #dff2fc;
            padding-left: 20px;
            line-height: 40px;
            color: @text-color;
          }
          .filter-date {
            padding-left: 20px;
            li {
              padding: 10px 0;
              font-size: 14px;
              cursor: pointer;
              color: @text-color;
              transition: all 0.3s;
              &:hover {
                color: @base-color2;
              }
            }
            .li-active {
              color: @base-color2;
            }
          }
          .filter-site {
            padding-left: 20px;
            margin-top: 15px;
          }
        }
      }
    }
  }
}
#footer {
  width: 100%;
  padding: 24px 0;
  background: #fff;
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
