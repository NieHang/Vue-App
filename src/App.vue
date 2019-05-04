<template>
  <div id="app">
    <!-- 缓存组件内容，但是不包括Detail组件 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>

</style>
