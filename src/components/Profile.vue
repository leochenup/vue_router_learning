<template>
  <div>Profile {{ $route.params.id }}</div>
</template>
<script>
export default {
  props: ["newsletterPopup"],
  mounted() {
    console.log(this.newsletterPopup);
  },
};
</script>
