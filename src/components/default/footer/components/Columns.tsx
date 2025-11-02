import { IonRouterLink } from "@ionic/react";

import { useTranslation } from 'react-i18next';

const Columns = () => {
  const { t } = useTranslation();
  const text = (key: string) => t(`Component.Default.Footer.Columns.${key}`);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Suporte */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">{text("Support.Title")}</h3>
        <ul className="space-y-3 text-sm text-brand-text-secondary">
          <li>
            <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">{text("Support.Help")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">{text("Support.Security")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">{text("Support.Cancel")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">{text("Support.Accessibility")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">{text("Support.Report")}</IonRouterLink>
          </li>
        </ul>
      </div>

      {/* Comunidade */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">{text("Community.Title")}</h3>
        <ul className="space-y-3 text-sm text-brand-text-secondary">
          <li>
            <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">{text("Community.Community1")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">{text("Community.Community2")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">{text("Community.Community3")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">{text("Community.Community4")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">{text("Community.Others")}</IonRouterLink>
          </li>
        </ul>
      </div>

      {/* Hospedagem */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">{text("Hosting.Title")}</h3>
        <ul className="space-y-3 text-sm text-brand-text-secondary">
          <li>
            <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">{text("Hosting.Announce")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">{text("Hosting.Protection")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">{text("Hosting.Resources")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">{text("Hosting.Security")}</IonRouterLink>
          </li>
        </ul>
      </div>

      {/* Sobre */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">{text("About.Title")}</h3>
        <ul className="space-y-3 text-sm text-brand-text-secondary">
          <li>
            <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">{text("About.AboutUs")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">{text("About.News")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">{text("About.Functionality")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">{text("About.Careers")}</IonRouterLink>
          </li>
          <li>
            <IonRouterLink routerLink="#" className="text-brand-text-secondary hover:text-brand-primary hover:underline">{text("About.Investors")}</IonRouterLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Columns;
