import React, { useState, useEffect } from "react";

// Components
import Checkmark from "../icons/Checkmark";
import Close from "../icons/Close";

// Translation
import { useTranslation } from "react-i18next";

const Input = ({
  type,
  name = "",
  errors = {},
  register,
  value = "",
  required = false,
}) => {
  const { t } = useTranslation();

  const [errorMessages, setErrorMessages] = useState("");

  useEffect(() => {
    errors[name]
      ? setErrorMessages(errors[name]?.message)
      : setTimeout(() => {
          setErrorMessages("");
        }, 400);
  }, [errors[name]]);

  const renderSwitch = () => {
    switch (type) {
      case "text":
        return (
          <div className="input__container">
            <div
              className={
                "input__label " +
                (errorMessages !== ""
                  ? "color--red"
                  : value?.length > 0
                  ? "color--turqouse"
                  : "")
              }
            >
              {t("labels." + name)}
              {required ? " *" : ""}
            </div>
            <input
              className={
                "input " +
                (errors[name]
                  ? "input--error"
                  : value?.length > 0
                  ? "input--complete"
                  : "")
              }
              {...register(name)}
            />
            {errorMessages !== "" ? (
              <Close className={"input__icon fade-in"} color={"#FF0000"} />
            ) : value?.length > 0 ? (
              <Checkmark className={"input__icon fade-in"} color={"#30adb4"} />
            ) : null}
            <div
              className={
                "error__container color--red " +
                (errors[name] ? "error__container--open " : "")
              }
            >
              {errorMessages !== ""
                ? (errorMessages === "isRequired"
                    ? t("labels." + name) + " "
                    : "") + t("validationErrors." + errorMessages)
                : ""}
            </div>
          </div>
        );
      case "submit":
        return <input type="submit" />;
      case "textarea":
        return (
          <div className="input__container">
            <textarea className="input" maxLength={500}></textarea>
          </div>
        );
      default:
        return <input type="text" />;
    }
  };

  return renderSwitch();
};
export default Input;
