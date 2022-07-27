<template>
  <body>
    <form name="rsvp" method="POST" data-netlify="true">
      <p>
        <label>Personal code: <input type="text" name="code" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label
          >Food preference:
          <select name="role[]" multiple>
            <option value="chicken">Chicken</option>
            <option value="fish">Fish</option>
            <option value="vegetarian">Vegetarian</option>
          </select></label
        >
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </body>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RsvpView",
});
</script>

<style scoped></style>
