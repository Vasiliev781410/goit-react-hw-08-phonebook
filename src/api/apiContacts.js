import axios from "axios";

export const apiContacts = axios.create({
  baseURL: "https://connections-api.herokuapp.com/contacts",
});

export const token = {
  set: (token) => {
    apiContacts.defaults.headers.Authorization = {token};
    console.log("Authorization 1: ",apiContacts.defaults.headers.Authorization);
  },
  unSet: () => {
    apiContacts.defaults.headers.Authorization = "";
  },
};
export const getContacts = async () => {
  console.log("Authorization get: ",apiContacts.defaults.headers.Authorization);
  const { data } = await apiContacts.get("");
  return data;
};

export const addContact = async (newContact) => {
  const { data } = await apiContacts.post("",newContact);
  return data;
};

export const deleteContact = async (id) => {
  const { data } = await apiContacts.delete(id);
  return data;
};
