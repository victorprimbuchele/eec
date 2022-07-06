import { MainFormWhiteBackground } from "../../components/Main/Form/Background/White/MainFormWhiteBackground";
import { HowUseSubject } from "../../components/Subject/HowUse/HowUseSubject";
import { WhyUseSubject } from "../../components/Subject/WhyUse/WhyUseSubject";

export const Main: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:gap-8 h-screen sm:mx-6 md:mx-12 lg:mx-32 xl:mx-60 2xl:mx-72  drop-shadow">
      <div className="h-full w-full hidden sm:block">
        <div className="w-full flex justify-center">
          <div className="text-wine w-75 sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold mt-20 mb-8">
            <h1 className="leading-tight">
              Não permita mais enganos com seu horário flexível
            </h1>
          </div>
        </div>
        <div className="w-10/12">
          <WhyUseSubject />
        </div>
        <div className="w-10/12">
          <HowUseSubject />
        </div>
      </div>
      <div className="h-full w-screen sm:w-full">
        <MainFormWhiteBackground />
      </div>
    </div>
  );
};
