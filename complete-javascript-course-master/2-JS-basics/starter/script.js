//Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drivers a cab in Libson.';
        case 'designer':
            return firstName + ' designs websites';
        default:
            return firstName + ' does something else';
    }
}


//console.log(whatDoYouDo('doctor', 'John'));

var tipCalculator = function(bill) {
    var total = null;
    bill.forEach(element => {
        total += element;
    });
    if(total < 50) {
        total *= 1.2;
    }  else if(total < 200) {
        total *= 1.15;
    } else {
        total *= 1.1;
    }
    return total;
}
var elements = [124, 48, 268];
//console.log(tipCalculator(elements));

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1991,
    family: ['Aneesh', 'Aditya', 'Aruna'],
    job: 'doctor',
    isMarried: true,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};


var person1 = new Object();
person1.firstName = 'John';
person1.mass = 34;
person1.height = 1.4;
person1.calcBMI = function() {
    person1.bmi = this.mass / (this.height * this.height);
    return this.bmi;
}
var person2 = new Object();
person2.firstName = 'Mark';
person2.mass = 32;
person2.height = 1.6;
person2.calcBMI = function() {
    person2.bmi = this.mass / (this.height * this.height);
    return this.bmi;
}

//console.log(person2);
//console.log(person1);
//person1.calcBMI() > person2.calcBMI() ? console.log(person1.firstName + ' ' + person1.bmi) : console.log(person2.firstName + ' ' + person2.bmi);



