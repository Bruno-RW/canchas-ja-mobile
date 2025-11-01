import React from 'react';
import { IonCard, IonCardContent, IonButton, IonInput } from '@ionic/react';

const LoginPage: React.FC = () => {
  return (
    <IonCard>
      <IonCardContent>
        <h2>Login</h2>
        <IonInput placeholder="Email" />
        <IonInput type="password" placeholder="Password" />
        <IonButton expand="block" style={{ marginTop: 12 }}>Sign in</IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default LoginPage;
