<script setup lang="ts">
import { useShowsStore } from '../store';

const { store, setSearchTerm } = useShowsStore()

</script>

<template>
  <input type="text" @input="(event) => setSearchTerm(event.target?.value)" />
  <div v-if="store.showsLoading">Loading...</div>
  <div v-else-if="store.showsError">Ooops...</div>
  <div v-else>{{ JSON.stringify(store.shows) }}</div>
</template>