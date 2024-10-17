<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Photo Albums</h1>
    <AlbumGrid :albums="albums" />
  </div>
</template>

<script>
import { GET_ALBUMS } from "~/graphql/queries";
import AlbumGrid from "~/components/AlbumGrid.vue";

export default {
  components: {
    AlbumGrid,
  },
  async asyncData({ $apollo }) {
    const { data } = await $apollo.query({ query: GET_ALBUMS });
    return { albums: data.albums.data };
  },
};
</script>

<style scoped></style>
