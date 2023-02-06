<template>
  <section>
    <h1>Home</h1>
  </section>
</template>

<script setup lang="ts">
import pageTransitionConfig from "~/helpers/pageTransitionConfig";

definePageMeta({
  pageTransition: pageTransitionConfig,
});

import { useSeoMeta } from "#head";

useSeoMeta({
  title: "Serhii Romanichenko | Front-end developer"
});

</script>

<style scoped>

</style>