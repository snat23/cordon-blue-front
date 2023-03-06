import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

export default {

    filterEvents: async (filterConditions) => {
        await axios.get('/events/search', JSON.stringify(filterConditions));
      },
};
