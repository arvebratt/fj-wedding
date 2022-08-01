<template>
  <form
    name="rsvp"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
  >
    <input type="hidden" name="form-name" value="ask-question" />
    <div class="input-field">
      <input type="text" name="code" v-model="form.code" required />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Personal code</label>
    </div>
    <div class="name-wrapper">
      <div class="input-field">
        <input
          type="text"
          name="first-name"
          v-model="form['first-name']"
          required
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>First name</label>
      </div>
      <div class="input-field">
        <input
          type="text"
          name="last-name"
          v-model="form['last-name']"
          required
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Last name</label>
      </div>
    </div>
    <div class="input-field">
      <input type="text" name="email" v-model="form.email" required />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Email</label>
    </div>
    <div class="radio-wrapper">
      <label class="radio-label">
        <input
          type="radio"
          name="food-preference"
          v-model="form['food-preference']"
          :value="foodOptions[0]"
          :checked="form['food-preference'] === foodOptions[0]"
        />
        <span>{{ foodOptions[0] }}</span>
      </label>
      <label class="radio-label">
        <input
          type="radio"
          name="food-preference"
          v-model="form['food-preference']"
          :value="foodOptions[1]"
          :checked="form['food-preference'] === foodOptions[1]"
        />
        <span>{{ foodOptions[1] }}</span>
      </label>
      <label class="radio-label">
        <input
          type="radio"
          name="food-preference"
          v-model="form['food-preference']"
          :value="foodOptions[2]"
          :checked="form['food-preference'] === foodOptions[2]"
        />
        <span>{{ foodOptions[2] }}</span>
      </label>
    </div>
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
  name: "RsvpContent",
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
.name-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

.radio-wrapper {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: left;
}
</style>
