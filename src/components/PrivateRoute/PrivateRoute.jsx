import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectToken } from "../../redux/users-selector";
import { Suspense } from "react";

export const PrivateRoute = () => {
  const token = useSelector(selectToken);
            
  return token ? <Suspense fallback={<div>Loading...</div>}> <Outlet /> </Suspense> : <Navigate to={"/login"} />;
};
