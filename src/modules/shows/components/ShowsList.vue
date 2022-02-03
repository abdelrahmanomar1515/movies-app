<script setup lang="ts">
import { ref } from 'vue'
import { Show } from '../../../api/shows';

defineProps<{ shows: Show[] }>()

const count = ref(0)
</script>

<template></template>

<style scoped>
</style>
