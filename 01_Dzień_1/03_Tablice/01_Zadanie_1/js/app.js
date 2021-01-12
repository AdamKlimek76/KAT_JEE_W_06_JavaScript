const distFromAverage = function (array) {

    const sum = array.reduce(function (total, item) {
        return total + item;
    });
    const average = Math.floor(sum / array.length);

    const array2 = array.map(function (element) {
        return Math.abs(element - average);
    });
        return array2;
};


console.log(distFromAverage([1, 2, 3, 4, 5, 6, 7]));