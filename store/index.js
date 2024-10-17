import { defineStore } from "pinia"; // Assuming Pinia for state management
import { useApolloClient } from "@nuxtjs/apollo";

export const useAlbumsStore = defineStore("albums", {
  state: () => ({
    albums: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchAlbums() {
      this.loading = true;
      try {
        const client = useApolloClient();
        const { data } = await client.query({ query: "albums" });
        this.albums = data.albums;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
