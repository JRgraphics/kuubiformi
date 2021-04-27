import React from "react";

// Styles
import "./App.css";

// Components
import LanguageSelection from "./components/LanguageSelection";
import RegisterationPage from "./components/pages/RegisterationPage";

// Translation
import i18n from "./i18n";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

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
