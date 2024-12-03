<template>
  <div>
    <h2>Delete Beacon</h2>
    <p>Are you sure you want to delete "{{ beacon.name }}"?</p>
    <button @click="confirmDelete">Yes</button>
    <button @click="closeModal">No</button>
  </div>
</template>

<script setup>
const props = defineProps({
  visible: Boolean,
  beacon: Object,
});

const emit = defineEmits(["close", "delete"]);

const closeModal = () => {
  emit("close");
};

const confirmDelete = () => {
  emit("delete", props.beacon);
  closeModal();
};
</script>
