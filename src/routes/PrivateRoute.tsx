/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from "../context/auth";
import { Navigate } from "react-router-dom";

interface Props {
  children: any
}

function PrivateRoute({children}: Props) {
  const isAuthenticated = useAuth();

  if(!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default PrivateRoute;
