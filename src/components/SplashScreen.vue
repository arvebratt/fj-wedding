<template>
  <div :class="{ splash: true, fadeout: !isSplashing }">
    <div class="flex">
      <DisplayCountDown :wedding-time-date="weddingTimeDate" />
      <button @click="$emit('close')">Continue</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DisplayCountDown from "./DisplayCountDown.vue";

export default defineComponent({
  name: "SplashScreen",
  props: ["isSplashing"],
  data() {
    return {
      weddingTimeDate: "Jul 19, 2023 14:00:00",
    };
  },
  components: { DisplayCountDown },
});
</script>

<style>
.flex {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
}

.splash {
  z-index: 9999;
  background-color: var(--color-secondary-sand-100);
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  display: block;
  overflow: hidden;
  position: fixed;
}

.fadeout {
  animation: fadesplash 2s forwards;
}
@-webkit-keyframes fadesplash {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
@-moz-keyframes fadesplash {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
@keyframes fadesplash {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
