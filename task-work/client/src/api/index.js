import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });

// const url = `http://localhost:5000/photo`;

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchData = () => API.get("/photo");

export const createData = (newData) => API.post("/photo", newData);

export const updateData = (urlId, data) => API.put(`/photo/${urlId}`, data);

export const deleteData = (urlId) => API.delete(`/photo/${urlId}`);

export const loginUser = (formData) => API.post("/user/login", formData);

export const registerUser = (formData) => API.post("/user/register", formData);
