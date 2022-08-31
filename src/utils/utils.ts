// calculate the hashcode
const hashCode = (strKey: string) => {

    const isNull = (str: string) => {
        return str === null || str === "";
    }

    const intValue = (num: number) => {
        const MAX_VALUE = 0x7fffffff;
        const MIN_VALUE = -0x90000000;

        if (num > MAX_VALUE || num < MIN_VALUE) {
            return num &= 0xffffffff;
        }

        return num;
    }

    let hash: number = 0;
    if (!isNull(strKey)) {
        for (let i = 0; i < strKey.length; i++) {
            hash = hash * 31 + strKey.charCodeAt(i);
            hash = intValue(hash);
        }
    }
    return hash;
}

// find the nearest value index in the given array
export const findNearestInArray = (arr: number[], target: number) => {
    let distance = 1000000000;
    let index = 0;

    arr.forEach((value, i) => {
        if (Math.abs(value - target) < distance) {
            distance = Math.abs(value - target);
            index = i;
        }
    })

    return index;
}

// get list key
export const getListKey = (obj: any) => {
    const strObj = JSON.stringify(obj);
    const key = hashCode(strObj);
    return key;
}
