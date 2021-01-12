function addArrays(array1, array2) {
    let check = 0;
    if (array1.length > array2.length) {
        check = -1;
    } else if (array1.length < array2.length) {
        check = 1;
    }
    const sumArray = [];

    switch (check) {
        case -1: {
            for (let i = 0; i <array2.length; i++) {
                sumArray.push(array1[i] + array2[i]);
            }
            for (let i = array2.length; i <array1.length; i++) {
                sumArray.push(array1[i]);
            }
            break;
        }

        case 0:{
            for (let i = 0; i <array2.length; i++) {
                sumArray.push(array1[i] + array2[i]);
            }
            break;
        }

        case 1:{
            for (let i = 0; i <array1.length; i++) {
                sumArray.push(array1[i] + array2[i]);
            }
            for (let i = array1.length; i <array2.length; i++) {
                sumArray.push(array2[i]);
            }
            break;
        }
    }

    return sumArray;

}

console.log(addArrays([4, 0, 1, 3, 4], [1, 9, 6, 7, 8, 17]));
console.log(addArrays([8, 3, 22], [1, 3, 2]));
console.log(addArrays([2, 3, 1, 5, 3, 5], [3, 1, 76, 1]));
