<template>
  <ModalOverlay :visible="visible" @close="closeModal">
    <h2>Add Beacon</h2>
    <form @submit.prevent="addBeacon">
      <input v-model="name" placeholder="Name" required />
      <input v-model="location" placeholder="Location" required />
      <button type="submit">Add</button>
    </form>
  </ModalOverlay>
</template>

<script setup>
import ModalOverlay from "./ModalOverlay.vue";

const props = defineProps({
  visible: Boolean,
});

const emit = defineEmits(["close", "add"]);

const name = ref("");
const location = ref("");

const closeModal = () => {
  emit("close");
};

const addBeacon = () => {
  emit("add", { id: Date.now(), name: name.value, location: location.value });
  name.value = "";
  location.value = "";
  closeModal();
};
</script>
