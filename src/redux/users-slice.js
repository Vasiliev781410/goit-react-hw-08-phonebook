import { createSlice } from "@reduxjs/toolkit";
import { signUpUserThunk, loginUserThunk, logoutUserThunk, refreshUserThunk} from "./users-thunk";

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
    extraReducers: (builder) => {
        builder
          .addCase(signUpUserThunk.pending, handleUserPending)
          .addCase(loginUserThunk.pending, handleUserPending) 
          .addCase(refreshUserThunk.pending, handleUserPending)
          .addCase(logoutUserThunk.pending, handleUserPending)    
          .addCase(signUpUserThunk.rejected, handleUserRejected)   
          .addCase(loginUserThunk.rejected, handleUserRejected)
          .addCase(refreshUserThunk.rejected, handleUserRejected)
          .addCase(logoutUserThunk.rejected, handleUserRejected)
          .addCase(signUpUserThunk.fulfilled, (state, { payload }) => {
            state.token = payload.token;
            state.isLoading = false;
            state.user= payload.user;
          })
          .addCase(logoutUserThunk.fulfilled, (state, { payload }) => {         
            state.token = null;
            state.isLoading = false;
            state.error = null;
            state.user = null;
          })
          .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.user = payload;
            console.log('payload: ',payload);
          })
          .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
            state.token = payload.token;
            state.isLoading = false;
            state.user = payload.user;           
          });
      },
});

export const usersReducer = usersSlice.reducer;
//export const {logOutAction} = usersSlice.actions;

//reducers: {
//  logOutAction: () => initialState,
//},  
