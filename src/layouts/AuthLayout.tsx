import React from 'react';
import RootLayout from './RootLayout';
import { IonContent } from '@ionic/react';

type Props = { children: React.ReactNode };

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <RootLayout title="Canchas JA - Auth">
      <IonContent>
        <div style={{ display: 'flex', minHeight: '60vh', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <div style={{ width: '100%', maxWidth: 420 }}>{children}</div>
        </div>
      </IonContent>
    </RootLayout>
  );
};

export default AuthLayout;
