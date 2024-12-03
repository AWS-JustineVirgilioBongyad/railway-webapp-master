<template>
  <div class="crud-section">
    <div class="table-container">
      <button @click="openModal('add')">Add Beacon</button>

      <table>
        <thead>
          <tr>
            <th>Beacon ID</th>
            <th>UUID</th>
            <th>Major</th>
            <th>Minor</th>
            <th>RSSI Threshold</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Platform No</th>
            <th>Car No</th>
            <th>Video Path</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="beacon in beacons" :key="beacon.beacon_id">
            <td>{{ beacon.beacon_id }}</td>
            <td>{{ beacon.uuid }}</td>
            <td>{{ beacon.major }}</td>
            <td>{{ beacon.minor }}</td>
            <td>{{ beacon.rssi_threshold }}</td>
            <td>{{ beacon.latitude }}</td>
            <td>{{ beacon.longitude }}</td>
            <td>{{ beacon.platform_no }}</td>
            <td>{{ beacon.car_no }}</td>
            <td>{{ beacon.video_path }}</td>
            <td>{{ beacon.created_at }}</td>
            <td>{{ beacon.updated_at }}</td>
            <td>
              <a href="#" @click.prevent="selectBeacon(beacon, 'edit')">Edit</a>
              <a href="#" @click.prevent="selectBeacon(beacon, 'delete')"
                >Delete</a
              >
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Add Beacon Modal -->
      <AddBeacon
        v-if="modalVisible && currentAction === 'add'"
        @add="handleAdd"
        @close="closeModal"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AddBeacon from "~/components/AddBeacon.vue";

const modalVisible = ref(false);
const currentAction = ref(null);

const beacons = ref([]);

const openModal = (action) => {
  currentAction.value = action;
  modalVisible.value = true;
};

const closeModal = () => {
  modalVisible.value = false;
  currentAction.value = null;
};

const handleAdd = (newBeacon) => {
  beacons.value.push({
    ...newBeacon,
    beacon_id: Date.now(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });
  closeModal();
};
</script>

<style scoped>
.crud-section {
  flex-grow: 1;
}

.table-container {
  width: 100%;
  overflow-x: auto;
  margin-top: 70px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #252525;
  color: white;
}

th,
td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #494949;
}

tbody tr:hover {
  background-color: #d3d3d3;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #007bff;
}

a:hover {
  color: #0056b3;
}
</style>
