import React from "react";
import "./App.css";
import i18n from "./i18n";

import { useTranslation } from "react-i18next";
import Form from "./components/forms/Form";

function App() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <button onClick={() => changeLanguage("fi")}>fi</button>
      <button onClick={() => changeLanguage("en")}>en</button>
      <Form />
    </div>
  );
}

export default App;
