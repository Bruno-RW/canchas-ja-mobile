import { IonRouterLink } from "@ionic/react";

import { useTranslation } from 'react-i18next';

const Columns = () => {
  const { t } = useTranslation("Component.Default.Footer.Columns");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Suporte */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">{t("Support.Title")}</h3>
        <ul className="space-y-3 text-sm text-brand-text-secondary">
          <li>
            <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">{t("Support.Help")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">{t("Support.Security")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">{t("Support.Cancel")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">{t("Support.Accessibility")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">{t("Support.Report")}</IonRouterLink>
          </li>
        </ul>
      </div>

      {/* Comunidade */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">{t("Community.Title")}</h3>
        <ul className="space-y-3 text-sm text-brand-text-secondary">
          <li>
            <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">{t("Community.Community1")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">{t("Community.Community2")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">{t("Community.Community3")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">{t("Community.Community4")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">{t("Community.Others")}</IonRouterLink>
          </li>
        </ul>
      </div>

      {/* Hospedagem */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">{t("Hosting.Title")}</h3>
        <ul className="space-y-3 text-sm text-brand-text-secondary">
          <li>
            <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">{t("Hosting.Announce")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">{t("Hosting.Protection")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">{t("Hosting.Resources")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">{t("Hosting.Security")}</IonRouterLink>
          </li>
        </ul>
      </div>

      {/* Sobre */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">{t("About.Title")}</h3>
        <ul className="space-y-3 text-sm text-brand-text-secondary">
          <li>
            <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">{t("About.AboutUs")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">{t("About.News")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">{t("About.Functionality")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">{t("About.Careers")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="hover:text-brand-primary hover:underline">{t("About.Investors")}</IonRouterLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Columns;
