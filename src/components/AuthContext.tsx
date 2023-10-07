import { createContext, useContext, ReactNode, useState } from "react";
import JsonUsers from "../services/JsonUsers";
import AuthInterface from "../interfaces/AuthInterface";

const AuthContext = createContext<AuthInterface | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    const user = await JsonUsers.loadUsers(username);
    if (user && user.pwd === password) {
      setIsAuthenticated(true);
      return true;
    } else {
      setIsAuthenticated(false);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useAuth doit être utilisé à l'intérieur d'un AuthProvider"
    );
  }
  return context;
};
