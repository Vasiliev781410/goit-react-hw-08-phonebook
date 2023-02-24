import { createAsyncThunk } from "@reduxjs/toolkit";
//import { apiContacts } from "../api/axiosInstances.js";
import { logOutService, loginUser, signUpUser, refreshUser, token} from '../api/apiUsers.js';

export const signUpUserThunk = createAsyncThunk(
  "users/signUpUser",
  async (contact, { rejectWithValue, dispatch }) => {
    try {
      const data = await signUpUser(contact);
      token.set(data.token);
      console.log("!!!!",data.token);
      return data;    
    } catch {
        console.log("!!!!");
      return rejectWithValue();
    }
  }
);

export const loginUserThunk = createAsyncThunk(
    "users/loginUser",
    async (contact, { rejectWithValue, dispatch }) => {
      try {
        const data = await loginUser(contact);
        token.set(data.token);
        console.log("!!!!",data.token);
        return data;    
      } catch {
        return rejectWithValue();
      }
    }
  );

  export const logoutUserThunk = createAsyncThunk(
    "users/logoutUser",
    async (contact, { rejectWithValue, dispatch }) => {
      try {
        await logOutService();
        token.unSet();
        console.log("logout ");
        //return data;    
      } catch {
        return rejectWithValue();
      }
    }
  );

  export const refreshUserThunk = createAsyncThunk(
    "users/refreshUser",
    async (_, { rejectWithValue, getState }) => {
      try {
        console.log('getState().users.token: ',getState().users.token);
        const savedToken = getState().users.token;
        if (!savedToken) {
          return rejectWithValue("there is no token");
        }
        token.set(savedToken);
        const data = await refreshUser();
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
