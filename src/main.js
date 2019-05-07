/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/first */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// eslint-disable-next-line import/first
import fastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
// 解决低版本安卓出现白屏问题
import 'babel-polyfill'
import store from './store'
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;

fastClick.attach(document.body);

Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
