import React from 'react';
import RootLayout from './RootLayout';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';

type Props = { children: React.ReactNode };

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <RootLayout>
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
    </RootLayout>
  );
};

export default DefaultLayout;
