///////////////////////////////////////
// Lecture: Hoisting

function cacluateAge(year) {
    console.log(2016 - year);
}

cacluateAge(1990);















///////////////////////////////////////
// Lecture: Scoping


// First scoping example


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




// Example to show the differece between execution stack and scope chain


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




///////////////////////////////////////
// Lecture: The this keyword


//console.log(this);

cacluateAge(1985);

function cacluateAge(year) {
    console.log(2018 - year);
    console.log(this);
}


var john = {
    name: 'John',
    yearOfBirth: 1990,
    cacluateAge: function() {
        console.log(this);
        console.log(2018 - this.yearOfBirth);
        /*
        function innerFunction( ) {
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.cacluateAge();


var mike = {
    name: 'Mike',
    yearOfBirth: 1984

};

//METHOD BORROWING 
mike.cacluateAge = john.cacluateAge;
//going to call the function
mike.cacluateAge(); 






