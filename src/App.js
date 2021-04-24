import React, { useEffect } from "react";
import "./App.css";
import i18n from "./i18n";

import { useTranslation } from "react-i18next";
import RegisterationPage from "./components/pages/RegisterationPage";

function App() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <div className="background__container">
        <div className="inner-triangle"></div>
        <div className="outer-triangle"></div>
      </div>
      <button onClick={() => changeLanguage("fi")}>fi</button>
      <button onClick={() => changeLanguage("en")}>en</button>
      <RegisterationPage />
    </div>
  );
}

export default App;
