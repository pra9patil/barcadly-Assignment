import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({isAdminLoggedIn , children}) => {
    if(isAdminLoggedIn){
      return children;
    }
    else{
      return <Navigate to="/admin" replace />;
    }
};

export default PrivateRoute;
