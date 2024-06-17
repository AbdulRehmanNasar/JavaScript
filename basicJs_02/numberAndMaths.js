// using Number without declaring
// there is no exception using Number in this way, the thing is missing by using this method, Prototypes
const score = 400
console.log(score);


// by using this method, we can see protopypes of Number but more useful in browser's console
// it also tells about the value is Premitive obviously due to using Number
const balance = new Number(400)
console.log(balance);

// using some Prototypes for the sake of knowledge
// in constructor-> min and max value in Number (MIN_VALUE and MAX_VALUE are not functions)
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
//in constructor-> min/max safe integer in Number (MIN/MAX_SAFE_INTEGER are not functions)
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

// IMPORTANT toString()-> to convert Number to String
const balance1 = new Number(400)
const string = balance.toString()
console.log(string); // now we can perform Prototypes of String on converted Number
// using "length" prototype on string
console.log(string.length);
console.log(balance1);

//using toFixed() to format a number with a specified number of decimal places
//we usually use fixed() to show the points value upto required/desired limit
const balance2 = new Number(400.34235)
const check = balance2.toFixed(2)
console.log(balance2.toFixed(2));
console.log(typeof(check)); // toFixed() also convert the Number into String


// using toPrecision() to format a number to a specified precision,
//returning a string representation of the number with the desired level of accuracy
// it will show the variable upto given precision value with round up
const balance3 = new Number(120.34235)
const balance4 = new Number(12151.34235)
const balance5 = new Number(121)


console.log(balance3.toPrecision(3)); // toPrecision() also convert the Number into String
console.log(balance4.toPrecision(3));
console.log(balance5.toPrecision(7));


// using toLocalString() to return a Date object as a string, using locale settings
const balance6 = new Number(10000000)

console.log(balance6.toLocaleString());
console.log(typeof(balance6.toLocaleString())); //also returns String type value

// we can change format of currency, according to practices uses in required country
console.log(balance6.toLocaleString('en-PK'));

// using toLocalString() for format the date
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));


//++++++++++++++++++++++++++++++++++++   MATHS   ++++++++++++++++++++++++++++++++++++++++++++++++++++

