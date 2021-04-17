<template>
  <div>
    <div id="app">{{ number }}</div>
    <router-link to="/home">to home</router-link>
    <router-link to="/about/1">to about</router-link>
    <router-view></router-view>

    <button @click="to1">to about/1/posts</button>
    <button @click="to2">to about/2/profile</button>
  </div>
</template>

<script>
export default {
  data() {
    return { number: 0 };
  },
  methods: {
    to1() {
      // this.$router.push(
      //   { path: "/about/1" },
      //   () => {},
      //   () => {}
      // );
      this.$router.go(-1);
    },
    to2() {
      this.$router.push(
        { path: "/about/2" },
        () => {},
        () => {}
      );
    },
  },
};
</script>

<style>
</style>
