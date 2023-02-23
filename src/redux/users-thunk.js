import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, signUpUser} from '../api/apiUsers.js';
import { token } from "api/apiContacts.js";

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
  


