<template>
  <NavigationBar />
  <div class="background">
    <form
      name="rsvp"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="ask-question" />

      <label
        >Personal code: <input type="text" name="code" v-model="form.code"
      /></label>
      <div class="name-container">
        <label
          >First name:
          <input type="name" name="first-name" v-model="form['first-name']"
        /></label>
        <label
          >Last name:
          <input type="name" name="last-name" v-model="form['last-name']"
        /></label>
      </div>
      <label
        >Your Email: <input type="email" name="email" v-model="form.email"
      /></label>
      <label v-for="(option, index) in foodOptions" :key="index">
        <div class="radio-container">
          <span>{{ option }}</span>
          <input
            type="radio"
            name="food-preference"
            v-model="form['food-preference']"
            :value="option"
            :checked="form['food-preference'] === option"
          />
        </div>
      </label>
      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import NavigationBar from "@/components/NavigationBar.vue";

interface Iform {
  code: string;
  "first-name": string;
  "last-name": string;
  email: string;
  "food-preference": string;
}

interface Ipayload extends Iform {
  "form-name": string;
}

export default defineComponent({
  name: "RsvpView",
  data() {
    return {
      form: {
        code: "",
        "first-name": "",
        "last-name": "",
        email: "",
        "food-preference": "",
      } as Iform,
      foodOptions: ["chicken", "fish", "vegetarian"],
    };
  },
  methods: {
    handleOption(event: Event) {
      const { target } = event;
      if (target) return (target as HTMLButtonElement).value;
      return "";
    },
    encode(data: Ipayload) {
      return Object.keys(data)
        .map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(
              data[key as keyof Ipayload]
            )}`
        )
        .join("&");
    },
    handleSubmit() {
      const axiosConfig = {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      };
      console.log(
        this.encode({
          "form-name": "rsvp",
          ...this.form,
        })
      );
      axios
        .post(
          "/",
          this.encode({
            "form-name": "rsvp",
            ...this.form,
          }),
          axiosConfig
        )
        .then(() => {
          this.$router.push("thanks");
        })
        .catch(() => {
          this.$router.push("404");
        });
    },
  },
  components: { NavigationBar },
});
</script>

<style scoped>
form {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
}

.name-container {
  display: flex;
  gap: 2vw;
}

.radio-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
  gap: 2vw;
}
input[type="text"],
input[type="name"],
input[type="email"] {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid var(--color-accent-royale-blue);
  outline: 0;
  font-size: 1.3rem;
  color: var(--color-text-dark);
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}

input[type="text"]::placeholder,
input[type="name"]::placeholder,
input[type="email"]::placeholder {
  color: transparent;
}

button {
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 2px;
  height: 36px;
  line-height: 34px;
  font-size: 14px;
  color: var(--color-text-light);
  background-color: var(--color-accent-royale-blue);
  transition: background-color 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;
  padding: 0 18px;
}

button:hover {
  color: var(--color-accent-pale-yellow);
  background-color: var(--color-text-dark);
}
</style>
