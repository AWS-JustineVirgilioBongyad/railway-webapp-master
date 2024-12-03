<template>
  <div>
    <h2>Edit Beacon</h2>
    <form @submit.prevent="editBeacon">
      <input v-model="updatedName" placeholder="Name" required />
      <input v-model="updatedLocation" placeholder="Location" required />
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script setup>
const props = defineProps({
  visible: Boolean,
  beacon: Object,
});

const emit = defineEmits(["close", "edit"]);

const updatedName = ref("");
const updatedLocation = ref("");

watch(
  () => props.beacon,
  (newBeacon) => {
    if (newBeacon) {
      updatedName.value = newBeacon.name;
      updatedLocation.value = newBeacon.location;
    }
  },
  { immediate: true }
);

const closeModal = () => {
  emit("close");
};

const editBeacon = () => {
  emit("edit", {
    id: props.beacon.id,
    name: updatedName.value,
    location: updatedLocation.value,
  });
  closeModal();
};
</script>
