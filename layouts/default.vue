<template>
  <div class="default-layout">
    <AppHeader/>
    <main>
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
  /*background: #000;*/
}
</style>