<template>
  <div class="default-layout">
    <AppHeader/>
    <main class="app-main">
      <slot/>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, usePageTransition } from "#imports";

useDefaultLayoutAnimation();
const { togglePageTransition } = usePageTransition();

onMounted(() => {
  togglePageTransition(true);
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
  opacity: 0;
}
</style>