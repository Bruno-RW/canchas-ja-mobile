import { IonRouterLink, IonImg } from "@ionic/react";
import { useTranslation } from 'react-i18next';

import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";

import LanguageSVG from "@/public/icons/action/language.svg";
import MoneySVG from "@/public/icons/editor/attach_money.svg";

const Kicker = () => {
  const { t } = useTranslation("Component.Default.Footer.Kicker");

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-4 md:gap-y-0 text-brand-text-secondary">
      {/* Left side - Copyright and links */}
      <div className="flex flex-wrap items-center justify-center gap-x-1 text-sm">
        <span>{t("Copyright")}</span>
        <LuDot className="w-3" />

        <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">
          {t("Privacy")}
        </IonRouterLink>
        <LuDot className="w-3" />

        <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">
          {t("Terms")}
        </IonRouterLink>
        <LuDot className="w-3" />

        <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">
          {t("Contact")}
        </IonRouterLink>
      </div>

      {/* Right side - Language, currency and social */}
      <div className="flex items-center gap-x-16">
        <div className="flex items-center gap-x-2 text-sm">
          <IonRouterLink routerLink="#" className="flex items-center gap-x-1 hover:text-brand-primary">
            <IonImg src={LanguageSVG} alt="Language icon" />
            <span className="font-medium underline underline-offset-[3px]">{t("Language")}</span>
          </IonRouterLink>

          <IonRouterLink routerLink="#" className="flex items-center hover:text-brand-primary">
            <IonImg src={MoneySVG} alt="Language icon" />
            <span className="font-medium underline underline-offset-[3px]">{t("Currency")}</span>
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
