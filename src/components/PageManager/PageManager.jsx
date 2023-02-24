import { Routes, Route } from "react-router-dom";
import { lazy } from "react";import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { PublicRoute } from "../PublicRoute/PublicRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUserThunk } from '../../redux/users-thunk';

const Home = lazy(() => import("../../pages/Home"));
const Login = lazy(() => import("../../pages/Login"));
const SignUp = lazy(() => import("../../pages/SignUp"));

export const PageManager = () => {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(refreshUserThunk());
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<PublicRoute />}>
                <Route path="/login" element={<Login/>} />                             
                <Route path="/register" element={<SignUp/>} /> 
                <Route path="*" element={<Login/>} />   
            </Route> 
            <Route path="/" element={<PrivateRoute />}>
                <Route path="/contacts" element={<Home/>} /> 
            </Route>                             
        </Routes>                                                           
    )     
}