<script setup>
import TeamHeader from "./Team/TeamHeader.vue";
import TeamMembers from "./Team/TeamMembers.vue";
import TeamFooter from "./Team/TeamFooter.vue";
import { useTeamStore } from "../stores/TeamStore";
import Modal from "../components/Team/Modal.vue";
import { ref } from "vue";

let team = useTeamStore();

team.fill();
</script>

<template>
  <TeamHeader @add="showModal = true" />
  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
  </div>
  <TeamFooter />
</template>
