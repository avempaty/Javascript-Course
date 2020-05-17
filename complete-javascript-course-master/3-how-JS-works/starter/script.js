///////////////////////////////////////
// Lecture: Hoisting

//calculateAge(1939);
function calculateAge(year) {
    console.log(2020 - year);
}

//calculateAge(1990);
var retirement = function(year) {
    console.log(65 - (2020 - year));
}

//retirement(1990);
var age = 23;
function foo() {
    console.log(window.age);
    var age = 65;
    window.age = 21;
    console.log(age);
}
foo();
console.log(age);



///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









