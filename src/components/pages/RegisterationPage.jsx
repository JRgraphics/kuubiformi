import React, { useState } from "react";

// Components
import Form from "../forms/Form";
import Loading from "../Loading";
import SuccessMessage from "../SuccessMessage";
import TermsAndConditions from "../TermsAndConditions";

// Translation
import { useTranslation } from "react-i18next";
import PageHeader from "./PageHeader";

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
      <PageHeader rows={["Kuubi Super", "Elite devteam"]} />
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
