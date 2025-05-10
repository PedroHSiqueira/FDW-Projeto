import { User } from "@supabase/supabase-js";
import { createContext, useContext, useState } from "react";

interface AuthContextProps {
  user: User | null;
  setAuth: (authUser: User | null) => void;
  getAuth: () => User | null;
}

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [user, setUser] = useState<User | null>(null);

  function setAuth(authUser: User | null) {
    setUser(authUser);
  };

  function getAuth() {
    return user;
  }

  return (
    <AuthContext.Provider value={{ user, setAuth, getAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

