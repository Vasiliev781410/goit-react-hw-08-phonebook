import axios from "axios";

export const apiUsers = axios.create({  
  baseURL: "https://connections-api.herokuapp.com/users",
});

export const signUpUser = async (newContact) => {
  const { data } = await apiUsers.post("/signup",newContact);
  return data;
};

export const loginUser = async (newContact) => {
  const { data } = await apiUsers.post("/login",newContact);
  return data;
};

