/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from 'react';
import { useNavigate } from "react-router-dom";
import { IAuthContext, ILogin } from '../types/index';
import { api } from '../API/index';
import { LOCAL_STORAGE_KEYS, useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext<IAuthContext>({user: null, login: () => {}, logout: () => {}});

export const AuthContextProvider = ({children}: any) => {

  const [storedValue, setValue, removeValue] = useLocalStorage(LOCAL_STORAGE_KEYS.AUTH_PROFILE, {});
  const navigate = useNavigate();

  const login = async (payload: ILogin) => {
    const storage = {
      200: 'ok',
      user: payload.name,
      createAt: new Date()
    };
    await api.post("/auth/login", payload, {withCredentials: true});
    setValue(storage);
    navigate('/');
  }

  const logout = async () => {
    await api.post('/auth/logout', null, {withCredentials: true})
    removeValue();
    navigate('/login');
  }

  return (
    <>
      <AuthContext.Provider value={{user: storedValue, login, logout}}>
        {children}
      </AuthContext.Provider>
    </>
  )


}

export default AuthContext;