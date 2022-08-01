<template>
  <div class="wrapper">
    <div class="counter-container">
      <CounterBox :max-value="365" :current-value="days" />
      <CounterBox :max-value="24" :current-value="hours" />
      <CounterBox :max-value="60" :current-value="minutes" />
      <CounterBox :max-value="60" :current-value="seconds" />
    </div>
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
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
}
.counter-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;
}
img {
  max-width: 400px;
}
</style>
