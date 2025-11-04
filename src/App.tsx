import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Switch } from "react-router-dom";

import "@ionic/react/css/core.css";
// import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * https://ionicframework.com/docs/theming/dark-mode
*/

/* import "@ionic/react/css/palettes/dark.always.css"; */
// import "@ionic/react/css/palettes/dark.class.css";
// import "@ionic/react/css/palettes/dark.system.css";

import "@/theme/variables.css";
import '@/theme/tailwind.css';

import "@/globals.css";

import DefaultLayout from "@/layouts/DefaultLayout";
import AuthLayout from "@/layouts/AuthLayout";

import NotFound from "@/pages/global/NotFound";

import HomePage from "@/pages/default";
import ProductPage from "@/pages/default/product";
import ProfilePage from "@/pages/default/user/profile";

import LoginPage from "@/pages/auth/login";
import SigninPage from "@/pages/auth/signin";

setupIonicReact({
  mode: "md"
});

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonRouterOutlet id="main">
            <Switch>
              {/* Default layout */}
              <Route exact path="/">
                <DefaultLayout>
                  <HomePage />
                </DefaultLayout>
              </Route>

              <Route exact path="/product">
                <DefaultLayout>
                  <ProductPage />
                </DefaultLayout>
              </Route>

              <Route exact path="/product/:id">
                <DefaultLayout>
                  <ProductPage />
                </DefaultLayout>
              </Route>

              <Route exact path="/user/profile">
                <DefaultLayout>
                  <ProfilePage />
                </DefaultLayout>
              </Route>

              {/* Auth layout */}
              <Route exact path="/login">
                <AuthLayout>
                  <LoginPage />
                </AuthLayout>
              </Route>

              <Route exact path="/signin">
                <AuthLayout>
                  <SigninPage />
                </AuthLayout>
              </Route>

              {/* Catch all route for 404 */}
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
