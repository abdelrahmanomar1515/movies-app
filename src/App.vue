<script setup lang="ts">
import { darkTheme, NCard, NConfigProvider } from "naive-ui";
</script>

<template>
  <NConfigProvider :theme="darkTheme">
    <NCard
      class="container"
      :bordered="false"
      :content-style="{ padding: 0, margin: 0 }"
    >
      <router-view></router-view>
    </NCard>
  </NConfigProvider>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  overflow: auto;
  border-radius: 0;
}
</style>

<style>
body,
html {
  margin: 0;
}
</style>
