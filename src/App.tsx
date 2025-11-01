import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

import '@/theme/variables.css';

import "@/globals.css";

import DefaultLayout from '@/layouts/DefaultLayout';
import AuthLayout from '@/layouts/AuthLayout';

import NotFound from '@/pages/global/NotFound';

import ProductPage from '@/pages/default/product';
import UserPage from '@/pages/default/user';

import LoginPage from '@/pages/auth/login';
import SigninPage from '@/pages/auth/signin';

import Menu from '@/components/Menu';

setupIonicReact();

const App: React.FC = () => {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />

          <IonRouterOutlet id="main">
            {/* Default area with sidebar */}
            <Route path="/product">
              <DefaultLayout>
                <ProductPage />
              </DefaultLayout>
            </Route>

            <Route path="/user">
              <DefaultLayout>
                <UserPage />
              </DefaultLayout>
            </Route>

            {/* Auth area (login / signin) */}
            <Route path="/login">
              <AuthLayout>
                <LoginPage />
              </AuthLayout>
            </Route>

            <Route path="/signin">
              <AuthLayout>
                <SigninPage />
              </AuthLayout>
            </Route>

            <Route exact path="/">
              <Redirect to="/product" />
            </Route>

            <Route>
              <NotFound />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
