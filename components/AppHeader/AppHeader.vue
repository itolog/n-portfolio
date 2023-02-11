<template>
  <header class="app-toolbar">
    <h2 class="app-toolbar-title"/>

    <AppNavigation/>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.app-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--app-header-height);
  background: #000;
  transition: box-shadow .5s;
  padding: 0 15px;
  color: #e2e2e2;
}

.app-toolbar-title {
  color: var(--app-primery-text-color);
}
</style>