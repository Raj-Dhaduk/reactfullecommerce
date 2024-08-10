import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWIwZWJjNDQ4MjM5M2M5NTMxNDczYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyMzE4NTY3MSwiZXhwIjoxNzIzNDQ0ODcxfQ.qIgy-ghbIhsl085awsYOAjZZ3XjlwaeL-pNYGZA_IdY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
