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
      return this.currentValue ? this.numberToString(this.currentValue) : "";
    },
  },
  methods: {
    numberToString(value: number) {
      return value < 10 ? `0${value.toString()}` : value.toString();
    },
  },
});
</script>

<style scoped>
div {
  color: var(--color-text-light);
  font-size: 6rem;
}
</style>
