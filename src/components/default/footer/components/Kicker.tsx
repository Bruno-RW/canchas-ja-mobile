import { IonRouterLink, IonImg } from "@ionic/react";
import { useTranslation } from 'react-i18next';

import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";

const Kicker = () => {
  const { t } = useTranslation();
  const text = (key: string) => t(`Component.Default.Footer.Kicker.${key}`);

  return (
    <div className="flex flex-col justify-between items-start md:items-center gap-y-4 text-brand-text-secondary">
      {/* Left side - Copyright and links */}
      <div className="flex flex-wrap items-center justify-center gap-x-1 text-sm">
        <span>{text("Copyright")}</span>
        <LuDot className="w-3" />

        <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">
          {text("Privacy")}
        </IonRouterLink>
        <LuDot className="w-3" />

        <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">
          {text("Terms")}
        </IonRouterLink>
        <LuDot className="w-3" />

        <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">
          {text("Contact")}
        </IonRouterLink>
      </div>

      {/* Right side - Language, currency and social */}
      <div className="flex items-center justify-between w-full gap-x-16">

        <div className="flex items-center gap-x-2 text-sm">
          <IonRouterLink routerLink="#">
            <span className="flex items-center gap-x-1 text-brand-text-secondary hover:text-brand-primary">
              <IonImg src="/icons/action/language.svg" alt="Language icon" className="shrink-0 w-8" />
              <p className="font-medium underline underline-offset-[3px]">{text("Language")}</p>
            </span>
          </IonRouterLink>

          <IonRouterLink routerLink="#">
            <span className="flex items-center text-brand-text-secondary hover:text-brand-primary">
              <IonImg src="/icons/editor/attach_money.svg" alt="Currency icon" className="shrink-0 w-8" />
              <p className="font-medium underline underline-offset-[3px]">{text("Currency")}</p>
            </span>
          </IonRouterLink>
        </div>

        <div className="flex items-center gap-x-4">
          <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary" children={<FaFacebook size={22} />} />
          <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary" children={<FaXTwitter size={22} />} />
          <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary" children={<FaInstagram size={22} />} />
        </div>
      </div>
    </div>
  );
};

export default Kicker;
