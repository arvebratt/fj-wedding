<template>
  <div class="wrapper">
    <div class="flex-wrapper">
      <DisplayCountDown :wedding-time-date="weddingTimeDate" />
      <form class="form-wrapper" v-on:submit.prevent="validateBeforeSubmit">
        <transition name="shake">
          <input
            :class="{ inputPassword: true, inputWrong: error }"
            type="password"
            name="password"
            v-model.trim="password"
          />
        </transition>
        <button class="btn btn-primary" type="submit">Enter</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";
import DisplayCountDown from "@/components/DisplayCountDown.vue";

export default defineComponent({
  data() {
    return {
      error: false,
      password: null,
      weddingTimeDate: "Jul 19, 2023 14:00:00",
    };
  },
  components: { DisplayCountDown },
  methods: {
    validateBeforeSubmit() {
      if (this.password === "fjbröllop") {
        this.error = false;
        localStorage.pass = this.password;
        router.push("/");
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 820);
      }
    },
  },
});
</script>

<style scoped>
.wrapper {
  z-index: 9999;
  background-color: var(--color-secondary-sand-100);
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  display: block;
  overflow: hidden;
  position: fixed;
}

.fadeout {
  animation: fadesplash 2s forwards;
}
@-webkit-keyframes fadesplash {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
@-moz-keyframes fadesplash {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
@keyframes fadesplash {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

.flex-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
}
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
@media (max-width: 400px) {
  .form-wrapper {
    flex-direction: column;
  }
}
.inputPassword {
  font-size: 1.5rem;
  height: 36px;
  max-width: 230px;
  color: var(--color-secondary-red-800);
  border: 2px solid var(--color-secondary-red-500);
  border-radius: 2px;
  background: transparent;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  outline: none;
}
.inputPassword:focus {
  border: 2px solid var(--color-secondary-red-700);
}
.inputWrong {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
