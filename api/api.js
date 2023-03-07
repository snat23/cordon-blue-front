import axios from "axios";
import { async } from "regenerator-runtime";
axios.defaults.baseURL = "http://localhost:3000";

export default {
  events() {
    return {
      getEvents: async () => await axios.get("/events"),
      addEvent: async (event) => {
        await axios.post("/events/add", (event));
      },
      closeEvent: async (id) => {
        await axios.patch(`/events/${id}`);
      },
    };
  },
  eventTypes() {
    return {
      getEventTypes: async () => await axios.get("/eventTypes"),
      getEventTypeId: async (id) => await axios.get(`/eventTypes/${id}`),
    };
  },
  weapons() {
    return {
      getWeaponsTypes: async () => axios.get("/weaponTypes"),
    };
  },
  sectors() {
    return {
      getRegionalBrigade: async () => axios.get("/regionalBrigade"),
    };
  },
};
