import axios from "axios";

const seguridadAPI = axios.create({
  baseURL: "http://ec1b-181-66-177-15.ngrok.io/api-seguridad/",
});

export default seguridadAPI;
