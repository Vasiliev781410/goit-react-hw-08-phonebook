import { apiContacts } from "./axiosInstances.js";

export const getContacts = async () => {  
  console.log("Authorization get: ",apiContacts.defaults.headers.Authorization);
  const { data } = await apiContacts.get("contacts");
  return data;
};

export const addContact = async (newContact) => {
  const { data } = await apiContacts.post("contacts",newContact);
  return data;
};

export const deleteContact = async (id) => {
  const { data } = await apiContacts.delete(`contacts/${id}`);
  return data;
};
