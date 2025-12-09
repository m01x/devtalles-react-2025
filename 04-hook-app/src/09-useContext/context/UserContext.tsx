import { createContext, useState, type PropsWithChildren } from "react";
import type { User } from "../data/user-mock.data";





type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';
interface UserContextProps {

    //states
    authStatus:             AuthStatus;
    user:                   User | null;


    //methods
    login:                  (userId: number) => boolean;
    logout:                 ()=> void;
}

export const UserContext = createContext( {} as UserContextProps);

//HOC = High Order Component
export const UserContextProvider = ({ children }: PropsWithChildren) => {

    const [ authStatus, setAuthStatus ] = useState<AuthStatus>('checking');
    const [ user, setUser ] = useState<User | null>(null);

    const handleLogin = (userId: number) => {
      console.log({userId});
      return true;
    }

    const handleLogout = () => {
      console.log('Logout')
    }

  return <UserContext value={{
    authStatus: authStatus,
    user: user,
    login: handleLogin,
    logout: handleLogout
  }}>{ children }</UserContext>
}
