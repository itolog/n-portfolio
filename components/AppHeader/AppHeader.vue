<template>
  <v-toolbar class="app-toolbar">
    <v-toolbar-title class="app-toolbar-title">
      <h1 class="app-toolbar-title"></h1>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <AppNavigation/>
  </v-toolbar>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";

const tl = gsap.timeline();

onMounted(() => {
  tl.to(".app-toolbar", {
    boxShadow: "0px -1px 18px 7px rgba(102, 201, 204, 1)",
    duration: .8,
    ease: "expo.out"
  });

  gsap.fromTo(".app-toolbar-title",
    {
      duration: 1,
      text: "Front-end developer",
      delay: 1
    },
    {
      duration: 1,
      text: "Serhii Romanichenko",
      delay: 1
    });
});


</script>

<style scoped lang="scss">
.app-toolbar {
  //box-shadow: 0 4px 15px 7px rgba(102, 201, 204, 1);
  background: #000;
  transition: box-shadow .5s;
  padding: 0 10px;
  color: #e2e2e2;

}
</style>