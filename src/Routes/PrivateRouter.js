import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import loader from "../assets/images/loading.gif";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <img src={loader} alt="" />
      </div>
    );
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
