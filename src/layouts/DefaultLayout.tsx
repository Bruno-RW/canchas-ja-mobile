import { IonContent, IonGrid, IonRow, IonCol } from "@ionic/react";

import Navbar from "@/components/default/navbar/Navbar";
import Footer from "@/components/default/footer/Footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol size="12" sizeMd="3">
            <Navbar />
          </IonCol>

          <IonCol size="12" sizeMd="9" className="px-5">
            {children}
          </IonCol>

          <IonCol>
            <Footer />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default DefaultLayout;
