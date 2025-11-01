import React from 'react';
import { IonApp, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

type Props = {
  title?: string;
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ title = 'Canchas JA', children }) => {
  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {children}
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default RootLayout;
