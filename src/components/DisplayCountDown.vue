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
  name: "DisplayCountDown",
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
  beforeMount() {
    this.countDownToWedding(this.weddingTimeDate);
  },
  mounted() {
    setInterval(() => {
      this.countDownToWedding(this.weddingTimeDate);
    }, 1000);
  },
  methods: {
    countDownToWedding(endDate: string) {
      const totalTimeLeft = timeLeft(endDate);
      this.days = totalTimeLeft.days;
      this.hours = totalTimeLeft.hours;
      this.minutes = totalTimeLeft.minutes;
      this.seconds = totalTimeLeft.seconds;
    },
  },
  components: {
    CounterBox,
  },
});
</script>

<style scoped>
.counter-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;
}
</style>
