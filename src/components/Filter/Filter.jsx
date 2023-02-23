import css from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { setFilterAction } from "../../redux/contacts-slice";

export const Filter = ({title})=>{
    const dispatch = useDispatch();
    const selectFilter = useSelector((state) => state.contacts.filter);
    const onChange = (e)=>{
        const {value} = e.target; 
        dispatch(setFilterAction(value));   
    }
    return (
        <div className={css.filterContainer}>
            <h2 className={css.filter__title}>{title}</h2>
            <label className={css.filter__label} htmlFor="filterInput">Find contact by name</label>
            <input onChange={onChange} className={css.filter__input} id="filterInput" type="text" value={selectFilter}/>
        </div>
    )
}

Filter.propTypes = {  
    title: PropTypes.string,  
};


