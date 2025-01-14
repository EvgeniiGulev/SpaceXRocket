import { createStore } from "vuex";

export default createStore({
  state: {
    rockets: [],
  },
  mutations: {
    setRockets(state, rockets) {
      state.rockets = rockets;
    },
  },
  actions: {
    async fetchRockets({ commit }) {
      try {
        const response = await fetch("https://api.spacexdata.com/v4/rockets");
        const data = await response.json();
        console.log(data)

        const rockets = data.map((rocket, index) => ({
          id: index + 1,
          name: rocket.name,
          active: rocket.active,
          image: rocket.flickr_images[0],
          description: rocket.description,
          height: rocket.height.meters,
          diameter: rocket.diameter.meters,
          mass: rocket.mass.kg,
          country: rocket.country,
        }));

        commit("setRockets", rockets);
      } catch (error) {
        console.error("Failed to fetch rockets:", error);
      }
    },
  },
  getters: {
    rockets(state) {
      return state.rockets;
    },
  },
});
