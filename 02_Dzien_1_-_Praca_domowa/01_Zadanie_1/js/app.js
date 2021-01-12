function getNumber(number, array) {
    const checkNumber = array.indexOf(number);
    return checkNumber !== -1;
}

console.log(getNumber(2, [1, 3]));
console.log(getNumber(2, [1, 2, 3]));