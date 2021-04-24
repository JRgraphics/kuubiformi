import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { avatars } from "../../images";
import AvatarPreview from "../avatars/AvatarPreview";
import AvatarSelectionList from "../avatars/AvatarSelectionList";
import Form from "../forms/Form";

const RegisterationPage = () => {
  const { t } = useTranslation();
  return (
    <div className="registeration-page page flex">
      <div className="page__title-container">
        <div className="page__title">
          Kuubi <span className="color--turqouse">Super</span>
        </div>
        <div className="page__title">
          <span className="color--turqouse">Elite</span> devteam
        </div>
      </div>
      <Form />
      <div className="page__column"></div>
    </div>
  );
};
export default RegisterationPage;