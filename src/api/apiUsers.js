import {  apiContacts, apiUsers } from "./axiosInstances.js";

export const token = {
  set: (token) => {    
    apiContacts.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unSet: () => {
    apiContacts.defaults.headers.Authorization = "";
  },
};

export const signUpUser = async (newContact) => {
  const { data } = await apiUsers.post("/signup",newContact);
  return data;
};

export const loginUser = async (newContact) => {
  const { data } = await apiUsers.post("/login",newContact);
  return data;
};

export const logOutService = () => {
   return apiContacts.post("users/logout");
};

export const refreshUser = async () => {
  const { data } = await apiContacts.get("users/current");
  return data;
};

