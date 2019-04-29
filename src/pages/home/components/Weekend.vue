<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class='item-desc'>{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
      recommendList: [
        {
          id: '1',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/87/b46b43303b585c.jpg_r_640x214_af2aa659.jpg',
          title: '恭王府',
          desc: '我想去恭王府看看'
        },
        {
          id: '2',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/87/b46b43303b585c.jpg_r_640x214_af2aa659.jpg',
          title: '恭王府',
          desc: '我想去恭王府看看'
        },
        {
          id: '3',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/87/b46b43303b585c.jpg_r_640x214_af2aa659.jpg',
          title: '恭王府',
          desc: '我想去恭王府看看'
        }
      ]
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background-color #eee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
</style>
