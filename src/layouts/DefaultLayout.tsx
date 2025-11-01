import { IonContent, IonGrid, IonRow, IonCol } from "@ionic/react";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol size="12" sizeMd="3">
            {/* Placeholder sidebar area */}
            <div style={{ padding: 16 }}>Sidebar</div>
          </IonCol>
          <IonCol size="12" sizeMd="9">
            <div style={{ padding: 16 }}>{children}</div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default DefaultLayout;
