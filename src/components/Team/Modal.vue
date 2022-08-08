<script setup>
defineProps({
  show: Boolean,
});
</script>

<template>
  <Transition
    enter-from-class="opacity-0 scale-125"
    enter-to-class="opacity-100 scale-100"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-300"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-125"
  >
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div><slot name="default"></slot></div>
        <div><slot name="footer"></slot></div>

        <footer class="modal-footer">
          <slot name="header">
            <button @click="$emit('close')">Close Button</button></slot
          >
        </footer>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
}

.modal-container {
  background: white;
  padding: 1 rem;
  width: 80%;
  max-width: 500px;
  border-radius: 8px;
}

.modal-footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding: 1rem;

  font-size: 0.8rem;
  border-radius: 7px;
}

.modal-footer button {
  background: rgb(197, 166, 166);
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
}
</style>
