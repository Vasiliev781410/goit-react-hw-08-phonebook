import { createSlice } from "@reduxjs/toolkit";
import { signUpUserThunk, loginUserThunk } from "./users-thunk";

const handleUserPending = (state) => {
  state.isLoading = true;
};
const handleUserRejected = (state, { payload }) => {
  state.error = payload;
};

const initialState = {
    token: null,
    isLoading: false,
    error: null,
    user: null,
};

const usersSlice = createSlice({
    name: "users",  
    initialState,
    reducers: {
        logOutAction: () => initialState,
    },  
    extraReducers: (builder) => {
        builder
           .addCase(signUpUserThunk.pending, handleUserPending)
           .addCase(loginUserThunk.pending, handleUserPending)    
          .addCase(signUpUserThunk.rejected, handleUserRejected)   
          .addCase(loginUserThunk.rejected, handleUserRejected)
          .addCase(signUpUserThunk.fulfilled, (state, { payload }) => {
            state.token = payload.token;
            state.isLoading = false;
            state.user= payload;
          })
          .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
            state.token = payload.token;
            state.isLoading = false;
            state.user = payload;
            console.log('payload: ',payload);
          });
      },
});

export const usersReducer = usersSlice.reducer;
export const {logOutAction} = usersSlice.actions;
