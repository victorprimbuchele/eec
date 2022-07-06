import { InputParams } from "../input-params";

export const InputSelect: React.FC<InputParams> = ({
  register,
  errors,
  item,
  id,
}: InputParams) => {
  return (
    <>
      <select {...register(item.name)}>
        {item.options &&
          item.options.map((option, i) => (
            <option value={option.value} key={`${option.value}@${i}`}>
              {option.label}
            </option>
          ))}
      </select>
      {errors[item.name] && <span className="bg-red-700">{item.errors}</span>}
    </>
  );
};
