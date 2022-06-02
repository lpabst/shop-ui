import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export async function getHomePageProducts() {
  const response = await axios.get("/products/recent");
  return response.data.data;
}
