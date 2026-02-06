import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const login = async (user) => {
  const response = await axios.post(API_URL + "login", user);
  return response.data;
};

export const register = async (user) => {
  const response = await axios.post(API_URL + "register", user);
  return response.data;
};
