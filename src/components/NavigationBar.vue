<template>
  <div :class="{ menuContainer: true, openContainer: showMobileMenu }">
    <Transition name="fade" mode="out-in">
      <font-awesome-icon
        v-if="showMobileMenu"
        :icon="['fas', 'xmark']"
        size="xl"
        class="hamburger"
        color="#faf1cd"
        @click="showMenu()"
      />
      <font-awesome-icon
        v-else
        :icon="['fas', 'bars']"
        size="xl"
        class="hamburger"
        color="#faf1cd"
        @click="showMenu()"
      />
    </Transition>
    <div
      class="menu-content"
      :class="showMobileMenu ? 'open-menu' : 'closed-menu'"
    >
      <ul class="menu-items">
        <li>
          <RouterLink class="menu-item" to="/">Wedding day info</RouterLink>
        </li>
        <li><RouterLink class="menu-item" to="/">Photos</RouterLink></li>
        <li><RouterLink class="menu-item" to="/">Registry</RouterLink></li>
        <li>
          <RouterLink class="menu-item" to="/">Music requests</RouterLink>
        </li>
      </ul>
      <button class="menu-item" @click="showModal = true">RSVP</button>
    </div>
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
      showMobileMenu: false,
      showModal: false,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
});
</script>

<style scoped>
.menuContainer {
  z-index: var(--z-index-navigation);
}

.menu-content {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
}
.menu-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 6px;
}
.hamburger {
  display: none;
}

/* Mobile version */
@media screen and (max-width: 768px) {
  .menuContainer {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: transparent;
  }
  .openContainer {
    transition: all 0.2s ease-out;
    background-color: #47294c;
  }
  .open-menu {
    opacity: 1;
    height: 150px;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }
  .menu-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }
  .menu-items {
    flex-direction: column;
    width: 100vw;
    gap: 0;
  }
  .menu-item {
    text-align: center;
    line-height: 10vh;
    margin-top: 10px;
    height: 10vh;
    width: 80vw;
  }
  .hamburger {
    display: block;
    margin: 10px;
    fill: var(--color-secondary-sand-100);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter,
.fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
