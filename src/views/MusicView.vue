<template>
  <NavigationBar />
  <div className="tjena">
    <button @click="refetch()" :disabled="isFetching">
      {{ isFetching ? "Refetching..." : "Refetch" }}
    </button>
    <h2>TODO list</h2>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError">An error has occurred: {{ error }}</div>
    <div v-else-if="data">
      <ul>
        <li v-for="item in data" :key="item.title">
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "@/components/NavigationBar.vue";
import { useQuery } from "vue-query";

interface MusicRequest {
  id: number;
  title: string;
}

const fetcher = async (): Promise<MusicRequest[]> =>
  await fetch(
    "http://weddingbackend-env.eba-yipq8pwj.eu-north-1.elasticbeanstalk.com/api/v1/playlist"
  )
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        console.log(data);
        return data;
      }
    });

export default defineComponent({
  name: "MusicView",
  components: { NavigationBar },
  setup() {
    const { isLoading, isError, isFetching, data, error, refetch } = useQuery(
      "music-list",
      fetcher
    );
    return { isLoading, isError, isFetching, data, error, refetch };
  },
});
</script>

<style scoped>
.tjena {
  height: 50vh;
}
</style>
