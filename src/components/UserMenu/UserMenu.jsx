import css from "./UserMenu.module.css";
import { useNavigate } from "react-router-dom";

export const UserMenu = () => {
    const navigate = useNavigate();
    const handleClick = () => {  
        navigate("/login", { replace: false });
    };
    return (
        <div className={css.userMenu}>
            <p className={css.userMenu__login}>mango@mail.com</p>
            <button onClick={handleClick} className={css.userMenu__logoutBtn} type="button">Logout{" >"}</button>
        </div>
    )     
}