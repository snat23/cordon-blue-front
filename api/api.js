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
      getEventTypeById: async (id) => await axios.get(`/eventTypes/id/${id}`),
      getEventTypeByName: async (typeName) => await axios.get(`/eventTypes/name/${typeName}`),
    };
  },
  weapons() {
    return {
      getWeaponsTypes: async () => axios.get("/weaponTypes"),
      getWeaponByName: async (weaponName) => await axios.get(`/weaponTypes/name/${weaponName}`),
    };
  },
  sectors() {
    return {
      getRegionalBrigade: async () => axios.get("/regionalBrigade"),
      getSectorByName: async (sectorName) => await axios.get(`/regionalBrigade/name/${sectorName}`),
    };
  },
  users() {
    return {
      getUsers: async () => axios.get("/users"),
    };
  },
};
