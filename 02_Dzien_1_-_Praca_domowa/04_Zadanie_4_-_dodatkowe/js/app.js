function factors(number) {
    let array = [];
    if (number > 0) {
        for (let i = number; i > 0; i--) {
            if (number % i === 0) {
                array.push(i);
            }
        }
    }

    return array;

}

console.log(factors(2));
console.log(factors(54));
console.log(factors(-4));