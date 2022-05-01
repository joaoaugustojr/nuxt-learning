<template>
  <div>
    <!-- Call root page -->
    <NuxtPage />
  </div>
</template>

<script setup>
// config head parameters
useHead({
  titleTemplate: "My learning app - %s",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {},
});
</script>
