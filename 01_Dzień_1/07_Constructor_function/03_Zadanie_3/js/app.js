const Calculator = function () {
    this.products = [];
};


Calculator.prototype.add = function (num1, num2) {
    const result = num1 + num2;
    this.products.push("Added " + num1 + " and " + num2 + " result " + result);
};

Calculator.prototype.multiply = function (num1, num2) {
    const result = num1 * num2;
    this.products.push("Multiplied " + num1 + " and " + num2 + " result " + result);
};

Calculator.prototype.divide = function (num1, num2) {
    const result = num1 / num2;
    this.products.push("Divided " + num1 + " and " + num2 + " result " + result);
};

Calculator.prototype.subtract = function (num1, num2) {
    const result = num1 - num2;
    this.products.push("Subtracted " + num1 + " and " + num2 + " result " + result);
};

Calculator.prototype.printOperations = function () {
    this.products.forEach(function (operation) {
        console.log(operation);
    })
};

Calculator.prototype.clearOperations = function () {
    this.products.length = 0;
};

const calculator = new Calculator();
calculator.add(5, 10);
calculator.multiply(12, 12);
calculator.divide(10, 5);
calculator.subtract(25, 15);
calculator.printOperations();
calculator.clearOperations();
calculator.add(5, 10);
calculator.printOperations();