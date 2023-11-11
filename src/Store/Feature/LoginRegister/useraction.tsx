import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface userData {
  name:string,
  password:string,
  email:string
}
export const userregister = createAsyncThunk('user/userregister', async (userdata :userData)=>{
    const response = await axios.post(
        "https://food-z1fl.onrender.com/api/user/create-user",
        userdata
  )
  return response.data
})
export const usergetall = createAsyncThunk('user/getall', async(userdata1:any)=>{
    const response = await axios.get(
        "https://food-z1fl.onrender.com/api/user/",
        userdata1
  )
  return response.data
})
// export const userdelete = createAsyncThunk('user/delete', async(userdata)=>{
//     const response = await axios.delete(
//         `https://food-z1fl.onrender.com/api/user/delete/${id}`,
//         userdata
//   )
//   return response.data
// })
// export const userupdate = createAsyncThunk('user/update', async(userdata)=>{
//     const response = await axios.put(
//         `https://food-z1fl.onrender.com/api/user/users/${id}`,
//         userdata
//   )
//   return response.data
// })