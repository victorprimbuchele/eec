import { InputParams } from "../input-params";
import { InputSimple } from "../Simple/InputSimple";

export const InputGrouped: React.FC<InputParams> = ({
  register,
  errors,
  item,
  id,
}: InputParams) => {
  return (
    <>
      <div key={item.name} className="flex w-fit flex-col ">
        <InputSimple register={register} errors={errors} item={item} id={id} />
      </div>
      {item.group &&
        item.group.map((subitem, i) => (
          <div key={subitem.name} className="flex w-fit flex-col ">
            <InputSimple
              register={register}
              errors={errors}
              item={subitem}
              id={`${subitem.name}@${i}`}
            />
          </div>
        ))}
    </>
  );
};
