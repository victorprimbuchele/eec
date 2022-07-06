import { MainForm, SubmitProps } from "../../../MainForm";

export const MainFormColoredBackground: React.FC<SubmitProps> = ({
  handleSubmit,
}) => {
  return (
    <div>
      <div className="bg-gradient-to-br from-gradientOrange via-gradientPink to-gradientViolet rounded-b-xl p-3">
        <MainForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};
