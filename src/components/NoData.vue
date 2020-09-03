<template>
  <div class="no-data" v-if="isNoData">
    <div class="icon"></div>
    <div class="text"><slot></slot></div>
  </div>
</template>
<script>
export default {
  props:['isNoData'],
  data() {
    return {
    }
  }
};
</script>
<style lang="less">
  .no-data{
    padding-top: 40%;
    .icon{
      width: 1.28rem;
      height: 1.28rem;
      background: url(../assets/images/no-data.png) no-repeat center center;
      background-size: 1.28rem;
      margin: 0 auto;
    }
    .text{
      font-size: .28rem;
      text-align: center;
      color: #666;
      padding-top: .2rem;
    }
  }
</style>

