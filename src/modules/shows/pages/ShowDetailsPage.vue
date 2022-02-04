<template>
  <div>Show details page</div>
  {{ route.params.id }}
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>
