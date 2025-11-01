import { createContext } from "react";

import { User } from "@/lib/types/user";

export type SessionContextType = {
  user: User;
  login: (user: User) => void;
  logout: () => void;
};

const SessionContext = createContext<SessionContextType | null>(null);
export default SessionContext;
