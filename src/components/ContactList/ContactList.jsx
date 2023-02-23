import { ContactItem } from "../ContactItem/ContactItem.jsx";
import PropTypes from 'prop-types';
import css from "./ContactList.module.css";

export const ContactList = ({list})=> (
    <ul className={css.contactList}>
        {list.map(contact => <ContactItem key={contact.id} contact={contact}/>)}       
    </ul>
);

ContactList.propTypes = {  
    list: PropTypes.array,  
};

