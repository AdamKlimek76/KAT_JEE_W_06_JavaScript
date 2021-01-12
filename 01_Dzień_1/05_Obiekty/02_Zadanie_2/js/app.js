const timeMachine = {
    shape: "Ostry",
    model: "a2",
    run: function(date, place){
        return date + " " + place
    }
};

console.log(timeMachine.shape);
console.log(timeMachine.model);
console.log(timeMachine.run("2000-01-01", "New York"));