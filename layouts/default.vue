<template>
  <div class="default-layout">
    <AppHeader/>
    <main class="app-main">
      <slot/>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";

const tl = gsap.timeline();

onMounted(() => {
  tl
    .to(".app-toolbar", {
      boxShadow: "0px -1px 18px 7px rgba(206, 20, 234, 1)",
      duration: 1,
      ease: "expo.out",
    })
    .from(".app-toolbar-title", {
      opacity: 0,
      duration: 1,
      delay: .7
    })
    .fromTo(".app-toolbar-title",
      {
        delay: .6,
        duration: 1,
        text: "Front-end developer"
      },
      {
        duration: 2,
        text: "Serhii Romanichenko",
        delay: .5
      })
    .to(".app-main", {
      duration: 1,
      x: 0,
    }, "-=.5")
    .to(".app-toolbar", {
      boxShadow: "0px -1px 18px 7px rgba(102, 201, 204, .8)",
      duration: 1,
      ease: "expo.out",
    });
});
</script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.app-main {
  color: white;
  padding: 10px;
  transform: translateX(-100%);
}
</style>