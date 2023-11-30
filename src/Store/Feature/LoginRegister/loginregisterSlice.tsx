import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
// import {  usergetall, userregister } from "./useraction";
import AuthService from "../../../service/auth.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../../../service/user";
import { Use } from "react-native-svg";
import { setMessage } from "./message";

const getUserFromStorage = async () => {
    try {
      const userString: any = await AsyncStorage.getItem('user');
      return userString ? JSON.parse(userString) : null;
    } catch (error) {
      console.error('Error retrieving user from AsyncStorage:', error);
      return null;
    }
  };
export const register = createAsyncThunk(
    "auth/register",
    async ({ username, email, password }:User, thunkAPI) => {
      try {
        const response = await AuthService.register({username, email, password});
        thunkAPI.dispatch(setMessage(response.data.message));
        return response.data;
      } catch (error:any) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }:User, thunkAPI) => {
      try {
        const data = await AuthService.login({password , email, username:''});
        return { user: data };
      } catch (error:any) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  export const logout = createAsyncThunk("auth/logout", async () => {
    await AuthService.logout();
  });
  
  const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };
  

    const authSlice  = createSlice({
     name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      });
  },
})



const { reducer } = authSlice;
export default reducer;