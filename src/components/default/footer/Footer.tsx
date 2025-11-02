import { IonFooter } from "@ionic/react";

import Separator from "@/components/ui/custom/Separator";

import Columns from "@/components/default/footer/components/Columns";
import Kicker from "@/components/default/footer/components/Kicker";

const Footer = () => {
  return (
    <IonFooter className="bottom-0 z-50 flex flex-col w-full px-5 pt-10 pb-5 space-y-8 bg-brand-bg-secondary">
      <Columns />
      <Separator className="bg-gray-200" />
      <Kicker />
    </IonFooter>
  );
};

export default Footer;
