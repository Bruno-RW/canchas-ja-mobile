import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";

import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

import "@/theme/variables.css";

import "@/globals.css";

import DefaultLayout from "@/layouts/DefaultLayout";
import AuthLayout from "@/layouts/AuthLayout";

import NotFound from "@/pages/global/NotFound";

import HomePage from "@/pages/default";
import ProductPage from "@/pages/default/product";
import ProfilePage from "@/pages/default/user/profile";

import LoginPage from "@/pages/auth/login";
import SigninPage from "@/pages/auth/signin";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonRouterOutlet id="main">
            {/* Root layout */}
            <Route>
              <NotFound />
            </Route>

            {/* Default layout */}
            <Route exact path="/">
              <DefaultLayout>
                <HomePage />
              </DefaultLayout>
            </Route>

            <Route path="/product">
              <DefaultLayout>
                <ProductPage />
              </DefaultLayout>
            </Route>

            <Route path="/user/profile">
              <DefaultLayout>
                <ProfilePage />
              </DefaultLayout>
            </Route>

            {/* Auth layout */}
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
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
