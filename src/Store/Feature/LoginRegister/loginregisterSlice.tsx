import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import {  usergetall, userregister } from "./useraction";

  
const initialStateValue= {
    user: null,
    loading: false,
    error: null ,
    isLoggedIn: false,
    isAuthenticated: false,


}

export const LoginregisterSlice = createSlice({
    name: 'User',
    initialState: initialStateValue,
    reducers: {
        loginsucces: (state, action) => {
            state.user = action.payload
            state.loading = false;
            state.error = null ;
            state.isLoggedIn = false;
            state.isAuthenticated = true;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userregister.pending, (state, action) => {
            state.loading = true,
             state.error = null

        }),
        builder.addCase(userregister.fulfilled, (state, action) => {
            state.loading = false,
            state.user = action.payload;

        }),
        builder.addCase(userregister.rejected, (state, action:any) => {
            state.loading = false,
            state.error = action.error.message;
            console.error('Registration rejected:', action.error);

        })
        builder.addCase(usergetall.pending, (state, action) => {
            state.loading = true,
             state.error = null

        }),
        builder.addCase(usergetall.fulfilled, (state, action) => {
            state.loading = false,
            state.user = action.payload;

        }),
        builder.addCase(usergetall.rejected, (state, action:any) => {
            state.loading = false,
            state.error = action.error.message;
            console.error('Registration rejected:', action.error);

        })
      
    }
})


export const LoginRegisterreducer = LoginregisterSlice.reducer
export const { loginsucces } = LoginregisterSlice.actions