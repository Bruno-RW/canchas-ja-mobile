import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";

import App from "@/App";

import i18n from "@/i18n/i18n";
import ContextProvider from "@/providers/ContextProvider";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </I18nextProvider>
  </StrictMode>
);
