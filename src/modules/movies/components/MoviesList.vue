<script setup lang="ts">
import { ref } from 'vue'
import { Movie } from '../types';

defineProps<{ movies: Movie[] }>()

const count = ref(0)
</script>

<template></template>

<style scoped>
</style>
