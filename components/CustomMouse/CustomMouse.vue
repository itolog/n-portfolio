<template>
  <div class="custom-mouse" @mousemove="mouseCoords" @mouseout="mouseOut">
    <div ref="cursor" id="cursor"/>
    <div ref="aura" id="aura"/>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const cursor = ref<HTMLDivElement | null>(null);
const aura = ref<HTMLDivElement | null>(null);

const { mouseCoords, mouseOut } = useCursor({
  auraRef: aura,
  cursorRef: cursor
});
</script>

<style scoped lang="scss">
@import "assets/styles/abstarcts/mixins_media";

.custom-mouse {
  height: 100%;
  cursor: none;
}

#cursor, #aura {
  position: absolute;
  border-radius: 100%;
  transition: .5s cubic-bezier(.75, -1.27, .3, 2.33) transform, .2s cubic-bezier(.75, -1.27, .3, 2.33) opacity;
  user-select: none;
  pointer-events: none;
  z-index: 10000;

  @include laptop() {
    display: none;
  }
}

#cursor {
  width: 8px;
  height: 8px;
  background-color: rgba(240, 248, 255, 0.5);
  transform: scale(1);

  &.active {
    opacity: 0;
    transform: scale(0);
  }
}

#aura {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(240, 248, 255, 0.2);
  background-color: rgba(240, 248, 255, 0.27);
  transform: translate(5px, 5px);

  &.active {
    background: #fff;
    mix-blend-mode: difference;
    border: 2px solid rgba(240, 248, 255, 0.3);
    transform: scale(1.1);
  }

  &.hidden {
    transform: scale(.001)
  }
}
</style>