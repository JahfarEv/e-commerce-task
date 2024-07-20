import axios from "axios";

let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
console.log(baseUrl);

const api = axios.create({
  baseURL: baseUrl,
});
api.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token");
    if (token) {
      request.headers["Authorization"] = `${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;
