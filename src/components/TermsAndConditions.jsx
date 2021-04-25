import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import Close from "./icons/Close";

const TermsAndConditions = ({ onClose }) => {
  const { t } = useTranslation();
  // State hooks
  const [fader, setFader] = useState("fade-in");

  const handleOnClose = () => {
    setFader("fade-out");
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const contentToColumns = (text) => {
    const columns = text.split("/n");
    const elementList = [];
    columns.forEach((item, index) => {
      elementList.push(
        <div key={index} className="content__row">
          {item}
        </div>
      );
    });
    const content = (
      <div className="termsAndConditions__content">{elementList}</div>
    );

    console.log(content);
    return content;
  };

  return (
    <div className={"termsAndConditions__container " + fader}>
      <div className="inner__container">
        <div className="termsAndConditions__header">
          <Button
            buttonClassName={"button--transparent"}
            buttonContent={<Close className="icon__close" color="#000" />}
            onClick={() => handleOnClose()}
          />
        </div>
        <div className="text__container">
          <div className="termsAndConditions__title">
            {t("termsAndConditions.title")}
          </div>

          {contentToColumns(t("termsAndConditions.content"))}
        </div>
      </div>
    </div>
  );
};
export default TermsAndConditions;
