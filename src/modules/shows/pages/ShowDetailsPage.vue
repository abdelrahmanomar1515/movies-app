<script setup lang="ts">
import { useRoute } from "vue-router";
import { useShowsDetailsApi } from "../api/show-details";

const route = useRoute();
const { data, getShowDetails } = useShowsDetailsApi();
getShowDetails(route.params.id as string);
</script>

<template>
  <!-- Here you can display any details you want for the show -->
  {{ JSON.stringify(data, null, 2) }}
</template>
