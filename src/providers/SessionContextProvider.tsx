import { useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "@/lib/types/user";
import SessionContext from "@/context/SessionContext";

interface SessionContextProviderProps { 
  children: React.ReactNode
};

const SessionContextProvider: React.FC<SessionContextProviderProps> = ({ children }) => {
  const history = useHistory();

  const [ user, setUser ] = useState<User>({
    id: 0,
    name: "",
    email: "",
    type: "C", // Default type as Client
    initials: "",
    isLogin: false,
  });

  const login = (user: User) => {
    setUser({
      id: user.id,
      name: user.name,
      email: user.email,
      type: user.type || "C", // Default to Client if type is not provided
      initials: user.initials,
      isLogin: true,
    });
  }

  const logout = () => {
    setUser({
      id: 0,
      name: "",
      email: "",
      type: "C", // Reset to default Client type
      initials: "",
      isLogin: false,
    });
  };

  return (
    <SessionContext.Provider value={{ user, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;