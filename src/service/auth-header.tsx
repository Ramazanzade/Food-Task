import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "./user";

export default async function authHeader() {
    const userString = await AsyncStorage.getItem('user');
    const user= JSON.parse(userString || 'null');  
    
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }