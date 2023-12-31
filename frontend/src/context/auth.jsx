import { useEffect, useState, useContext, createContext } from "react";

export const USER_KEY = '@msystem/user';
export const AuthContext = createContext(null);

export function AuthProvider(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const newUser = localStorage.getItem(USER_KEY);

    if (newUser) {
      setUser(JSON.parse(newUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_KEY);
    }
  }, [user]);

  return (
    <AuthContext.Provider  {...props}
      value={{ user, setUser }} />
  );
}

export function useAuth() {
  return useContext(AuthContext);
}