import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

// Components
import Avatar from "../avatars/Avatar";
import Button from "../Button";
import Input from "./Input";
import Textarea from "./Textarea";

// Form
import { registerationInputs } from "./layouts";
import { registerationSchema, useYupValidationResolver } from "./validation";
import Checkbox from "./Checkbox";
import { avatars } from "../../images";

const Form = ({ openTermsAndConditions, onSubmit }) => {
  const { t } = useTranslation();

  const [currentAvatar, setCurrentAvatar] = useState(avatars[0]);
  const [termsAndConditionsStatus, setTermsAndConditionsStatus] = useState(
    false
  );

  const resolver = useYupValidationResolver(registerationSchema);
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm({ resolver, mode: "onChange", reValidateMode: "onChange" });

  return (
    <form
      className="form"
      onSubmit={handleSubmit((data) => {
        data["avatar"] = currentAvatar;
        console.log(data);
        onSubmit(data);
      })}
    >
      <div className="column-50">
        <div className="form__header">
          {t("pages.registerationPage.headers.createProfile")}
        </div>
        {registerationInputs.map((item, index) => (
          <Input
            key={index}
            type={item.type}
            name={item.name}
            errors={errors}
            register={register}
            value={getValues(item.name)}
            required={item.required}
          />
        ))}
      </div>
      <div className="column-50">
        <Avatar
          avatars={avatars}
          onAvatarChange={(avatar) => setCurrentAvatar(avatar)}
        />
      </div>
      <div className="column-100">
        <div className="input__label input__label--light">
          {t("labels.moreDetails")}
        </div>
        <Textarea name={"moreDetails"} register={register} />
      </div>
      <div className="column-100 d-flex align-items-center my-4">
        <Checkbox
          name={"termsAndConditions"}
          register={register}
          onCheck={() => setTermsAndConditionsStatus(!termsAndConditionsStatus)}
        />
        <div className="termsAndConditions__link flex">
          {t("labels.accepting")}
          <Button
            buttonClassName="button--transparent button__termsAndConditions"
            buttonContent={t("termsAndConditions.link")}
            onClick={openTermsAndConditions}
          />
        </div>
        {"*"}
      </div>
      <Button
        buttonClassName={"input__submit"}
        buttonContent={t("labels.submit")}
        type="submit"
        disabled={!termsAndConditionsStatus}
      />
    </form>
  );
};
export default Form;
