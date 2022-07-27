<template>
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
    <label
      >First name:
      <input type="name" name="first-name" v-model="form['first-name']"
    /></label>
    <label
      >Last name:
      <input type="name" name="last-name" v-model="form['last-name']"
    /></label>
    <label
      >Your Email: <input type="email" name="email" v-model="form.email"
    /></label>
    <label v-for="(option, index) in foodOptions" :key="index">
      <span>{{ option }}</span>
      <input
        type="radio"
        name="food-preference"
        v-model="form['food-preference']"
        :value="option"
        :checked="form['food-preference'] === option"
      />
    </label>
    <button type="submit" class="submit-button">Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

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
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  color: black;
}
</style>
