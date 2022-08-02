<template>
  <div class="wrapper">
    <h6>Vi ska gifta oss!</h6>
    <div class="title">
      <h1>Fredrik</h1>
      <FjLogo />
      <h1>Josefine</h1>
    </div>
    <h6>19.07.23</h6>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FjLogo from "./FjLogo.vue";

export default defineComponent({
  name: "DisplayLanding",
  components: { FjLogo },
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

h6 {
  font-style: italic;
  color: var(--color-secondary-sand-200);
}

h1 {
  color: var(--color-secondary-red-200);
}
.title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2vw;
}
@media (max-width: 400px) {
  .title {
    gap: 0;
    flex-direction: column;
  }
}
</style>
