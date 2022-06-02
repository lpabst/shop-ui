import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export async function login({ email, password }) {
  const response = await axios.post("/login", {
    email,
    password,
  });
  const { idToken, accessToken, refreshToken } = response.data;

  let userData = {};
  try {
    const idTokenPayload = idToken.split(".")[1];
    userData = JSON.parse(atob(idTokenPayload));
  } catch (e) {}

  const userSession = {
    accessToken,
    refreshToken,
    idToken,
    id: userData.userId,
    email: userData.email,
    firstName: userData.firstName,
    lastName: userData.lastName,
  };
  sessionStorage.setItem("userSession", JSON.stringify(userSession));
  return userSession;
}

export async function logout() {
  sessionStorage.removeItem("userSession");
}

export async function createAccount({ email, password, firstName, lastName }) {
  return axios.post("/user", {
    email,
    password,
    firstName,
    lastName,
  });
}
