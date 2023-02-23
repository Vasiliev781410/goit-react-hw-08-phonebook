import css from "./ContactItem.module.css";
import PropTypes from 'prop-types';
import { useDispatch} from "react-redux";
import { deleteContactThunk, getContactsThunk } from "../../redux/contacts-thunk";

export const ContactItem = ({contact})=>{
    const dispatch = useDispatch();    
    const onDeleteContact = (e) => {
        const {id} = e.target;
        dispatch(deleteContactThunk(id))
        .unwrap()
        .then(() => dispatch(getContactsThunk()));    
    };

    return (
    <li className={css.contactItem}>{[contact.name+": "]}
        <div className={css.contactItem__phoneContainer}>
            <span className={css.contactItem__phone}>{contact.phone}</span>
            <button className={css.deleteContactBtn} onClick={onDeleteContact} type="button" id={contact.id}>Delete</button>
        </div>
    </li>   
    )
};

ContactItem.propTypes = {  
    contact: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,}),
  };
