<template>
  <div>
    <ul>
      <li><RouterLink to="/">Wedding day info</RouterLink></li>
      <li><RouterLink to="/">Photos</RouterLink></li>
      <li><RouterLink to="/">Registry</RouterLink></li>
      <li><RouterLink to="/">Music requests</RouterLink></li>
    </ul>
    <button @click="$router.push('rsvp')">RSVP</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavigationBar",
});
</script>

<style scoped>
div {
  z-index: 999;
  width: 100vw;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  list-style-type: none;
}

a {
  color: var(--baby-blue);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 900;
}
</style>
