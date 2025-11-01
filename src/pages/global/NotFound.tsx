import { IonPage, IonContent, IonButton } from "@ionic/react";
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
  const { t } = useTranslation("NotFound");

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="flex items-center justify-center min-h-full">
          <div className="flex flex-col items-center justify-center gap-y-2 py-10 px-12 sm:px-20 lg:py-16 lg:px-28">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl mb-0">404</h1>
            <h2 className="text-xl sm:text-2xl mb-5">{t("Title")}</h2>

            <IonButton className="w-full mt-2" routerLink="/" routerDirection="root">
              {t("Button")}
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NotFound;