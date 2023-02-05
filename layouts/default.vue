<template>
  <div class="default-layout">
    <AppHeader/>
    <main class="app-main">
      <slot/>
    </main>
  </div>
</template>

<script setup lang="ts">

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
}
</style>