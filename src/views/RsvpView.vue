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
      <input type="name" name="first-name" v-model="form.firstName"
    /></label>
    <label
      >Last name: <input type="name" name="last-name" v-model="form.lastName"
    /></label>
    <label
      >Your Email: <input type="email" name="email" v-model="form.email"
    /></label>
    <label v-for="(option, index) in foodOptions" :key="index">
      <span>{{ option }}</span>
      <input
        type="radio"
        name="option"
        @input="(ev) => form.foodPreference === handleOption(ev)"
        :value="option"
        :checked="form.foodPreference === option"
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
  firstName: string;
  lastName: string;
  email: string;
  foodPreference: string;
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
        firstName: "",
        lastName: "",
        email: "",
        foodPreference: "",
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
