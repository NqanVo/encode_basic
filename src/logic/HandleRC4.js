const submit = document.getElementById("submit");
const result = document.getElementById("ketqua");

// let S = [],
//   T = [],
//   ketqua = [];

function KeyToNumber(x) {
  switch (x) {
    case "A":
      return 0;
    case "B":
      return 1;
    case "C":
      return 2;
    case "D":
      return 3;
    case "E":
      return 4;
    case "F":
      return 5;
    case "G":
      return 6;
    case "H":
      return 7;
    default:
      return -1;
  }
}
function NumberToKey(x) {
  switch (x) {
    case 0:
      return "A";
    case 1:
      return "B";
    case 2:
      return "C";
    case 3:
      return "D";
    case 4:
      return "E";
    case 5:
      return "F";
    case 6:
      return "G";
    case 7:
      return "H";
    default:
      return -1;
  }
}
const KhoiTao = (k, S, T) => {
  for (let i = 0; i < 8; i++) {
    S.push(i);
    let index = i % k.length;
    T.push(parseInt(k.substring(index, index + 1)));
  }
  //   console.log("S khoi tao la: " + S);
  //   console.log("T khoi tao la: " + T);
};
const Swap = (S, i, j) => {
  if (i == j) return S;
  else {
    let temp = S[i];
    S[i] = S[j];
    S[j] = temp;
    return S;
  }
};
const HoanVi = (S, T) => {
  //   console.log("Hoan vi");
  let j = 0;
  for (let i = 0; i < 8; i++) {
    j = (j + S[i] + T[i]) % 8;
    S = Swap(S, i, j);
    // console.log(`Buoc ${i}: i=${i}, j=${j}, S = ${S}`);
  }
  return S;
};
const MaHoa = (S, strings, ketqua) => {
  //   console.log("Giai ma");
  let i = 0;
  let j = 0;
  let t, k;
  for (let x = 0; x < strings.length; x++) {
    i = (i + 1) % 8;
    j = (j + S[i]) % 8;
    S = Swap(S, i, j);
    t = (S[i] + S[j]) % 8;
    k = S[t];
    // console.log(`Buoc ${x}: i=${i}, j=${j}, s=${S}, t=${t}, k=${k}`);
    ketqua.push(KeyToNumber(strings.substring(x, x + 1)) ^ k);
  }
  for (let y = 0; y < ketqua.length; y++) {
    ketqua[y] = NumberToKey(ketqua[y]);
  }
  //   console.log("Ket qua " + ketqua.join(""));
  return ketqua.join("");
};

export const HandleRC4 = (strings, k) => {
  let S = [],
    T = [],
    ketqua = [];
  KhoiTao(k, S, T);
  S = HoanVi(S, T);
  return MaHoa(S, strings, ketqua);
};
// submit.onclick = (e) => {
//   e.preventDefault();
//   const strings = document.getElementById("strings").value;
//   const k = document.getElementById("k").value;
//   KhoiTao(k);
//   S = HoanVi(S, T);
//   return (result.innerHTML = MaHoa(S, strings));
// };
