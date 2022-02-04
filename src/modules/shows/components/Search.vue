<script setup lang="ts">
import { NInput } from "naive-ui";

const emit = defineEmits(["change"]);
</script>

<template>
  <NInput
    type="text"
    size="large"
    placeholder="Search"
    @input="(e) => emit('change', e)"
  />
</template>
