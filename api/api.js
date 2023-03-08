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
      sendEventToPolygon: async (latitude, longitude) => {
        await axios.put(`/addAlert/${latitude}/${longitude}`);
      },
      sendCloseEventToPolygon: async (latitude, longitude) => {
        await axios.put(`/removeAlert/${latitude}/${longitude}`);
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
      getWeaponById: async (id) => await axios.get(`/weaponTypes/id/${id}`),
      getWeaponByName: async (weaponName) => await axios.get(`/weaponTypes/name/${weaponName}`),
    };
  },
  sectors() {
    return {
      getRegionalBrigade: async () => axios.get("/regionalBrigade"),
      getSectorById: async (id) => await axios.get(`/regionalBrigade/id/${id}`),
      getSectorByName: async (sectorName) => await axios.get(`/regionalBrigade/name/${sectorName}`),
    };
  },
  users() {
    return {
      getUser: async (username, password) => await axios.get(`/users/${username}/${password}`),
    };
  },
};
