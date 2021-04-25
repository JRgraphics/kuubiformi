import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { avatars } from "../../images";
import AvatarPreview from "../avatars/AvatarPreview";
import AvatarSelectionList from "../avatars/AvatarSelectionList";
import Form from "../forms/Form";
import TermsAndConditions from "../TermsAndConditions";

// Components
import Loading from "../Loading";
import SuccessMessage from "../SuccessMessage";

const RegisterationPage = () => {
  const { t } = useTranslation();

  const [termsAndConditionsStatus, setTermsAndConditionsStatus] = useState(
    false
  );
  const [loading, setLoading] = useState(false);
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);

  const handleOnSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessfulSubmit(true);
    }, 1500);
  };

  return (
    <div className="registeration-page page flex">
      {loading ? <Loading /> : null}
      {successfulSubmit ? (
        <SuccessMessage onClose={() => setSuccessfulSubmit(false)} />
      ) : null}
      <div className="page__title-container">
        <div className="page__title">
          Kuubi <span className="color--turqouse">Super</span>
        </div>
        <div className="page__title">
          <span className="color--turqouse">Elite</span> devteam
        </div>
      </div>
      <Form
        openTermsAndConditions={() => setTermsAndConditionsStatus(true)}
        onSubmit={(data) => handleOnSubmit(data)}
      />
      {termsAndConditionsStatus ? (
        <TermsAndConditions
          onClose={() => setTermsAndConditionsStatus(false)}
        />
      ) : null}
      <div className="page__column"></div>
    </div>
  );
};
export default RegisterationPage;
