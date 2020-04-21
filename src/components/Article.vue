<template>
  <div class="article">
    <div class="article-list" v-show="showArticle">
      <div
        class="article-item"
        v-for="(item,index) in articleList"
        :key="index"
        @click="toDetail(item)"
      >
        <div class="item-left">
          <div class="left-title">{{item.title}}</div>
          <div class="left-time">{{item.time}}</div>
        </div>
        <div class="item-right">
          <div class="right-show">
            <span>浏览:</span>
            <span>{{item.show}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="article-detail" v-show="!showArticle">
      <div class="detail-item">
        <div class="item-title">{{articleDetail.title}}</div>
        <div class="item-time">{{articleDetail.time}}</div>
      </div>
      <div class="content">详情内容</div>
    </div>
  </div>
</template>

<script>
export default {
  props: { articleList: Array, showArticle: Boolean },
  data() {
    return {
      articleDetail: {}
    };
  },
  methods: {
    toDetail(item) {
      // this.showArticle = true;
      this.articleDetail = item;
      console.log(item);
      this.$emit("show-detail", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.article-list {
  .article-item {
    padding: 22px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
      background: #f5f6fa;
    }
    .item-left {
      flex: 1;
      overflow: hidden;
      white-space: nowrap;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      .left-title {
        font-size: 16px;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 7px;
      }
      .left-time {
        font-size: 14px;
        color: #999999;
      }
    }
    .item-right {
      .right-show {
        font-size: 14px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
      }
    }
  }
}
.article-detail {
  padding: 23px 30px;
  .detail-item {
    font-family: PingFang-SC-Medium, PingFang-SC;
    font-weight: 500;
    margin-bottom: 20px;
    .item-title {
      font-size: 16px;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 7px;
    }
    .item-time {
      font-size: 14px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      color: rgba(153, 153, 153, 1);
    }
  }
  .content {
    font-size: 14px;
    font-family: PingFang-SC-Medium, PingFang-SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
}
</style>