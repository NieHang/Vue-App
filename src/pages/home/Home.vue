<template>
  <div>
    <home-header></home-header>
    <home-swiper :list='swiperList'></home-swiper>
    <home-icons :iconList='iconList'></home-icons>
    <home-recommend :recommendList='recommendList'></home-recommend>
    <home-weekend :weekendList='weekendList'></home-weekend>
  </div>
</template>

<script>
import axios from 'axios'

import { mapState } from 'vuex'

import HomeHeader from './components/Header'

import HomeSwiper from './components/Swiper'

import HomeIcons from './components/Icons'

import HomeRecommend from './components/Recommend'

import HomeWeekend from './components/Weekend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo() {
      // eslint-disable-next-line
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      if (res.data.ret && res.data.data) {
        const data = res.data.data;
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted() {
    this.lastCity = this.city
    this.getHomeInfo();
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo();
    }
  },
  computed: {
    ...mapState(['city'])
  },
}
</script>

<style scoped>
</style>
