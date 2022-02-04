<script setup lang="ts">
import { NSelect } from "naive-ui";
import { computed } from "vue";
import { Genre } from "../types";

const props = defineProps<{ genres: Genre[] }>();
const emit = defineEmits(["change"]);
const options = computed(() =>
  props.genres.map((genreName) => ({
    label: genreName,
    value: genreName,
  }))
);
</script>

<template>
  <NSelect
    size="large"
    placeholder="Genre"
    multiple
    @update:value="(e) => emit('change', e)"
    :options="options"
  />
</template>
