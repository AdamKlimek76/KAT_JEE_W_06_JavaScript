function multiply(array) {
    let result = 1;
    return result = array.reduce(function (total, element) {
        return total * element;
    });


}

console.log(multiply([1, 2, 3, 4, 5, 6, 7]));
console.log(multiply([1, 1, 1, 1]));
console.log(multiply([2, 8, 3, 7]));
