<template>
  <CustomMouse class="default-layout">
    <AppHeader/>
    <main class="app-main">
      <slot/>
    </main>
    <AppFooter/>
  </CustomMouse>
</template>

<script setup lang="ts">
import { onMounted, usePageTransition } from "#imports";

useDefaultLayoutAnimation();
const { togglePageTransition } = usePageTransition();

onMounted(() => {
  togglePageTransition(true);
});
</script>

<style scoped lang="scss">

.default-layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
}

.app-main {
  color: white;
  padding: 10px;
  opacity: 0;
}
</style>