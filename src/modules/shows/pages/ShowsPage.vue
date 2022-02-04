<script setup lang="ts">
import { debounce } from '@/utils/debounce';
import { useShowsStore } from '../store';

const { store, setSearchTerm } = useShowsStore()
const debouncedSearch = debounce(setSearchTerm)

</script>

<template>
  <input type="text" @input="(event) => debouncedSearch(event.target?.value)" />
  <div v-if="store.showsLoading">Loading...</div>
  <div v-else-if="store.showsError">Ooops...</div>
  <div v-else>{{ JSON.stringify(store.shows) }}</div>
</template>