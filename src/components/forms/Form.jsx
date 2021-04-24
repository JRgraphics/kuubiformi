import React from "react";
import { useForm } from "react-hook-form";

import Input from "./Input";
import { registerationInputs } from "./layouts";
import { registerationSchema, useYupValidationResolver } from "./validation";

const Form = () => {
  const resolver = useYupValidationResolver(registerationSchema);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver });
  return (
    <div className="form">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        {registerationInputs.map((item, index) => (
          <Input
            key={index}
            type={item.type}
            name={item.name}
            errors={errors}
            register={register}
          />
        ))}
      </form>
    </div>
  );
};
export default Form;
