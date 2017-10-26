
<template>
  <div id="certificate-query">
    <scroller :onRefresh="refresh" :onInfinite="infinite" ref="myscroller" noDataText="真的没啦">
      <yd-timeline>
        <yd-timeline-item >
          <p>【南宁市】您的订单正在配送途中，请您准备签收，感谢您的耐心等待。京东扫码付，单单享立减。</p>
          <p style="margin-top: 10px;">2017-08-18 08:24:18</p>
        </yd-timeline-item>
        <yd-timeline-item>
          <p>【南宁市】您的订单已到达【南宁安吉站】</p>
          <p style="margin-top: 10px;">2017-08-18 07:25:08</p>
        </yd-timeline-item>
        <yd-timeline-item>
          <p>【南宁市】您的订单在京东【南宁分拨中心】发货完成，准备送往京东【南宁安吉站】</p>
          <p style="margin-top: 10px;">2017-08-17 21:44:08</p>
        </yd-timeline-item>
        ......
      </yd-timeline>
    </scroller>
  </div>
</template>

<script type="text/babel">
  export default {
    data() {
      return {}
    },
    methods: {
      test() {
        this.$refs.myscroller.triggerPullToRefresh()
      },
      refresh() {
        console.log('refresh')
        setTimeout(()=>{
          this.$refs.myscroller.finishPullToRefresh()
        }, 5000)
      },
      infinite() {
        console.log('infinite')
      }
    },
    mounted() {
      console.log(this.$refs.myscroller)
      this.$refs.myscroller.finishInfinite(true)
    }
  }
</script>
