import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import { users, type User } from "../data/user-mock.data";





type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';
interface UserContextProps {

    //states
    authStatus:             AuthStatus;
    user:                   User | null;
    isAuthenticated:        boolean;

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

      const user = users.find((user => user.id === userId ));

      if(!user){
        console.log(`Usuario no encontrado ${userId}`);
        setUser(null);
        setAuthStatus('not-authenticated');
        return false;
      }

      setUser(user);
      setAuthStatus('authenticated');
      localStorage.setItem('userId', userId.toString());
      return true;

    }

    const handleLogout = () => {
      console.log('Logout...');
      setAuthStatus('not-authenticated');
      setUser(null);
      localStorage.removeItem('userId');
    }

    //La primera vez que montemos el componente, vamos a consultar si hay info local.
    useEffect(()=>{

      const storedUserId = localStorage.getItem('userId');
      if (storedUserId){
        handleLogin( +storedUserId );
      } else {
        setAuthStatus("not-authenticated")
      }
    }, [] );

  return <UserContext value={{
    authStatus: authStatus,
    user: user,
    isAuthenticated: authStatus=== 'authenticated',
    login: handleLogin,
    logout: handleLogout
  }}>{ children }</UserContext>
}
