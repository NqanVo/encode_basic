import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { HandleRC4 } from "../logic/HandleRC4";
import Content from "./defaultLayout/Content";
import Selected from "./defaultLayout/Selected";

const RC4com = () => {
  const [types, setTypes] = useState("encode");
  const [result, setResult] = useState();

  const handleSetTypes = useCallback((value) => {
    setTypes(value);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setResult(HandleRC4(data.input_strings, data.input_key));
  };
  return (
    <Content>
      <h3 className="font-medium text-xl">RC-4:</h3>
      <div className="flex flex-col gap-4">
        {/* <Selected types={types} handleSetTypes={handleSetTypes}></Selected> */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div
            className={`flex gap-2 py-1 px-4 border-[2px] max-w-[200px] rounded-full`}
          >
            <span>K =</span>
            <input
              className="flex-1 w-full outline-none"
              type="text"
              defaultValue={"ABCD"}
              {...register("input_key", {
                required: true,
                pattern: /[A-H]$/,
                maxLength: 7,
                minLength: 1,
              })}
            />
          </div>
          {errors.input_key && (
            <span className="text-[#FF8787]">
              K chỉ nhận ký tự in hoa từ A-H, tối đa 7 ký tự
            </span>
          )}
          <input
            placeholder="....."
            {...register("input_strings", {
              required: true,
              pattern: /[A-H]$/,
              maxLength: 7,
              minLength: 1,
            })}
            className={`w-full h-40 border border-gray-400 rounded-md ${
              errors.input_strings ? "outline-[#FF8787]" : "outline-[#BCE29E]"
            }  p-4`}
          />
          {errors.input_strings && (
            <span className="text-[#FF8787]">
              Chỉ nhận ký tự in hoa từ A-H, tối đa 7 ký tự
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

export default RC4com;
