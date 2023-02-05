import { CreateStringKeys } from "./CreateStringKeys";
import FindIndex from "./FindIndex";

const keys = CreateStringKeys();

const HandleCeasar = (types, strings, k) => {
  if (strings !== "") {
    let i = 0;
    let index;
    let stringsArr = [];
    const Encode = (keys, strings, k) => {
      let encode;
      for (i; i < strings.length; i++) {
        index = FindIndex(keys, strings.substring(i, i + 1));
        encode = (index + k) % 62;
        stringsArr[i] = keys.substring(encode, encode + 1);
      }
      return stringsArr.join("");
    };
    const Recode = (keys, strings, k) => {
      let recode;
      for (i; i < strings.length; i++) {
        index = FindIndex(keys, strings.substring(i, i + 1));
        recode = (index - k + 62) % 62;
        stringsArr[i] = keys.substring(recode, recode + 1);
      }
      return stringsArr.join("");
    };
    switch (types) {
      case "encode":
        return Encode(keys, strings, k);
      case "recode":
        return Recode(keys, strings, k);
      default:
        return "Wrongs some thing";
    }
  }
};

export default HandleCeasar;
