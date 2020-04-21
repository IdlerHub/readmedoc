<template>
  <!--<div class="container">-->
    <div class="container-left">
      <div class="left-top">
        <div class="title">
          <div>新手必读</div>
          <div>
            <span>更多</span>
            <img alt="more" src="@/assets/right.png" />
          </div>
        </div>
        <div class="newbie">
          <div class="newbie-item" v-for="(item,index) in readList" :key="index">
            <img alt src="@/images/video1.png" />
            <div class="item-name">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <!--
      <div class="container-right">
      <div class="ercode">
        <div class="ercode-title">网上老年大学公众号</div>
        <div class="ercode-img">
          <img src="@/images/ercode.jpg" alt />
        </div>
        <div class="ercode-footer">
          <div>关注产品最新动态</div>
        </div>
      </div>
    </div>
    -->
  <!--</div>-->
</template>

<script>
export default {
  name: "HelpHome",
  data() {
    return {
      readList: [
        { img: "@/images/video1.png", title: "开通直播间及认证" },
        { img: "@/images/video1.png", title: "开通直播间及认证" },
        { img: "@/images/video1.png", title: "开通直播间及认证" },
        { img: "@/images/video1.png", title: "开通直播间及认证" },
        { img: "@/images/video1.png", title: "开通直播间及认证" },
        { img: "@/images/video1.png", title: "开通直播间及认证" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.container-left {
    width: 1180px;
    .left-top {
      background: white;
      border-radius: 4px;
      padding: 30px;
      .title {
        display: flex;
        justify-content: space-between;
        height: 20px;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 20px;
        div:first-child {
          flex: 1;
          text-align: center;
          font-size: 16px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-family: PingFang-SC-Bold, PingFang-SC;
        }
        div:last-child {
          align-items: center;
          font-size: 14px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          color: rgba(102, 102, 102, 1);
          & > span {
            margin-right: 9px;
          }
        }
      }
      .newbie {
        margin-top: 30px;
        display: flex;
        .newbie-item {
          text-align: center;
          min-width: 120px;
          margin-right: 66px;
          margin-left: 10px;
          margin-bottom: 62px;
          &:last-child {
            margin-right: 10px;
          }
          img {
            width: 98px;
            height: 98px;
          }
          .item-name {
            margin-top: 17px;
            font-size: 14px;
            font-family: PingFang-SC-Medium, PingFang-SC;
            font-weight: 500;
            color: rgba(102, 102, 102, 1);
          }
        }
      }
    }
  }
// .container {
//   display: flex;
//   justify-content: center;
//   .container-left {
//     width: 1180px;
//     .left-top {
//       background: white;
//       border-radius: 4px;
//       padding: 30px;
//       .title {
//         display: flex;
//         justify-content: space-between;
//         height: 20px;
//         font-weight: bold;
//         color: rgba(51, 51, 51, 1);
//         line-height: 20px;
//         div:first-child {
//           flex: 1;
//           text-align: center;
//           font-size: 16px;
//           font-family: PingFang-SC-Bold, PingFang-SC;
//           font-family: PingFang-SC-Bold, PingFang-SC;
//         }
//         div:last-child {
//           align-items: center;
//           font-size: 14px;
//           font-family: PingFang-SC-Medium, PingFang-SC;
//           color: rgba(102, 102, 102, 1);
//           & > span {
//             margin-right: 9px;
//           }
//         }
//       }
//       .newbie {
//         margin-top: 30px;
//         display: flex;
//         .newbie-item {
//           text-align: center;
//           min-width: 120px;
//           margin-right: 66px;
//           margin-left: 10px;
//           margin-bottom: 62px;
//           &:last-child {
//             margin-right: 10px;
//           }
//           img {
//             width: 98px;
//             height: 98px;
//           }
//           .item-name {
//             margin-top: 17px;
//             font-size: 14px;
//             font-family: PingFang-SC-Medium, PingFang-SC;
//             font-weight: 500;
//             color: rgba(102, 102, 102, 1);
//           }
//         }
//       }
//     }
//   }
//   .container-right {
//     width: 300px;
//     margin-left: 30px;
//     .ercode {
//       width: 300px;
//       height: 300px;
//       background: white;
//       display: flex;
//       flex-flow: column;
//       align-items: center;
//       justify-content: center;
//       .ercode-title {
//         height: 20px;
//         font-size: 16px;
//         font-family: PingFang-SC-Bold, PingFang-SC;
//         font-weight: bold;
//         color: rgba(51, 51, 51, 1);
//         line-height: 20px;
//       }
//       .ercode-img {
//         width: 151px;
//         height: 151px;
//         margin: 14px 0 12px 0;
//         img {
//           width: 100%;
//           height: 100%;
//         }
//       }
//       .ercode-footer {
//         font-size: 14px;
//         font-family: PingFang-SC-Medium, PingFang-SC;
//         font-weight: 500;
//         color: rgba(102, 102, 102, 1);
//       }
//     }
//   }
// }
</style>