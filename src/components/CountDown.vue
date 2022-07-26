<template>
  <div class="counter-container">
    <CounterBox :max-value="365" :current-value="days" />
    <CounterBox :max-value="24" :current-value="hours" />
    <CounterBox :max-value="60" :current-value="minutes" />
    <CounterBox :max-value="60" :current-value="seconds" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { timeLeft } from "@/util/utils";
import CounterBox from "./CounterBox.vue";

export default defineComponent({
  props: {
    weddingTimeDate: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  mounted() {
    this.countDownToWedding(this.weddingTimeDate);
  },
  methods: {
    countDownToWedding(endDate: string) {
      setInterval(() => {
        const totalTimeLeft = timeLeft(endDate);
        this.days = totalTimeLeft.days;
        this.hours = totalTimeLeft.hours;
        this.minutes = totalTimeLeft.minutes;
        this.seconds = totalTimeLeft.seconds;
      }, 1000);
    },
  },
  components: {
    CounterBox,
  },
});
</script>

<style scoped>
.counter-container {
  width: 100vw;
  height: 100vh;
  background-color: var(--color-background);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;
}
</style>
