import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "./context/User.Context";
import { Link } from "react-router-dom";

const ProtectedRoute = () => {
  const { isUserVerified } = useUser();
  console.log(isUserVerified);
  if (isUserVerified === null) {
    return (
      <div>
        <h3>UNAUTHORISED</h3>
        <Link to="/">Go back to LOGIN</Link>
      </div>
    );
  }

  return isUserVerified ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
