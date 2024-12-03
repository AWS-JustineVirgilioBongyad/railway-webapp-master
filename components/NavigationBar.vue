<template>
  <nav class="navigation-bar">
    <div class="nav-left">
      <img src="" alt="Logo" class="logo" />
      <span class="moyai">Railway Webapp</span>
    </div>
    <div class="nav-right">
      <a href="/map" class="nav-link">Map</a>
      <a href="/admin" class="nav-link">Admin</a>
      <a href="/logout" class="nav-link">Logout</a>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
.navigation-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Full screen width */
  height: 60px; /* Adjust as needed */
  background-color: #000000;
  color: white;
  padding: 0 20px; /* Add horizontal padding */
  box-sizing: border-box; /* Ensure padding doesn't affect width */
  position: fixed; /* Keep the navigation fixed at the top */
  top: 0;
  left: 0;
  z-index: 100; /* Ensure it stays on top of other elements */
}

.nav-left {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px; /* Adjust as needed */
  margin-right: 10px;
}

.company-name {
  font-size: 18px;
  font-weight: bold;
}

.nav-right {
  display: flex;
  gap: 15px; /* Space between links */
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
