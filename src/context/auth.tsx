/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { IAuthContext, ILogin } from '../types/index';
import { api } from '../API/index';

export const AuthContext = createContext<IAuthContext>({user: null, login: () => {}});

export const AuthContextProvider = ({children}: any) => {

  const [user, setUser] = useState(() => {
    const userProfle = localStorage.getItem("userProfile");
    if (userProfle) {
      return JSON.parse(userProfle);
    }
    return null;
  });

  const navigate = useNavigate();

  const login = async (payload: ILogin) => {
    await api.post("/auth/login", payload, {withCredentials: true});
    localStorage.setItem("userProfile", JSON.stringify({200: 'ok'}));
    setUser({200: 'ok'})
    navigate('/');
  }

  return (
    <>
      <AuthContext.Provider value={{user, login}}>
        {children}
      </AuthContext.Provider>
    </>
  )


}

export default AuthContext;