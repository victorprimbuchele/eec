import { useRef, useState } from "react";
import { MainFormPayloadProps } from "../../main-form-types";
import { MainFormColoredBackground } from "./Colored/MainFormColoredBackground";
import { MainFormSubmitButton } from "./SubmitButton/MainFormSubmitButton";
import Fivelabs from "../../../../../../assets/5fivelabs.svg";

export const MainFormWhiteBackground: React.FC = () => {
  const [payload, setPayload] = useState<MainFormPayloadProps>({
    firstCheckInTime: "",
    firstCheckOutTime: "",
    secondCheckInTime: "",
    secondCheckOutTime: "",
  });

  const ref = useRef<HTMLButtonElement>(null);

  const submitButton = document.getElementById("submitFormButton");

  const handleSubmitButtonClick = () => {
    submitButton?.click();

    console.log(ref);
    if (ref.current) {
      ref.current.click();
    }
  };

  const handleSubmit = (payload: MainFormPayloadProps) => {
    console.log(payload);
    setPayload(payload);
  };

  console.log(ref);

  return (
    <div className="h-full bg-white w-full lg:drop-shadow-lg align-items-center lg:px-7 xl:px-9 2xl:px-11">
      <div>
        <MainFormColoredBackground handleSubmit={handleSubmit} />
      </div>
      <div className="my-16 w-full text-center">
        <MainFormSubmitButton
          ref={ref}
          handleSubmit={handleSubmitButtonClick}
        />
      </div>
      <div className="flex w-full p-8 justify-center">
        <div className="w-6/12">
          <img src={Fivelabs} alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
};
