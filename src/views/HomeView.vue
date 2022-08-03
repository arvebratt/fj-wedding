<template>
  <NavigationBar />
  <div class="background-image" :style="backgroundImage">
    <div class="content">
      <DisplayLanding />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "@/components/NavigationBar.vue";
import DisplayLanding from "@/components/DisplayLanding.vue";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      weddingTimeDate: "Jul 19, 2023 14:00:00",
    };
  },
  components: {
    NavigationBar,
    DisplayLanding,
  },
  computed: {
    backgroundImage() {
      const w = window.innerWidth;
      if (w > 400) {
        return {
          "--url-path": "url(/large-background.jpg)",
        };
      }
      return {
        "--url-path": "url(/small-background.jpg)",
      };
    },
  },
});
</script>

<style scoped>
.content {
  width: 50vw;
  height: 100vh;
}

@media (max-width: 400px) {
  .content {
    width: 100vw;
  }
}
</style>
