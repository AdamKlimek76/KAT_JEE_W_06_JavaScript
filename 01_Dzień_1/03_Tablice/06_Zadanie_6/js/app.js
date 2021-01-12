function getEvenAverage(array) {
    let evenArray = [];
    array.forEach(function (element) {
        if (element % 2 === 0) {
            evenArray.push(element);
        }
    });
    let average = 0;
    if (evenArray.length > 0) {
        const sum = evenArray.reduce(function (total, item) {
            return total + item;
        });
        average = sum / evenArray.length;
    }

    if (evenArray.length > 0) {
        return average;
    } else {
        return null;
    }

}

console.log(getEvenAverage([1, 2, 3, 4, 5, 6, 7]));
console.log(getEvenAverage([1, 1, 1, 1]));
console.log(getEvenAverage([2, 8, 3, 7, 4]));
