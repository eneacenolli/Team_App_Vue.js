import { defineStore } from "pinia";

export let useTeamStore = defineStore("team", {
  state: () => ({
    name: "",
    spots: "",
    members: [],
  }),

  actions: {
    async fill() {
      let r = await import("../team.json");
      //update the staate imediately
      this.$state = r.default;

      /////// update the state///////////
      // let data = r.default;
      // this.name = data.name;
      // this.spots = data.spots;
      // this.members = data.members;

      // this.$patch({
      //   name: data.name,
      //   spots: data.spots,
      //   members: data.members,
      // });
    },

    grow(spots) {
      this.spots = this.spots;
    },
  },

  getters: {
    spotsRemaining() {
      return this.spots - this.members.length;
    },
  },
});
