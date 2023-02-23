import { Routes, Route } from "react-router-dom";
import { Home } from "pages/Home.jsx";
import { SignUp } from "pages/SignUp.jsx";
import { Login } from "pages/Login.jsx";


export const PageManager = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>} />             
            <Route path="/register" element={<SignUp/>} />  
            <Route path="/contacts" element={<Home/>} /> 
            <Route path="*" element={<Login/>} />                    
        </Routes>                                                           
    )     
}