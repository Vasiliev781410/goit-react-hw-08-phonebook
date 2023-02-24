import css from "./UserMenu.module.css";
//import { useNavigate } from "react-router-dom";
import { token } from "api/apiUsers.js";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserThunk } from "../../redux/users-thunk";

export const UserMenu = () => {
    //const navigate = useNavigate();
    const selectUserEmail = useSelector((state) => state.users.user.email);
    const dispatch = useDispatch();
         
    const handleClick = () => {      
        dispatch(logoutUserThunk());            
    };
    return (
        <div className={css.userMenu}>
            <p className={css.userMenu__login}>{selectUserEmail}</p>
            <button onClick={handleClick} className={css.userMenu__logoutBtn} type="button">Logout{" >"}</button>
        </div>
    )     
}