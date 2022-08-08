<script setup>
import { ref } from "vue";
import { useTeamStore } from "../../stores/TeamStore";
import Modal from "./Modal.vue";
let showModal = ref(false);

let team = useTeamStore();
</script>

<template>
  <button
    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
    :disabled="team.members.length === team.spots"
    @click="showModal = true"
  >
    Add Member ({{ team.spotsRemaining }} Spots Left)
  </button>

  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
      <template #default>
        <p class="pt-2">Need to add a new member</p>

        <form class="mt-6 p-4">
          <div class="flex gap-2">
            <input type="text" placeholder="Email Address..." />
            <button>Add</button>
          </div>
        </form>
      </template>
    </Modal>
  </Teleport>
</template>
