import { FieldValues, UseFormRegister } from "react-hook-form";

import { InputProps } from "../form-types";

export type InputParams = {
  register: UseFormRegister<FieldValues>;
  errors: {
    [x: string]: any;
  };
  item: InputProps;
  id: string;
};
