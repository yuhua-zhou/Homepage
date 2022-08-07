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
