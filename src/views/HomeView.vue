<template>
  <NavigationBar />
  <div
    class="background-image"
    style="--url-path: url(/green-silk-background.jpeg)"
  >
    <div class="grid">
      <DisplayLanding />
      <DisplayCountDown :wedding-time-date="weddingTimeDate" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "@/components/NavigationBar.vue";
import DisplayCountDown from "@/components/DisplayCountDown.vue";
import DisplayLanding from "@/components/DisplayLanding.vue";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      weddingTimeDate: "Jul 19, 2023 14:00:00",
    };
  },
  components: {
    DisplayCountDown,
    NavigationBar,
    DisplayLanding,
  },
});
</script>

<style scoped>
.grid {
  width: 100vw;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
}
</style>
