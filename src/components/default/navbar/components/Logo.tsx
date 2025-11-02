import { IonRouterLink } from "@ionic/react";

const Logo = () => {
  return (
    <IonRouterLink routerLink="/" className="flex items-center space-x-2">
      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-brand-primary">
        <path
          d="M12 2L2 7L12 12L22 7L12 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 17L12 22L22 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12L12 17L22 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-bold text-xl text-brand-primary">Canchas Já</span>
    </IonRouterLink>
  );
};

export default Logo;
