import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import HandleCeasar from "../logic/HandleCeasar";
import Content from "./defaultLayout/Content";
import Selected from "./defaultLayout/Selected";

const Ceasar = () => {
  const [types, setTypes] = useState("encode");
  const [result, setResult] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setResult(
      HandleCeasar(types, data.input_strings, parseInt(data.input_key))
    );
  };

  const handleSetTypes = useCallback((value) => {
    setTypes(value);
  }, []);

  return (
    <Content>
      <h3 className="font-medium text-xl">Ceasar:</h3>
      <div className="flex flex-col gap-4">
        <Selected types={types} handleSetTypes={handleSetTypes}></Selected>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div
            className={`flex gap-2 py-1 px-4 border-[2px] max-w-[200px] rounded-full`}
          >
            <span>K =</span>
            <input
              className="flex-1 w-full outline-none"
              type="text"
              defaultValue={1}
              {...register("input_key", {
                required: true,
                pattern: /[0-9]$/,
              })}
            />
          </div>
          {errors.input_key && (
            <span className="text-[#FF8787]">K chỉ nhận giá trị số nguyên</span>
          )}
          <input
            placeholder="....."
            {...register("input_strings", {
              required: true,
              pattern: /[A-Za-z0-9]$/,
            })}
            className={`w-full h-40 border border-gray-400 rounded-md ${
              errors.input_strings ? "outline-[#FF8787]" : "outline-[#BCE29E]"
            }  p-4`}
          />
          {errors.input_strings && (
            <span className="text-[#FF8787]">
              Chỉ mã hóa ký tự thường, ký tự hoa và chữ số
            </span>
          )}

          <input
            type="submit"
            value="Swap"
            className="py-1 px-4 w-[100px] rounded-full bg-[#FF8787] font-medium text-white active:bg-[#FF8787]/50"
          />

          <textarea
            className="w-full h-40 border border-gray-400 rounded-md outline-none p-4"
            readOnly
            value={result ? result : "....."}
          ></textarea>
        </form>
      </div>
    </Content>
  );
};

export default Ceasar;
