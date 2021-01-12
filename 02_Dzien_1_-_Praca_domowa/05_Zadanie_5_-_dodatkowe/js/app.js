function getMissingElement(array) {
    let missingElement = false;
    let missingNumber = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] - array[i] !== 1) {
            missingNumber = array[i] + 1;
            missingElement = true;
            break;
        }
    }

    if (missingElement) {
        return missingNumber;
    } else {
        return null;
    }

}

console.log(getMissingElement([1, 2, 3, 4, 5, 6, 7]));
console.log(getMissingElement([6, 7, 8, 10, 11, 12, 13, 14, 15]));
console.log(getMissingElement([-4, -3, -2, 0, 1, 2, 3, 4]));