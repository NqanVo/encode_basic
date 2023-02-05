export const CreateStringKeys = () => {
  let string = "";
  for (let i = 65; i < 65 + 26; i++) string += String.fromCharCode(i);
  for (let i = 97; i < 97 + 26; i++) string += String.fromCharCode(i);
  for (let i = 48; i < 48 + 10; i++) string += String.fromCharCode(i);
  return string;
};
