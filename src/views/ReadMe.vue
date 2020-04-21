<template>
  <div class="readme-container">
    <div class="container-left">
      <Tree :treeData="treeData" @change-selected="changeSelected" ></Tree>
    </div>
    <div class="container-right">
      <div class="right-title">
        <span>{{navigationTitle[0]}}</span>
        <span>使用说明书</span>
      </div>
      <div class="right-page">
        <div class="right-show">
            <Article :articleList="articleList" :showArticle="showArticle" @show-detail="showDetail"></Article>
        </div>
        <div class="right-total" v-show="showArticle">
            <el-pagination @current-change="changeCurrent" background layout="prev, pager, next" :total="100"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tree from "../components/Tree";
import Article from "../components/Article";
export default {
  name: "ReadMe",
  data() {
    return {
        showArticle: true,
      treeData: [
        {
          label: "新手入门0",
          children: [
              { label: "新手入门不1" },
              { label: "新手入门不2" }
            ]
        },
        {
          label: "新手入门1",
          children: [{ label: "直播间认证1" }, { label: "直播间认证2" }]
        },
        {
          label: "新手入门2",
          children: [{ label: "直播间认证3" }, { label: "直播间认证4" }]
        }
      ],
      articleList: [
        {
          title: "直播间认证步骤1",
          time: "2020-05-29",
          show: 5678
        },
        {
          title: "直播间认证步骤2",
          time: "2020-05-29",
          show: 5678
        }
      ],
      navigationTitle: ['新手入门','使用说明书']
    };
  },
  methods: {
      changeSelected(val){  //点击左侧列表
          console.log('点击左侧列表',val)
          this.showArticle = true;  //重置内容
      },
      showDetail(val){  //查看详情
          console.log(val)
          this.showArticle = false;//控制详情展示内容&页码展示
      },
      changeCurrent(e){
        console.log('当前页数',e)
      }
  },
  components: {
    Tree,
    Article
  }
};
</script>


<style scoped lang="scss">
.readme-container {
  min-width: 1180px;
  display: flex;
}
.container-left {
  width: 230px;
  background: white;
  margin-right: 30px;
}
.container-right {
  flex: 1;
  .right-title {
    background: white;
    padding: 22px 30px;
    font-size: 16px;
    font-family: PingFang-SC-Medium, PingFang-SC;
    font-weight: 500;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      bottom: 0;
      right: 30px;
      left: 30px;
      background: #ededed;
    }
    & > span:first-child {
      margin-right: 32px;
      color: rgba(102, 102, 102, 1);
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 5px;
        right: -11px;
        height: 12px;
        width: 1px;
        background: #999999;
      }
    }
    & > span:last-child {
      color: #ff3333;
    }
  }
  .right-page {
    .right-show {
        background: white;
    }
    .right-total{
        margin-top: 36px;
        text-align: center;
        & /deep/ .btn-next,& /deep/ .btn-prev,
        & /deep/ .el-pager .number {
            background: white;
            border-radius: 6px;
            border: 1px solid rgba(229, 229, 229, 1);
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            width: 36px;
            height: 36px;
            line-height: 36px;
            border-radius: 6px;
            margin: 0 4px 0 0;
        }
        & /deep/ .el-pager .active {
            background: #ff3333;
            color: white;
        }
        
    }
  }
  .right-detail{

  }
}
</style>