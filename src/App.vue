<template>
  <SplashScreen :isSplashing="isSplashing" @close="isSplashing = false" />
  <main v-if="!isSplashing">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SplashScreen from "@/components/SplashScreen.vue";

export default defineComponent({
  name: "App",
  components: {
    SplashScreen,
  },
  data() {
    return {
      isSplashing: true,
    };
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.isSplashing = false;
  //   }, 3000);
  // },
});
</script>
