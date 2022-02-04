<script setup lang="ts">
import { Show } from '../types';
import ShowCard from './ShowCard.vue';

defineProps<{ shows: Show[] }>()

</script>

<template>
  <div class="container">
    <ShowCard v-for="show in shows" :key="show.id" :show="show"></ShowCard>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
}
</style>
