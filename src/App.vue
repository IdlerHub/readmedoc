<template>
  <div id="app">
    <div class="header">
      <div class="header-logo">
        <img alt="" src="@/assets/jwxt-logo.png">
      </div>
      <div class="header-title">
        <span>教务管理系统</span>
        <span>使用说明书</span>
      </div>
    </div>
    <div class="center">
      <div class="nav">
        <ul>
          <li v-for="(item,index) in navList" :key="index" :class="nowNav==index? 'active' : ''" @click="changeNav(index)">{{item.title}}</li>
        </ul>
      </div>
      <div class="container">
        <div class="container-left">
          <HelpHome v-show="!nowNav"></HelpHome>
          <ReadMe v-show="nowNav"></ReadMe>
        </div>
        <div class="container-right">
          <ShowRight></ShowRight>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script scoped>
  import HelpHome from './views/HelpHome';
  import ReadMe from './views/ReadMe';
  import ShowRight from './components/ShowRight'
  export default {
    data() {
      return {
        navList: [
          {title: '帮助首页'},
          {title: '问题汇总'}
        ],
        nowNav: 0
      }
    },
    components:{
      HelpHome,
      ReadMe,
      ShowRight
    },
    methods:{
      changeNav(index){
        this.nowNav = index;
      }
    }
  }
</script>

<style lang="scss" scoped>
  #app{
    min-width: 1570px;
    min-height: 100vh;
    background: #F7F7F7;
  }
  .header{
    height: 120px;
    background: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 30px;
  }
  .header-logo{
    margin-right: 19px;
    img{
      width: 48px;
      height: 48px;
      border-radius: 10px; 
    }
  }
  .header-title{
    font-size:20px;
    // height:20px;
    // line-height: 20px;
    font-family:PingFang-SC-Regular,PingFang-SC;
    font-weight:400;
    color: #333333;
    & span:first-child{
      font-family:PingFang-SC-Bold,PingFang-SC;
      font-weight:bold;
      position: relative;
      margin-right: 18px;
    }
    & span:first-child::after{
      content: '';
      position: absolute;
      top: 6px;
      right: -18px;
      height: 16px;
      border-left: 1px solid #999;
    }
    & span:last-child{
      font-family:PingFang-SC-Regular,PingFang-SC;
      font-weight:400;
      margin-left: 18px;
    }
  }
  .center{
    margin: 30px;
    .nav{
      height:88px;
      background:rgba(255,255,255,1);
      border-radius:4px;
      margin-bottom: 30px;
      padding-left: 30px;
      line-height: 88px;
      ul{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size:16px;
        li{
          width: 120px;
          height: 100%;
          text-align: left;
          font-family:PingFang-SC-Medium,PingFang-SC;
          color:rgba(102,102,102,1);
          margin-right: 40px;
          cursor:pointer;
        }
        .active{
          font-family:PingFang-SC-Bold,PingFang-SC;
          font-weight:bold;
          color:#FF3333;
          position: relative;
          &::after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 4px;
            height: 2px;
            width: 62px;
            background: #FF3333;
          }
        }
      }
    }
  }
.container{
  display: flex;
  justify-content: space-between;
  .container-left{
    flex: 1;
  }
}

</style>
