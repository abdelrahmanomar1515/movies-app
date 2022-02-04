<script setup lang="ts">
import { NCard } from 'naive-ui';
import { Show } from '../types';

defineProps<{ show: Show }>()

</script>

<template>
  <NCard class="card" :title="show.name" size="small">
    <template #cover>
      <img :src="show.image.medium" />
    </template>
  </NCard>
</template>

<style scoped>
</style>