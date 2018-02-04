/*
 * @Author: alex (chenzeyongjsj@163.com) 
 * @Date: 2018-01-17 18:14:52 
 * @Last Modified by: alex (chenzeyongjsj@163.com)
 * @Last Modified time: 2018-01-26 00:49:39
 */

<template>
  <div id="Rank" class="public-wap">
    <!-- nav -->
    <Nav :rankNavShow="true"></Nav>
    <!-- main -->
    <div class="main">
      <!-- crumb -->
      <Crumb :crumbs="crumbs"></Crumb>
      <!-- 数据刷新 -->
      <div class="refresh">
        <span class="float-left">备注：数据统计时间有延迟，每天更新一次。</span>
        <el-button type="primary" size="mini" class="float-right">数据刷新</el-button>
      </div>
      <!-- 排行榜 -->
      <div class="rank-container">
        <!-- 文章排行榜 -->
        <div class="article-rank rank-box float-left">
          <p class="rank-title">
            <i class="iconfont icon-wenzhangliebiao"></i>
            <span>文章排行榜</span>
          </p>
          <el-table :data="article_rank" stripe>
            <el-table-column label="排行" width="120" class-name="solt-title">
              <div slot-scope="scope">
                <i class="iconfont icon-paihang"></i>
                <span class="rank-solt">{{scope.row.rank}}</span>
              </div>
            </el-table-column>
            <el-table-column prop="info" label="网站名称">
              <div slot-scope="scope">
                <a :href="scope.row.info.url" target="_blank" class="rank-link">{{scope.row.info.uid}} - {{scope.row.info.title}}</a>
              </div>
            </el-table-column>
          </el-table>
        </div>
        <!-- 访问量排行榜 -->
        <div class="visit-rank rank-box float-right">
          <p class="rank-title">
            <i class="iconfont icon-zhandianfangwenliangtongji"></i>
            <span>访问量排行榜</span>
          </p>
          <el-table :data="visit_rank" stripe>
            <el-table-column label="排行" width="120" class-name="solt-title">
              <div slot-scope="scope">
                <i class="iconfont icon-paihang"></i>
                <span class="rank-solt">{{scope.row.rank}}</span>
              </div>
            </el-table-column>
            <el-table-column prop="info" label="网站名称">
              <div slot-scope="scope">
                <a :href="scope.row.info.url" target="_blank" class="rank-link">{{scope.row.info.uid}} - {{scope.row.info.title}}</a>
              </div>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div id="Foot">
      <div class="footer-container">
        <p>中国美术学院版权所有 技术支持：启焕科技</p>
      </div>
    </div>
  </div>
</template>

<script>
/* 引入模块 */
import Nav from "@/components/Nav";
import Crumb from "@/components/Crumb";
/* 排行榜*/
export default {
  name: "Rank",
  data() {
    return {
      //面包屑
      crumbs: [
        {
          name: "首页",
          url: "/"
        },
        {
          name: "排行榜",
          url: ""
        }
      ],
      rankNavShow: true, //本页面需要展示在nav的元素
      //排行榜
      article_rank: [
        {
          rank: 1,
          title: "研究生工作部",
          info: {
            uid: 9105,
            title: "研究生工作部",
            url: "javascript:void(0);"
          }
        },
        {
          rank: 2,
          info: {
            uid: 9109,
            title: "教务处",
            url: "javascript:void(0);"
          }
        },
        {
          rank: 3,
          info: {
            uid: 9113,
            title: "计划财务处",
            url: "javascript:void(0);"
          }
        },
        {
          rank: 4,
          info: {
            uid: 9106,
            title: "学生工作部",
            url: "javascript:void(0);"
          }
        },
        {
          rank: 5,
          info: {
            uid: 9110,
            title: "招生办公室",
            url: "javascript:void(0);"
          }
        },
        {
          rank: 6,
          info: {
            uid: 9114,
            title: "校园建设和管理处",
            url: "javascript:void(0);"
          }
        },
        {
          rank: 7,
          info: {
            uid: 9103,
            title: "纪监审办公室",
            url: "javascript:void(0);"
          }
        },
        {
          rank: 8,
          info: {
            uid: 9107,
            title: "网络中心",
            url: "javascript:void(0);"
          }
        },
        {
          rank: 9,
          info: {
            uid: 9111,
            title: "科研创作处",
            url: "javascript:void(0);"
          }
        },
        {
          rank: 10,
          info: {
            uid: 9115,
            title: "工会",
            url: "javascript:void(0);"
          }
        }
      ],
      visit_rank: [
        {
          rank: 1,
          title: "研究生工作部",
          info: {
            uid: 9105,
            title: "研究生工作部",
            url: "javascript:void(0);"
          }
        },
        {
          rank: 2,
          info: {
            uid: 9109,
            title: "教务处",
            url: "javascript:void(0);"
          }
        },
        {
          rank: 3,
          info: {
            uid: 9113,
            title: "计划财务处",
            url: "javascript:void(0);"
          }
        },
        {
          rank: 4,
          info: {
            uid: 9106,
            title: "学生工作部",
            url: "javascript:void(0);"
          }
        },
        {
          rank: 5,
          info: {
            uid: 9110,
            title: "招生办公室",
            url: "javascript:void(0);"
          }
        },
        {
          rank: 6,
          info: {
            uid: 9114,
            title: "校园建设和管理处",
            url: "javascript:void(0);"
          }
        },
        {
          rank: 7,
          info: {
            uid: 9103,
            title: "纪监审办公室",
            url: "javascript:void(0);"
          }
        },
        {
          rank: 8,
          info: {
            uid: 9107,
            title: "网络中心",
            url: "javascript:void(0);"
          }
        },
        {
          rank: 9,
          info: {
            uid: 9111,
            title: "科研创作处",
            url: "javascript:void(0);"
          }
        },
        {
          rank: 10,
          info: {
            uid: 9115,
            title: "工会",
            url: "javascript:void(0);"
          }
        }
      ]
    };
  },
  watch: {},
  components: {
    Nav,
    Crumb
  }
};
</script>
<style lang="less">
@import "../../assets/css/less_config.less";
.main {
  .refresh {
    height: 28px;
    position: absolute;
    top: 20px;
    right: 20px;
    color: @base_grey;
    > span {
      font-size: 14px;
      line-height: 28px;
    }
  }
  .rank-container {
    width: 100%;
    border-top: 1px solid @border_color;
    padding: 50px 80px;
    &::after {
      content: "";
      display: block;
      visibility: hidden;
      clear: both;
    }
  }
  .rank-box {
    width: 446px;
    overflow: hidden;
    border-radius: 3px;
    .rank-title {
      text-align: center;
      width: 100%;
      line-height: 80px;
      background: @base-color2;
      color: #fff;
      font-size: 18px;
      .iconfont {
        font-size: 28px;
        position: relative;
        top: 3px;
      }
    }
    .icon-paihang {
      font-size: 24px;
      color: @base-color2;
      position: relative;
      top: 1px;
      opacity: 0;
    }
    .rank-solt {
      font-size: 20px;
      color: @base_grey;
    }
    .rank-link {
      color: @text-color;
      &:hover {
        color: @base-color2;
      }
    }
    .el-table tr:nth-child(1) {
      .icon-paihang {
        color: @base-color2;
        opacity: 1;
      }
      .rank-solt {
        font-weight: 600;
        color: @base-color2;
      }
    }
    .el-table tr:nth-child(2) {
      .icon-paihang {
        color: #00b4ed;
        opacity: 1;
      }
      .rank-solt {
        font-weight: 600;
        color: #00b4ed;
      }
    }
    .el-table tr:nth-child(3) {
      .icon-paihang {
        color: #7dcdf4;
        opacity: 1;
      }
      .rank-solt {
        font-weight: 600;
        color: #7dcdf4;
      }
    }
    .el-table tr:last-of-type {
      .rank-solt {
        margin-left: -6px;
      }
    }
    .solt-title.is-leaf {
      padding-left: 8px;
    }
  }
}
#Foot {
  width: 100%;
  padding: 24px 0;
  .footer-container {
    width: 1190px;
    margin: 0 auto;
    &::after {
      content: "";
      display: block;
      visibility: hidden;
      clear: both;
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


