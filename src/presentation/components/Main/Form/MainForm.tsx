import MainFormData from "../../../../data/form/clock/clock-form-data.json";
import { Form } from "../../abstract/Form/Form";
import { MainFormPayloadProps } from "./main-form-types";
import * as yup from "yup";

export type SubmitProps = {
  handleSubmit: (payload: MainFormPayloadProps) => void;
};

// const schema = yup.object({
//   firstCheckInTime:
// })

export const MainForm: React.FC<SubmitProps> = ({ handleSubmit }) => {
  return (
    <>
      <Form
        input={MainFormData}
        onSubmit={handleSubmit}
        buttonClass=""
        key={"clock-check-from"}
      />
    </>
  );
};
