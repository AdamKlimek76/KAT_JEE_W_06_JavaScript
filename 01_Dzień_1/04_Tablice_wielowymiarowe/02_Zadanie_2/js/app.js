const multiValueArray = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

for (let i = 0; i <multiValueArray.length; i++) {
    for (let j = 0; j <multiValueArray[i].length; j++) {
        console.log(multiValueArray[i][j]);
    }
}