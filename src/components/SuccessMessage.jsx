import React, { useState } from "react";

// Components
import Checkmark from "./icons/Checkmark";

// Translation
import { useTranslation } from "react-i18next";

const SuccessMessage = ({ onClose }) => {
  const { t } = useTranslation();

  const [fader, setFader] = useState("fade-in");

  const handleOnClose = () => {
    setFader("fade-out");
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <div
      className={"success-message__container " + fader}
      onClick={handleOnClose}
    >
      <div className="inner__container scale-up">
        <div className="message col-12 text-center">
          {t("messages.success")}
        </div>
        <Checkmark
          className={"success-message__icon fade-in"}
          color={"#30adb4"}
        />
      </div>
    </div>
  );
};
export default SuccessMessage;
