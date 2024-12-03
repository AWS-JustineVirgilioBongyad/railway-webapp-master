<template>
  <div class="main-page">
    <NavigationBar />
    <div class="content">
      <BeaconTable />
    </div>
  </div>
</template>

<script setup>
import NavigationBar from "~/components/NavigationBar.vue";
import BeaconTable from "~/components/BeaconTable.vue";
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Prevent scrolling */
  background-color: #252525;
}

.main-page {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  overflow: hidden; /* Prevent content from overflowing */
}
</style>
