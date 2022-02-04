<script setup lang="ts">
import { debounce } from "@/utils/debounce";
import { NEmpty, NSpace } from "naive-ui";
import GenreSelect from "../components/GenreSelect.vue";
import Search from "../components/Search.vue";
import ShowsList from "../components/ShowsList.vue";
import { GENRES, useShowsStore } from "../store";

const { store, setSearchTerm, shows, setSelectedGenres } = useShowsStore();
const debouncedSearch = debounce(setSearchTerm);
const genres = GENRES;
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <GenreSelect :genres="genres" @change="setSelectedGenres" />
      <Search @change="debouncedSearch" />
    </header>
    <main class="content">
      <div v-if="store.showsLoading">Loading...</div>
      <NEmpty
        v-else-if="store.showsError"
        description="Ooops.. Something went wrong!"
      />
      <div v-else-if="shows.length">
        <ShowsList :shows="shows"></ShowsList>
      </div>
      <NEmpty
        v-else-if="!shows.length"
        description="Couldn't find a matching show"
      />
    </main>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr;
  gap: 20px;
}
.header {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 20px 0;
  justify-content: space-between;
  gap: 20px;
  > * {
    max-width: 500px;
    min-width: 250px;
    flex: 1 1 250px;
  }
}
.content {
  overflow: auto;
  padding: 0px 20px;
}
</style>
