import { IonRouterLink, IonImg } from "@ionic/react";
import { useTranslation } from 'react-i18next';

import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";

const Kicker = () => {
  const { t } = useTranslation();
  const text = (key: string) => t(`Component.Default.Footer.Kicker.${key}`);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-4 md:gap-y-0 text-brand-text-secondary">
      {/* Left side - Copyright and links */}
      <div className="flex flex-wrap items-center justify-center gap-x-1 text-sm">
        <span>{text("Copyright")}</span>
        <LuDot className="w-3" />

        <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">
          {text("Privacy")}
        </IonRouterLink>
        <LuDot className="w-3" />

        <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">
          {text("Terms")}
        </IonRouterLink>
        <LuDot className="w-3" />

        <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">
          {text("Contact")}
        </IonRouterLink>
      </div>

      {/* Right side - Language, currency and social */}
      <div className="flex items-center gap-x-16">
        <div className="flex items-center gap-x-2 text-sm">
          <IonRouterLink routerLink="#" className="flex items-center gap-x-1 hover:text-brand-primary">
            <IonImg src="/icons/action/language.svg" alt="Language icon" />
            <span className="font-medium underline underline-offset-[3px]">{text("Language")}</span>
          </IonRouterLink>

          <IonRouterLink routerLink="#" className="flex items-center hover:text-brand-primary">
            <IonImg src="/icons/editor/attach_money.svg" alt="Currency icon" />
            <span className="font-medium underline underline-offset-[3px]">{text("Currency")}</span>
          </IonRouterLink>
        </div>

        <div className="flex items-center gap-x-4">
          <IonRouterLink routerLink="#" className="hover:text-brand-primary" children={<FaFacebook size={22} />} />
          <IonRouterLink routerLink="#" className="hover:text-brand-primary" children={<FaXTwitter size={22} />} />
          <IonRouterLink routerLink="#" className="hover:text-brand-primary" children={<FaInstagram size={22} />} />
        </div>
      </div>
    </div>
  );
};

export default Kicker;
