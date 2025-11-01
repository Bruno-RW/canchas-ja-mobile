import React from 'react';
import { IonCard, IonCardContent, IonButton, IonInput } from '@ionic/react';

const SigninPage: React.FC = () => {
  return (
    <IonCard>
      <IonCardContent>
        <h2>Create account</h2>
        <IonInput placeholder="Name" />
        <IonInput placeholder="Email" />
        <IonInput type="password" placeholder="Password" />
        <IonButton expand="block" style={{ marginTop: 12 }}>Create</IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default SigninPage;
