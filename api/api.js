import axios from 'axios';
import { Alert } from 'bootstrap';
import { async } from 'regenerator-runtime';
axios.defaults.baseURL = 'http://localhost:3000';

export default {
  events() {
    return {
      getEvents: async () => await axios.get("/events"),
      addEvent: async (event) => {
        await axios.post("/events/add", JSON.stringify(event));
      },
      getFilterEvents: async (filterConditions) => {
        alert(typeof filterConditions);
        const params = new URLSearchParams(filterConditions);
        await axios.get(`/events/search/${filterConditions}`);
        // {
        //   body: {
        //     conditions: filterConditions
        //   }
        // }
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
