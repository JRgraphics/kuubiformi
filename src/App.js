import React, { useEffect } from "react";
import "./App.css";
import i18n from "./i18n";

import { useTranslation } from "react-i18next";
import RegisterationPage from "./components/pages/RegisterationPage";
import Button from "./components/Button";
import i18next from "i18next";
import LanguageSelection from "./components/LanguageSelection";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <div className="background__container">
        <div className="inner-triangle"></div>
        <div className="outer-triangle"></div>
      </div>
      <LanguageSelection />
      <RegisterationPage />
    </div>
  );
}

export default App;
