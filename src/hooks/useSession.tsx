import { useContext } from "react";

import SessionContext from "@/context/SessionContext";

const useSession = () => {
  const context = useContext(SessionContext);

  if (context === null) {
    throw new Error("useSession must be used within a SessionContextProvider");
  }

  return context;
};

export default useSession;