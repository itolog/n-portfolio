<template>
  <nav class="navigation">
    <ul class="navigation-list">
      <li class="navigation-list-item" v-for="link of navLinks">
        <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

import {navLinks} from "~/components/AppNavigation/data/links";
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
}

.navigation-list {
  display: flex;
  gap: 10px;
  list-style: none;
}

.navigation-list-item {
  & a {
    text-decoration: none;
    color: white;
  }
}
</style>