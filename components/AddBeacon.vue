<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2>Add Beacon</h2>
      <form @submit.prevent="submitBeacon">
        <div>
          <label>UUID:</label>
          <input v-model="newBeacon.uuid" required />
        </div>
        <div>
          <label>Major:</label>
          <input v-model.number="newBeacon.major" type="number" required />
        </div>
        <div>
          <label>Minor:</label>
          <input v-model.number="newBeacon.minor" type="number" required />
        </div>
        <div>
          <label>RSSI Threshold:</label>
          <input
            v-model.number="newBeacon.rssi_threshold"
            type="number"
            required
          />
        </div>
        <div>
          <label>Latitude:</label>
          <input v-model.number="newBeacon.latitude" type="number" required />
        </div>
        <div>
          <label>Longitude:</label>
          <input v-model.number="newBeacon.longitude" type="number" required />
        </div>
        <div>
          <label>Platform No:</label>
          <input
            v-model.number="newBeacon.platform_no"
            type="number"
            required
          />
        </div>
        <div>
          <label>Car No:</label>
          <input v-model.number="newBeacon.car_no" type="number" required />
        </div>
        <div>
          <label>Video Path:</label>
          <input v-model="newBeacon.video_path" required />
        </div>
        <button type="submit">Add</button>
        <button type="button" @click="$emit('close')">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const newBeacon = reactive({
  uuid: "",
  major: null,
  minor: null,
  rssi_threshold: null,
  latitude: null,
  longitude: null,
  platform_no: null,
  car_no: null,
  video_path: "",
});

const submitBeacon = () => {
  $emit("add", { ...newBeacon });
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* High z-index for overlaying */
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-height: 90vh;
  overflow-y: auto;
}
</style>
