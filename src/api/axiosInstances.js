import axios from "axios";

export const apiUsers = axios.create({  
    baseURL: "https://connections-api.herokuapp.com/users",
  });

export const apiContacts = axios.create({
    baseURL: "https://connections-api.herokuapp.com/",
  });
  