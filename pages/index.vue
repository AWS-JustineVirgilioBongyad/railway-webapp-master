<template>
  <div class="main-page">
    <NavigationBar />
    <div class="content">
      <BeaconTable />
    </div>
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar.vue";
import BeaconTable from "~/components/BeaconTable.vue";

export default {
  components: {
    NavigationBar,
    BeaconTable,
  },
};
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
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.main-page {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  overflow: hidden; /* Prevent content from overflowing */
}
</style>
