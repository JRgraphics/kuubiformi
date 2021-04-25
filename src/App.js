import React, { useEffect } from "react";
import "./App.css";
import i18n from "./i18n";

import { useTranslation } from "react-i18next";
import RegisterationPage from "./components/pages/RegisterationPage";
import Button from "./components/Button";
import i18next from "i18next";

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
      <Button
        buttonClassName={
          "button--transparent button__translation " +
          (i18next.language === "en" ? "button__translation--activated" : "")
        }
        buttonContent={"EN"}
        onClick={() => changeLanguage("en")}
      />
      <Button
        buttonClassName={
          "button--transparent button__translation " +
          (i18next.language === "fi" ? "button__translation--activated" : "")
        }
        buttonContent={"FI"}
        onClick={() => changeLanguage("fi")}
      />
      <RegisterationPage />
    </div>
  );
}

export default App;
