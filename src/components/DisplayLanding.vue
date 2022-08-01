<template>
  <div class="wrapper">
    <h6>Vi ska gifta oss!</h6>
    <div>
      <h1>Fredrik</h1>
      <h6>&nbsp;&nbsp; & &nbsp;&nbsp;</h6>
      <h1>Josefine</h1>
    </div>
    <h6>19.07.23</h6>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DisplayLanding",
});
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background-color: #47294ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
