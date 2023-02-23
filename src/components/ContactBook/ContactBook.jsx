import { ContactForm } from "../ContactForm/ContactForm.jsx";
import { Filter } from "../Filter/Filter.jsx";
import { ContactList } from "../ContactList/ContactList.jsx";
import { UserMenu } from "components/UserMenu/UserMenu.jsx";
import css from "./ContactBook.module.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getContactsThunk } from "redux/contacts-thunk.js";

export const ContactBook = () => {  
  const selectContacts = useSelector((state) => {
    return state.contacts.contacts.items;
  });
   
  const selectFilter = useSelector((state) => state.contacts.filter);  
  const selectToken = useSelector((state) => state.users.token);  
  const dispatch = useDispatch(); 
  
  useEffect(() => {
    if (selectToken === null){
      return;
    }
    dispatch(getContactsThunk());
  }, [selectToken, dispatch]);
  
 function  filterContact(){      
    return selectContacts.filter(contact=>contact.name.toLowerCase().includes(selectFilter.toLowerCase()));      
 }

  return (
      <div className={css.container}>  
        <UserMenu />  
        <ContactForm title='Phonebook'/>      
        <Filter title='Contacts'/>            
        <ContactList list={filterContact()}/>
      </div>
    );
 
};


