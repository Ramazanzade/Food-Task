import axios from "axios";
import { User } from "./user";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://restapi.adequateshop.com/api/authaccount/";

const register = ({username, email, password}:User) => {
  return axios.post(API_URL + "registration", {
    username,
    email,
    password,
  });
};

const login = ({email, password}:User) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        AsyncStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  AsyncStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;