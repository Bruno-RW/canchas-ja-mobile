import { IonContent } from "@ionic/react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <IonContent className="flex flex-col justify-center gap-y-2 px-6 py-2 w-full h-full">
      {children}
    </IonContent>
  );
};

export default AuthLayout;
