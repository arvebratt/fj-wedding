<template>
  <body>
    <CountDown :wedding-time-date="weddingTimeDate" />
  </body>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CountDown from "@/components/CountDown.vue";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      weddingTimeDate: "Jul 19, 2023 14:00:00",
    };
  },
  components: {
    CountDown,
  },
});
</script>
