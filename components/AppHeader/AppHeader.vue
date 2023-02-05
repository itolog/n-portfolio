<template>
  <div class="app-toolbar">
    <h2 class="app-toolbar-title">Front-end developer</h2>

    <AppNavigation/>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";

const tl = gsap.timeline();

onMounted(() => {
  tl
    .to(".app-toolbar", {
      boxShadow: "0px -1px 18px 7px rgba(102, 201, 204, 1)",
      duration: .8,
      ease: "expo.out",
    })
    .from(".app-toolbar-title", {
      duration: 1,
      opacity: 0,
      delay: 1
    })
    .to(".app-toolbar-title",
      {
        duration: 2,
        text: "Serhii Romanichenko",
        delay: .7
      });
});


</script>

<style scoped lang="scss">
.app-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--app-header-height);
  background: #000;
  transition: box-shadow .5s;
  padding: 0 10px;
  color: #e2e2e2;
}

.app-toolbar-title {
  color: #00bcd4;
}
</style>