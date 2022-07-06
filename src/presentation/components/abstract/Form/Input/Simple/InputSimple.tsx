import { InputParams } from "../input-params";
import { InputSelect } from "../Select/InputSelect";

export const InputSimple: React.FC<InputParams> = ({
  register,
  errors,
  item,
  id,
}: InputParams) => {
  return (
    <>
      <div className="my-3 text-center">
        <label
          key={id + "label"}
          className="font-medium text-white"
          htmlFor={item.name}
        >
          {item.label}
        </label>
      </div>

      {item.options ? (
        <InputSelect register={register} errors={errors} item={item} id={id} />
      ) : (
        <>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 opacity-80"
            {...register(item.name, { required: item.required })}
            type={item.type}
            placeholder={item.placeholder}
            key={id + "input"}
            id={item.name}
          />
          {errors[item.name] && (
            <span className="text-red-800 font-bold">{item.errors}</span>
          )}
        </>
      )}
    </>
  );
};
