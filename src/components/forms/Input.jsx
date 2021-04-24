import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Input = ({ type, name = "", errors = {}, register }) => {
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
          <>
            <div className="input__label">{t("labels." + name)}</div>
            <input
              className={"input " + (errors[name] ? "input--error" : "")}
              {...register(name)}
            />
            <div
              className={
                "error__container " +
                (errors[name] ? "error__container--open " : "")
              }
            >
              {errorMessages}
            </div>
          </>
        );
      case "submit":
        return <input type="submit" />;
      default:
        return <input type="text" />;
    }
  };

  return renderSwitch();
};
export default Input;
