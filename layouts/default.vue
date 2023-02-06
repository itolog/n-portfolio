<template>
  <div class="default-layout" @mousemove="mouseCoords" @mouseout="mouseOut">
    <div ref="cursor" id="cursor"/>
    <div ref="aura" id="aura"/>
    <AppHeader/>
    <main class="app-main">
      <slot/>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onMounted, usePageTransition } from "#imports";

const cursor = ref<HTMLDivElement | null>(null);
const aura = ref<HTMLDivElement | null>(null);

const { mouseCoords, mouseOut } = useCursor({
  auraRef: aura,
  cursorRef: cursor
});

useDefaultLayoutAnimation();
const { togglePageTransition } = usePageTransition();

onMounted(() => {
  togglePageTransition(true);
});
</script>

<style scoped lang="scss">
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

#cursor, #aura {
  position: absolute;
  border-radius: 100%;
  transition: 5s cubic-bezier(.75, -1.27, .3, 2.33) transform, .2s cubic-bezier(.75, -1.27, .3, 2.33) opacity;
  user-select: none;
  pointer-events: none;
  z-index: 10000;

  &.hidden {
    display: none;
  }
}

#cursor {
  width: 8px;
  height: 8px;
  background-color: rgba(240, 248, 255, 0.5);
}

#aura {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(240, 248, 255, 0.2);
  background-color: rgba(240, 248, 255, 0.27);
  transform: translate(5px, 5px);
}

</style>