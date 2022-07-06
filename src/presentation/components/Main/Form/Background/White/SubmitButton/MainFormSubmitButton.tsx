type MainFormSubmitButtonProps = {
  ref: React.RefObject<HTMLButtonElement>;
  handleSubmit: () => void;
};

export const MainFormSubmitButton: React.FC<MainFormSubmitButtonProps> = ({
  ref,
  handleSubmit,
}) => {
  return (
    <button
      type="button"
      className="bg-white font-bold w-9/12 border-2 px-8 py-4 rounded-lg text-fuchsia-800 border-fuchsia-800 hover:bg-fuchsia-700 rounded-b-xl p-3 hover:border-white hover:text-white"
      onClick={handleSubmit}
    >
      Calcular
    </button>
  );
};
