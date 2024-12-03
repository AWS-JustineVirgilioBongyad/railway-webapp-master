<template>
  <div>
    <h1>GET Request Example</h1>
    <p v-if="data">{{ data.message }}</p>
    <p v-else>Loading...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const data = ref(null);

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:4000/beacon");
    data.value = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>
