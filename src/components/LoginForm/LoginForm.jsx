import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import css from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";
//import { addContactThunk } from "../../redux/contacts-thunk";


export const LoginForm = ({title, type}) => {  
    const [name, setName] = useState(""); 
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const onChange = (e)=>{
        e.preventDefault();
        const {name,value} = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "email":
                setEmail(value);
                break;
            default:
                break;
        }    
       
    };
    const onSubmitLocal = (evt)=>{  
        evt.preventDefault();          
        const user = {email, password, name}; 
        setPassword("");    
        setEmail("");       
       // dispatch(addContactThunk(newContact));                     
    };
    const handleClickSignUp = ()=>{ 
        navigate("/register", { replace: true });
    } 
    const handleClickButton = ()=>{ 
        if (type !== "Join") {
            return;
        }
        navigate("/contacts", { replace: true });
    } 
  
    return (
        <div className={css.container}>
            <form onSubmit={onSubmitLocal} className={css.loginForm} action="">
                <h1 className={css.login__header}>{title}</h1> 
                {type === "Join" ? 
                <div className={css.loginForm__item}>
                    <label className={css.loginForm__label} htmlFor="inputName">Name</label>
                    <input 
                        onChange={onChange}
                        value={name}
                        className={css.loginForm__input}
                        type="text"
                        name="name"
                        id="inputName"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    /> 
                </div> 
                : <></> }              
                <div className={css.loginForm__item}>
                    <label className={css.loginForm__label} htmlFor="inputPhone">Email </label>
                    <input
                        onChange={onChange}
                        value={email}
                        className={css.loginForm__input}
                        type="email"
                        id="inputEmail"
                        name="email"                  
                        required
                    />
                </div>
                <div className={css.loginForm__item}>
                    <label className={css.loginForm__label} htmlFor="inputName">Password</label>
                    <input 
                        onChange={onChange}
                        value={password}
                        className={css.loginForm__input}
                        type="text"
                        name="password"
                        id="inputPassword" 
                        required
                    />                
                </div> 
                <button onClick={handleClickButton} className={css.loginForm__btn} type="submit">{type}</button>   
                {type === "Login" ? <button onClick={handleClickSignUp} className={css.loginForm__commentSignUp} type="button"> Don't have account? Join</button> : <></>}                                                                                                                                                      
            </form>
        </div>
    )    
}

LoginForm.propTypes = {  
    title: PropTypes.string, 
    type: PropTypes.string,  
};