<template>
  <div class="modal-overlay">
    <div class="modal-container">
      <h2 class="modal-title">Add Beacon Info</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="uuid">UUID</label>
          <input
            type="text"
            id="uuid"
            v-model="beaconData.uuid"
            placeholder="Enter UUID"
            required
          />
        </div>
        <div class="form-group">
          <label for="major">Major</label>
          <input
            type="number"
            id="major"
            v-model="beaconData.major"
            placeholder="Enter Major"
            required
          />
        </div>
        <div class="form-group">
          <label for="minor">Minor</label>
          <input
            type="number"
            id="minor"
            v-model="beaconData.minor"
            placeholder="Enter Minor"
            required
          />
        </div>
        <div class="form-group">
          <label for="rssi_threshold">RSSI Threshold</label>
          <input
            type="number"
            id="rssi_threshold"
            v-model="beaconData.rssi_threshold"
            placeholder="Enter RSSI Threshold"
            required
          />
        </div>
        <div class="form-group">
          <label for="latitude">Latitude</label>
          <input
            type="number"
            id="latitude"
            v-model="beaconData.latitude"
            step="any"
            placeholder="Enter Latitude"
            required
          />
        </div>
        <div class="form-group">
          <label for="longitude">Longitude</label>
          <input
            type="number"
            id="longitude"
            v-model="beaconData.longitude"
            step="any"
            placeholder="Enter Longitude"
            required
          />
        </div>
        <div class="form-actions">
          <button type="submit" class="btn-submit">Add Beacon</button>
          <button type="button" class="btn-cancel" @click="$emit('close')">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beaconData: {
        uuid: "",
        major: null,
        minor: null,
        rssi_threshold: null,
        latitude: null,
        longitude: null,
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("add", { ...this.beaconData });
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6); /* Dim background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  background: linear-gradient(135deg, #ffffff, #f7f7f7);
  width: 40vw;
  padding: 20px 25px;
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
  text-align: center;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-title {
  font-size: 1.5rem;
  color: #333333;
  margin-bottom: 15px;
  text-align: left;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555555;
}

input {
  width: 93%;
  padding: 8px 12px;
  border: 1px solid #cccccc;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

input:focus {
  border-color: #007bff;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-submit {
  background-color: #007bff;
  color: white;
}

.btn-submit:hover {
  background-color: #0056b3;
}

.btn-cancel {
  background-color: #eeeeee;
  color: #333333;
}

.btn-cancel:hover {
  background-color: #dddddd;
}
</style>
