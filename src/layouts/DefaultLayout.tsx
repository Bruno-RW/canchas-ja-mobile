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

          <IonCol size="12" sizeMd="9" className="pt-8 pb-10 px-5 flex flex-col gap-y-12">
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
