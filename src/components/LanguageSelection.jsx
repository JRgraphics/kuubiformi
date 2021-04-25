import React from "react";

// Components
import Button from "./Button";

// Translation
import i18n from "../i18n";
import i18next from "i18next";

const LanguageSelection = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="language-selection__container">
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
    </div>
  );
};
export default LanguageSelection;
