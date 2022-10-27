import FindIndex from "./FindIndex"

const keys = "abcdefghijklmnopqrstuvwxyz"
let reKey = ""
let tableKey = [[], []]
let ketQua = []
let x, y

function getKey(strings, defaultKey) {
    const n = Math.ceil(strings.length / defaultKey.length);
    if ((strings.length > defaultKey.length) && n > 0) {
        let string = "";
        for (let i = 1; i <= n; i++) {
            string += defaultKey;
        }
        for (let i = 0; i < strings.length; i++) {
            reKey += string.substring(i, i + 1)
        }
    }
    else {
        for (let i = 0; i < strings.length; i++) {
            reKey += defaultKey.substring(i, i + 1)
        }
    }
    return reKey
}
function getKeyEncode(keys, i, j) {
    let cut = keys.substring(0, i)
    keys = keys.slice(i) + cut
    let kyTu = keys.substring(j, j + 1)
    return kyTu
}
function getKeyRecode(keys, kyTuMaHoa, j) {
    // let kytu = 0
    for (let i = 0; i < keys.length; i++) {
        let KyTuXaoTron = keys
        let cut = keys.substring(0, i)
        KyTuXaoTron = KyTuXaoTron.slice(i) + cut
        tableKey[[i][j]] = KyTuXaoTron.substring(j, j + 1)
        if (tableKey[[i][j]] === kyTuMaHoa)
            return keys.substring(i, i + 1)
    }
    return -1
}
function encode(keys, strings, defaultKey) {
    reKey = getKey(strings, defaultKey)
    for (let i = 0; i < strings.length; i++) {
        x = FindIndex(keys, strings.substring(i, i + 1))
        y = FindIndex(keys, reKey.substring(i, i + 1))
        ketQua[i] = getKeyEncode(keys, x, y)
    }
    return ketQua.join('')
}
function recode(keys, strings, defaultKey) {
    reKey = getKey(strings, defaultKey)
    for (let i = 0; i < strings.length; i++) {
        let kyTuMaHoa = strings.substring(i, i + 1)
        y = FindIndex(keys, reKey.substring(i, i + 1))
        ketQua[i] = getKeyRecode(keys, kyTuMaHoa, y)
    }
    return ketQua.join('')
}

const HandleMultiTables = (types, strings, k) => {
    switch (types) {
        case "encode": return encode(keys, strings, k)
        case "recode": return recode(keys, strings, k)
        default:
            break;
    }
}

export default HandleMultiTables