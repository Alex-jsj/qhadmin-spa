/*
 * @Author: Alex chenzeyongjsj@163.com 
 * @Date: 2018-01-31 14:35:20 
 * @Last Modified by: Alex chenzeyongjsj@163.com
 * @Last Modified time: 2018-01-31 17:32:57
 */

<template>
  <div id="SideBar" class="float-left">
    <ul class="side-ul">
      <li v-for="(item,index) in side_bar" :key="item.id" :class="{'li-active':item.column_open}" @click="open_column(index)">
        <router-link :to="'/pages/system_administrators/System_Administrators/'+item.first_class_column_url">
          <i class="iconfont" :class="item.column_icon"></i>
          <span class="side-text">{{item.first_class_column_name}}</span>
          <i class="iconfont icon-down"></i>
        </router-link>
        <ol>
          <li v-for="(list,index) in item.second_class_column" :key="list.id">
            <router-link :to="'/pages/system_administrators/System_Administrators/'+list.column_url" class="side-click">{{list.column_name}}</router-link>
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      side_bar: [
        {
          first_class_column_name: "工作台",
          first_class_column_url: "Workbench",
          column_icon: "icon-gongzuotai",
          column_open: false,
          second_class_column: []
        },
        {
          first_class_column_name: "站点管理",
          first_class_column_url: "",
          column_icon: "icon-zhandianguanli",
          column_open: false,
          second_class_column: [
            {
              column_name: "添加站点",
              column_url: "AddSite"
            },
            {
              column_name: "站点列表",
              column_url: "SiteList"
            },
            {
              column_name: "内容管理",
              column_url: ""
            },
            {
              column_name: "数据备份",
              column_url: ""
            }
          ]
        },
        {
          first_class_column_name: "附件管理",
          first_class_column_url: "",
          column_icon: "icon-fujianguanli",
          column_open: false,
          second_class_column: [
            {
              column_name: "添加附件",
              column_url: ""
            },
            {
              column_name: "附件列表",
              column_url: ""
            }
          ]
        },
        {
          first_class_column_name: "组件管理",
          first_class_column_url: "",
          column_icon: "icon-zujianguanli",
          column_open: false,
          second_class_column: [
            {
              column_name: "添加组件",
              column_url: ""
            },
            {
              column_name: "组件列表",
              column_url: ""
            }
          ]
        },
        {
          first_class_column_name: "网站模板",
          first_class_column_url: "",
          column_icon: "icon-wangzhanmoban",
          column_open: false,
          second_class_column: [
            {
              column_name: "添加模板",
              column_url: ""
            },
            {
              column_name: "模板列表",
              column_url: ""
            }
          ]
        },
        {
          first_class_column_name: "权限管理",
          first_class_column_url: "",
          column_icon: "icon-quanxianguanli",
          column_open: false,
          second_class_column: [
            {
              column_name: "添加用户",
              column_url: ""
            },
            {
              column_name: "用户管理",
              column_url: ""
            },
            {
              column_name: "添加用户组",
              column_url: ""
            },
            {
              column_name: "用户组管理",
              column_url: ""
            }
          ]
        },
        {
          first_class_column_name: "系统设置",
          first_class_column_url: "",
          column_icon: "icon-xitongshezhi",
          column_open: false,
          second_class_column: [
            {
              column_name: "部门管理",
              column_url: ""
            },
            {
              column_name: "全局设置",
              column_url: ""
            },
            {
              column_name: "系统日志",
              column_url: ""
            }
          ]
        }
      ]
    };
  },
  watch: {},
  mounted: function() {},
  methods: {
    open_column: function(index) {
      for (let obj of this.side_bar) {
        obj.column_open = false;
      }
      this.side_bar[index].column_open = !this.side_bar[index].column_open; //展开栏目
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../assets/css/less_config";
#SideBar {
  width: 183px;
  background: #fff;
  border-radius: 3px;
  .side-ul {
    width: 100%;
    padding: 10px 0;
    overflow: hidden;
    > li {
      width: 100%;
      &:first-of-type {
        .icon-down {
          display: none;
        }
      }
      &:hover {
        > a {
          background: #dff2fc;
          &::before {
            left: 0;
          }
        }
      }
      > a {
        display: block;
        width: 100%;
        height: 40px;
        padding-left: 20px;
        position: relative;
        background: #fff;
        transition: all 0.3s;
        &::before {
          content: "";
          position: absolute;
          left: -6px;
          top: 0;
          display: block;
          width: 6px;
          height: 100%;
          background: @base-color2;
          transition: all 0.3s;
        }
        .iconfont,
        span {
          line-height: 40px;
          color: @base_grey;
          font-size: 16px;
          position: relative;
          z-index: 10;
        }
        .icon-fujianguanli {
          font-size: 14px;
        }
        .icon-down {
          position: absolute;
          right: 26px;
          transition: all 0.3s;
        }
        .side-text {
          margin-left: 5px;
        }
      }
      > ol {
        width: 100%;
        > li {
          width: 100%;
          height: 0;
          overflow: hidden;
          transition: all 0.3s;
          .side-click {
            display: block;
            width: 100%;
            line-height: 38px;
            font-size: 14px;
            padding-left: 20px;
            color: @base_grey;
            transition: all 0.3s;
            &:hover {
              color: @base-color2;
            }
          }
        }
        .side-active {
          a {
            color: @base-color2;
          }
        }
      }
    }
    .li-active {
      > a {
        background: #dff2fc;
        &::before {
          left: 0;
        }
        .icon-down {
          transform: rotateZ(180deg);
        }
      }
      > ol > li {
        height: 38px;
      }
    }
  }
}
</style>
