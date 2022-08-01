<template>
  <div>
    <ul>
      <li><RouterLink to="/">Wedding day info</RouterLink></li>
      <li><RouterLink to="/">Photos</RouterLink></li>
      <li><RouterLink to="/">Registry</RouterLink></li>
      <li><RouterLink to="/">Music requests</RouterLink></li>
    </ul>
    <button id="show-modal" @click="showModal = true">RSVP</button>
  </div>
  <Teleport to="body">
    <RsvpModal :show="showModal" @close="showModal = false" />
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RsvpModal from "@/components/modal/RsvpModal.vue";

export default defineComponent({
  name: "NavigationBar",
  components: { RsvpModal },
  data() {
    return {
      showModal: false,
    };
  },
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
</style>
