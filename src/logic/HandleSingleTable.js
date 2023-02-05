import FindIndex from "./FindIndex";

const keys = "abcdefghijklmnopqrstuvwxyz";
const keysCompare = "ytzlmdaefgbhijkcnopqrsuvwx";

const handleSingleTable = (strings, types) => {
  let ketQua = [];
  if (types === "encode") {
    for (let i = 0; i < strings.length; i++) {
      let vitri = FindIndex(keys, strings.substring(i, i + 1));
      ketQua[i] = keysCompare.substring(vitri, vitri + 1);
    }
  } else if (types === "recode") {
    for (let i = 0; i < strings.length; i++) {
      let vitri = FindIndex(keysCompare, strings.substring(i, i + 1));
      ketQua[i] = keys.substring(vitri, vitri + 1);
    }
  } else return -1;
  return ketQua.join("");
};

export default handleSingleTable;
