<template>
  <div>{{ displayValue }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CounterBox",
  props: {
    maxValue: {
      requried: true,
      type: Number,
    },
    currentValue: {
      requried: true,
      type: Number,
    },
  },
  computed: {
    displayValue() {
      return this.numberToString(this.currentValue ? this.currentValue : 0);
    },
  },
  methods: {
    numberToString(value: number) {
      if (value === 0) return "00";
      return value < 10 ? `0${value.toString()}` : value.toString();
    },
  },
});
</script>

<style scoped>
div {
  font-size: 20px;
}
</style>
