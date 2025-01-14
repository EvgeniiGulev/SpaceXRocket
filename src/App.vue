<script setup>
import SpaceHeader from "./components/SpaceHeader.vue";
import SpaceGrid from "./components/SpaceGrid.vue";
</script>

<template>
  <SpaceHeader />
  <SpaceGrid />
</template>

<style>
:root {
  font-family: Roboto, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  background-color: #242424;
  color: #f5f5f5d0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto;
}
</style>
