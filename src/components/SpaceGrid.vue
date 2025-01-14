<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import SpaceCard from "./SpaceCard.vue";

const store = useStore();

onMounted(() => {
  store.dispatch("fetchRockets");
});
</script>

<template lang="html">
  <div class="rockets-list">
    <div class="grid-container">
      <SpaceCard
        v-for="rocket in store.getters.rockets"
        :key="rocket.id"
        :id="rocket.id"
        :name="rocket.name"
        :active="rocket.active"
        :image="rocket.image"
        :description="rocket.description"
        :height="rocket.height"
        :diameter="rocket.diameter"
        :mass="rocket.mass"
        :country="rocket.country"
      />
    </div>
  </div>
</template>

<style lang="css">
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr)); /* Responsive columns with minimum width */
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-auto-rows: minmax(200px, auto); /* Ensure cards grow/shrink with content */
}

/* Responsive design for smaller screens */
@media (max-width: 1200px) {
  .grid-container {
    grid-template-columns: repeat(3, minmax(250px, 1fr)); /* 3 columns for medium screens */
  }
}

@media (max-width: 800px) {
  .grid-container {
    grid-template-columns: repeat(2, minmax(250px, 1fr)); /* 2 columns for small screens */
  }
}

@media (max-width: 500px) {
  .grid-container {
    grid-template-columns: 1fr; /* 1 column for very small screens */
  }
}
</style>
