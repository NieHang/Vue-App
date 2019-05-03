<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options='swiperOptions'>
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      dafault() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick() {
      this.$emit('close')
    }
  },
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    z-index 99
    background-color #000
    .wrapper
      width 100%
      background-color #fff
      .gallary-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem
</style>