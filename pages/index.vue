<script setup>
// import NavigationBar from "../components/NavigationBar/NavigationBar.vue";
import { ref } from "vue";
import ModalOverlay from "~/components/ModalOverlay.vue";
import AddBeacon from "~/components/AddBeacon.vue";
import EditBeacon from "~/components/EditBeacon.vue";
import DeleteBeacon from "~/components/DeleteBeacon.vue";

defineNuxtRouteMiddleware(() => {
  return navigateTo("/beacon-table");
});

const beacons = ref([
  { id: 1, name: "Beacon 1", location: "Entrance" },
  { id: 2, name: "Beacon 2", location: "Lobby" },
]);

const modalVisible = ref(false);
const currentAction = ref(null);
const selectedBeacon = ref(null);

const openModal = (action) => {
  currentAction.value = action;
  modalVisible.value = true;
};

const closeModal = () => {
  modalVisible.value = false;
  currentAction.value = null;
  selectedBeacon.value = null;
};

const selectBeacon = (beacon, action) => {
  selectedBeacon.value = beacon;
  openModal(action);
};

const handleAdd = (newBeacon) => {
  beacons.value.push(newBeacon);
  closeModal();
};

const handleEdit = (updatedBeacon) => {
  const index = beacons.value.findIndex((b) => b.id === updatedBeacon.id);
  if (index !== -1) {
    beacons.value[index] = updatedBeacon;
  }
  closeModal();
};

const handleDelete = (deletedBeacon) => {
  beacons.value = beacons.value.filter((b) => b.id !== deletedBeacon.id);
  closeModal();
};
</script>

<template>
  <!-- <NavigationBar /> -->
  <div class="container">
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
                <button @click="selectedBeacon(beacon, 'edit')">Edit</button>
                <button @click="selectedBeacon(beacon, 'delete')">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Add Modal -->
        <ModalOverlay
          v-if="currentAction === 'add'"
          :visible="modalVisible"
          @close="closeModal"
        >
          <AddBeacon @add="handleAdd" @close="closeModal" />
        </ModalOverlay>

        <!-- Edit Modal -->
        <ModalOverlay
          v-if="currentAction === 'edit'"
          :visible="modalVisible"
          @close="closeModal"
        >
          <EditBeacon
            :beacon="selectedBeacon"
            @edit="handleEdit"
            @close="closeModal"
          />
        </ModalOverlay>

        <!-- Delete Modal -->
        <ModalOverlay
          v-if="currentAction === 'delete'"
          :visible="modalVisible"
          @close="closeModal"
        >
          <DeleteBeacon
            :beacon="selectedBeacon"
            @delete="handleDelete"
            @close="closeModal"
          />
        </ModalOverlay>
      </div>
    </div>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background-color: #252525; /* Match the main page background */
}

.main-page {
  display: flex;
  flex-direction: row;
  background-color: #252525;
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  overflow: hidden;
}

.container {
  display: flex;
  flex-grow: 1; /* Take up all available space */
  margin-top: 10vh; /* Adjust if needed */
}

.crud-section {
  flex-grow: 1;
  margin-left: 20px;
}

.table-container {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #252525; /* Gray table background */
}

th,
td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #494949;
  color: white;
}

tbody tr:hover {
  background-color: #d3d3d3;
  cursor: pointer;
}

button {
  margin-right: 5px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.tbl-header {
  display: flex;
  align-items: center;
}

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
  border: #0056b3;
  border-color: #007bff;
}

.modal-content {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-height: 90vh;
  overflow-y: auto;
  color: #000;
}

/* For laptop */
@media (max-width: 1440px) {
  .main-page {
    flex-direction: column;
    padding: 10px;
    height: 100%; /* Allow height to adjust */
    overflow: hidden;
  }

  .container {
    margin-top: 10vh;
    padding: 10px;
  }

  .crud-section {
    margin-left: 0;
  }

  .beacon-table {
    font-size: 14px;
    width: 100%; /* Make the table responsive */
  }

  th,
  td {
    padding: 8px;
  }

  .modal-content {
    width: 300px; /* Reduce modal width */
  }
}

/* For tablets */
@media (max-width: 1024px) {
  .main-page {
    flex-direction: column;
    padding: 10px;
    height: 100%; /* Allow height to adjust */
  }

  .container {
    margin-top: 5vh;
    padding: 10px;
  }

  .crud-section {
    margin-left: 0;
  }

  table {
    font-size: 14px;
    width: 100%; /* Make the table responsive */
  }

  th,
  td {
    padding: 8px;
  }

  .modal-content {
    width: 300px; /* Reduce modal width */
  }
}

/* For mobile devices */
@media (max-width: 768px) {
  .main-page {
    padding: 5px;
  }

  .crud-section {
    margin: 0;
  }

  table {
    font-size: 12px;
    width: 100%; /* Table should adjust to the screen */
    overflow-x: auto; /* Allow scrolling if content is too wide */
  }

  th,
  td {
    padding: 5px;
  }

  .tbl-header h2 {
    font-size: 18px;
  }

  .modal-content {
    width: 90%; /* Adjust modal to fit mobile screens */
    max-width: 350px;
  }
}

/* For very small screens */
@media (max-width: 480px) {
  .tbl-header h2 {
    font-size: 16px;
  }

  button {
    padding: 3px 8px;
    font-size: 12px;
  }

  th,
  td {
    font-size: 8px;
  }
  table {
    width: 100%; /* Table should adjust to the screen */
    overflow-x: auto; /* Allow scrolling if content is too wide */
  }
}
</style>
