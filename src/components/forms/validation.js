import { useCallback } from "react";
import * as yup from "yup";

export const registerationSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().required("Required"),
  moreDetails: yup.string(),
  phone: yup.string().required("Required"),
});

export const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );
