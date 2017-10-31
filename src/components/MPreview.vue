<template><!--相册预览-->
  <div id="m-preview"></div>
</template>

<script type="text/babel">
  export default {
    name: 'm-preview',
    data() {
      return {}
    },
    methods: {},
    mounted() {
      MPreview({
        data: ['/static/MPreview/images/M_1.jpg', '/static/MPreview/images/M_2.jpg'],
        wrap: '#m-preview',
        direction: 'left',
        placeholder: '/static/MPreview/images/placeholder.gif',
      });
    }
  }
</script>

<style>
  #m-preview {

  }
</style>
