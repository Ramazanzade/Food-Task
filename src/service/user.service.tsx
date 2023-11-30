import axios , {AxiosRequestConfig} from "axios";
import authHeader from "./auth-header";

const API_URL = "http://restapi.adequateshop.com/api/authaccount/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = async () => {
    const headers = await authHeader();
    const config: AxiosRequestConfig = { headers };
    return axios.get(API_URL + "user", config);
  };



const userService = {
  getPublicContent,
  getUserBoard,
};

export default userService