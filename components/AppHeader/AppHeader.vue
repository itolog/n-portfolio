<template>

  <v-toolbar
      class="app-toolbar"
  >
    <v-toolbar-title>Vuetify</v-toolbar-title>

    <v-spacer></v-spacer>
    <AppNavigation/>
  </v-toolbar>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.app-toolbar {
  box-shadow: 0 4px 15px 7px rgba(102, 201, 204, 1);
  background: #000;
  transition: box-shadow .5s;
  padding: 0 10px;
  color: #e2e2e2;

  &:hover {
    box-shadow: 0 4px 15px 7px rgb(167, 102, 204);
  }
}
</style>