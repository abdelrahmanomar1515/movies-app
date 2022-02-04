<script setup lang="ts">
import { NCard } from "naive-ui";
import { RouterLink } from "vue-router";
import { Show } from "../types";

defineProps<{ show: Show; infoLink: string }>();
</script>

<template>
  <NCard class="card" :title="show.name" size="small">
    <template #cover>
      <img :src="show.image.medium" />
    </template>
    <RouterLink :to="infoLink" tag="button">More Info</RouterLink>
  </NCard>
</template>

<style scoped></style>
