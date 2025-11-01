import { Toaster } from "react-hot-toast";

import SessionContextProvider from "@/providers/SessionContextProvider";
import ThemeContextProvider from "@/providers/ThemeContextProvider";

interface ContextProviderProps { 
  children: React.ReactNode
};

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  return (
    <SessionContextProvider>
      <ThemeContextProvider>
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
        {children}
      </ThemeContextProvider>
    </SessionContextProvider>
  );
};

export default ContextProvider;