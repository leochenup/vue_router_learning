<template>
  <div class="about">
    <h1>This is an about page {{ id }}</h1>
    <router-view></router-view>
    <router-view name="other"></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],
  mounted() {},
  watch: {
    $route(to, from) {
      // 监听路由变化 占位符参数:id变化时
    },
  },
  beforeRouteUpdate(to, from, next) {
    // 监听路由变化 占位符参数:id变化时
    console.log(to, from);
    next();
  },
};
</script>
