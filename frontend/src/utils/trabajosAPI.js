import axios from "axios";

const trabajosAPI = axios.create({
  baseURL: "http://6e70-2800-200-e440-114f1-7d20-205e-61cb-e5e3.ngrok.io/",
});

export default trabajosAPI;
