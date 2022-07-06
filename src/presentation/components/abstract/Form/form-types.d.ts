import { OptionalObjectSchema, TypeOfShape } from "yup/lib/object";
import { AnyObject } from "yup/lib/types";

export interface FormParams {
  input: InputProps[];
  onSubmit: (value: any) => void;
  children?: React.ReactNode;
  schema?: OptionalObjectSchema<
    {
      [x: string]: any;
    },
    AnyObject,
    TypeOfShape<{
      [x: string]: any;
    }>
  >;
  buttonClass: string;
}

export type InputProps = {
  placeholder?: string;
  required: boolean;
  type: string;
  name: string;
  label: string;
  errors?: string;
  display?: "flex" | "grid";
  gridCols?: string | number | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

  gridGap?: string | number | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  grouped: boolean;
  group?: InputProps[];
  min?: number;
  max?: number;
  class?: any;
  options?: OptionsProps[];
};
export type OptionsProps = {
  value: string | number | readonly string[] | undefined;
  label: string;
};
