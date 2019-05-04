import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/Home';
import City from '@/pages/city/City';
import Detail from '@/pages/detail/Detail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/city',
      name: 'City',
      component: City,
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
    }
  ],
  // 防止用户在当前页面下滑到某个位置，进入新的页面时也处于之前页面下滑的位置
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
