function getLastNumbers(number, array) {
    let restArray = [];

    if (number > 0) {
        restArray = array.slice(array.length - number, array.length);
    }

    return restArray;

}

console.log(getLastNumbers(2, [1, 2, 3, 4, 5, 6, 7]));
console.log(getLastNumbers(4, [6, 7, 8, 10, 11, 12, 13, 14, 15]));
console.log(getLastNumbers([-4, -3, -2, 0, 1, 2, 3, 4]));
console.log(getLastNumbers('ala', [-4, -3, -2, 0, 1, 2, 3, 4]));

//const array = [1, 3, 4, 5, 6, 7];
//console.log(array.slice(0, 2));