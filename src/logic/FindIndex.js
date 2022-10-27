const FindIndex = (keys, key) => {
    let i = 0
    for (i; i < keys.length; i++) {
        if (key === keys.substring(i, i + 1)) {
            return i;
        }
    }
    return -1
}

export default FindIndex