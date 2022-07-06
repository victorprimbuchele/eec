import { Subject } from "../../abstract/Subject/Subject";
import { WhyUseSubjectInnerText } from "./WhyUseSubjectInnerText";

export const WhyUseSubject: React.FC = () => {
  return (
    <>
      <Subject
        text={WhyUseSubjectInnerText}
        subject="Para que usar?"
        icon="chevron-down"
        fontStyle="font-light sm:text-2xl lg:text-4xl 2xl:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-gradientOrange via-gradientPink to-gradientDarkViolet rounded-b-xl p-3"
      ></Subject>
    </>
  );
};
