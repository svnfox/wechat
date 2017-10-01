<template>
  <div id="index">
    <yd-tabbar>
      <yd-tabbar-item title="首页" link="#">
        <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="购物车" link="#" active>
        <yd-icon name="shopcart" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="个人中心" link="#">
        <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
