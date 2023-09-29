import AuthContext from "../context/auth";
import { Navigate } from "react-router-dom";
import { useContext } from 'react';

interface Props {
  children: JSX.Element
}

function PrivateRoute({children}: Props) {
  const {user} = useContext(AuthContext);
  if(!user?.username) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
}

export default PrivateRoute;
