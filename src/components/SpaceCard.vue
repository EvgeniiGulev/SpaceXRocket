<script setup>
import { defineProps } from "vue";
defineProps({
  id: Number,
  name: String,
  active: Boolean,
  image: String,
  description: String,
  height: Number,
  diameter: Number,
  mass: Number,
  country: String,
});
</script>

<template lang="html">
  <div class="card-item">
    <div class="card">
      <div class="card-front">
        <img :src="image" alt="Rocket" class="rocket-image" />
        <h3 class="rocket-name">{{ name }}</h3>
      </div>
      <div :class="['active-dot', { active: active, inactive: !active }]"></div>
      <div class="card-back">
        <h3>{{ name }}</h3>
        <p class="rocket-description">{{ description }}</p>
        <ul class="rocket-info">
          <li><strong>Height:</strong> {{ height }} meters</li>
          <li><strong>Diameter:</strong> {{ diameter }} meters</li>
          <li><strong>Mass:</strong> {{ mass }} kg</li>
          <li><strong>Country:</strong> {{ country }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.card-item {
  flex: 1 1 22%;
  margin: 10px;
  max-width: 100%;
}

.card {
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.card-front,
.card-back {
  border-radius: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  opacity: 1;
}

.card-front {
  background-color: #fff;
  text-align: center;
  z-index: 1;
}

.card-back {
  background-color: #333;
  color: #fff;
  opacity: 0;
  padding: 20px;
  z-index: 2;
  transition: opacity 0.3s ease;
}

.card:hover .card-back {
  opacity: 1;
}

.rocket-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.rocket-name {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 3px rgba(0, 0, 255, 0.7);
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "Roboto Mono", sans-serif;
  background-image: linear-gradient(90deg, #4e3a8a, #1d1d5a);
  background-clip: text;
  -webkit-background-clip: text;
  animation: text-glow 1.5s ease-in-out infinite alternate;
  position: relative;
}

@keyframes text-glow {
  0% {
    text-shadow: 0 0 10px rgba(0, 0, 255, 0.6), 0 0 20px rgba(0, 0, 255, 0.6),
      0 0 30px rgba(0, 0, 255, 0.6);
  }
  100% {
    text-shadow: 0 0 20px rgba(0, 0, 255, 1), 0 0 30px rgba(0, 0, 255, 1),
      0 0 40px rgba(0, 0, 255, 1);
  }
}

.active-dot {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  bottom: -15px;
  left: 50%;
  z-index: 999;
  transform: translateX(-50%);
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
}

.active-dot.active {
  background-color: #00ff00;
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
}

.active-dot.inactive {
  background-color: #ff0000;
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.8);
}

.rocket-description {
  color: #ddd;
  margin-top: 12px;
}

.rocket-info {
  list-style-type: none;
  padding: 0;
  margin-top: 16px;
  font-size: 0.9em;
  color: #ddd;
}

.rocket-info li {
  margin-bottom: 8px;
}

.rocket-info strong {
  color: #007bff;
}
</style>
