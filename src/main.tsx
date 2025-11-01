import React from "react";
import { createRoot } from "react-dom/client";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";


import ContextProvider from "@/providers/ContextProvider";
import App from "@/App";

import languagePT from "@/messages/pt.json";
import languageEN from "@/messages/en.json";
import languageES from "@/messages/es.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "pt",
  resources: {
    pt: { global: languagePT },
    en: { global: languageEN },
    es: { global: languageES },
  },
});

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </I18nextProvider>
  </React.StrictMode>
);
