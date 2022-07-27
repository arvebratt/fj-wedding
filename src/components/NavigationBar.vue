<template>
  <header>
    <ul>
      <li><RouterLink to="/rsvp">RSVP</RouterLink></li>
      <li><RouterLink to="/">Wedding day info</RouterLink></li>
    </ul>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavigationBar",
});
</script>

<style scoped>
header {
  z-index: 999;
  margin-top: 10px;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5vw;
  list-style-type: none;
}

a {
  color: var(--color-text-dark);
  text-decoration: none;
  font-size: large;
}
</style>
