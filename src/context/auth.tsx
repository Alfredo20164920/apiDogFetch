/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { IAuthContext, ILogin } from '../types/index';
import { api } from '../API/index';

export const AuthContext = createContext<IAuthContext>({user: null, login: () => {}, logout: () => {}});

export const AuthContextProvider = ({children}: any) => {

  const [user, setUser] = useState(() => {
    const userProfle = localStorage.getItem("userProfile");
    if (userProfle) {
      const res = JSON.parse(userProfle);
      return res;
    }
    return null;
  });

  const navigate = useNavigate();

  const login = async (payload: ILogin) => {
    const storage = {
      200: 'ok',
      createAt: new Date()
    };
    await api.post("/auth/login", payload, {withCredentials: true});
    localStorage.setItem("userProfile", JSON.stringify(storage));
    setUser(storage)
    navigate('/');
  }

  const logout = async () => {
    await api.post('/auth/logout', null, {withCredentials: true})
    localStorage.removeItem('userProfile');
    navigate('/login');
  }

  return (
    <>
      <AuthContext.Provider value={{user, login, logout}}>
        {children}
      </AuthContext.Provider>
    </>
  )


}

export default AuthContext;