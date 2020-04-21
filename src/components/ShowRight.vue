<template>
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
</template>

<script>
export default {
  name: 'ShowRight',
  
}
</script>

<style scoped lang="scss">
  .container-right {
    width: 300px;
    margin-left: 30px;
    .ercode {
      width: 300px;
      height: 300px;
      background: white;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      .ercode-title {
        height: 20px;
        font-size: 16px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 20px;
      }
      .ercode-img {
        width: 151px;
        height: 151px;
        margin: 14px 0 12px 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .ercode-footer {
        font-size: 14px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
      }
    }
  }
</style>
