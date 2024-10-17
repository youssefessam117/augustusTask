<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">{{ album.title }}</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="photo in album.photos.data"
        :key="photo.id"
        class="bg-white p-2 rounded shadow-md"
      >
        <img :src="photo.url" alt="Photo" class="rounded" />
        <p class="text-sm">{{ photo.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_ALBUMS } from "~/graphql/queries";

export default {
  async asyncData({ params, $apollo }) {
    const { data } = await $apollo.query({ query: GET_ALBUMS });
    const album = data.albums.data.find((album) => album.id == params.id);
    return { album };
  },
};
</script>
