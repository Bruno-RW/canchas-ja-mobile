import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/react';
import { useParams, useLocation } from 'react-router-dom';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>
            {id ? 'Product Details' : 'Products'}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {id ? (
          <>
            <h2>Product ID: {id}</h2>
            <p>Product details will be displayed here.</p>
          </>
        ) : (
          <div>
            <h2>Products</h2>
            <p>Products list will be displayed here.</p>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ProductPage;
