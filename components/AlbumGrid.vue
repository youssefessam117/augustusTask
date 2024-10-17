<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div
      v-for="album in albums"
      :key="album.id"
      class="bg-white p-4 rounded-lg shadow-lg"
    >
      <h3 class="text-lg font-bold">{{ album.title }}</h3>
      <p class="text-sm text-gray-500">By {{ album.user.name }}</p>
      <NuxtLink :to="`/albums/${album.id}`" class="text-blue-500"
        >View Album</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    albums: Array,
  },
};
</script>

<style scoped></style>
