const car = {
    brand: "Toyota",
    color: "biały",
    numberOfKilometer: 100_000,
    printCarInfo: function () {
        console.log(this.brand + this.color + this.numberOfKilometer)
    },
    drive: function (km) {
        this.numberOfKilometer += km;
    },

    technicalReviews: [],
    addReview: function (date) {
        this.technicalReviews.push(date);
    },
    
    printReviews: function () {
        this.technicalReviews.forEach(function (review) {
            console.log(review);
        });
    }

};

car.printCarInfo();
car.drive(20000);
car.printCarInfo();
car.addReview("2020-01-01");
//car.printReviews();
car.addReview("2025-02-01");
car.printReviews();