// dates
let myDate = new Date()
console.log(typeof myDate);
console.log(myDate);

console.log("toString: " + myDate.toString());
console.log("toDateString: " + myDate.toDateString());
console.log("toISOString: " + myDate.toISOString());
console.log("toJSON: " + myDate.toJSON());
console.log("toLocalDateString: " + myDate.toLocaleDateString());
console.log("toLocalString: " + myDate.toLocaleString());
console.log("toLocalTimeString: " + myDate.toLocaleTimeString());
console.log("toTimeString: " + myDate.toTimeString());
console.log("toUTCString: " + myDate.toUTCString());
console.log("getTimezoneOffset: " + myDate.getTimezoneOffset());

// to declare specific Date
let myCreatedDate = new Date(2024, 5, 19)
console.log(myCreatedDate.toDateString())

// to declare specific Date with Time
let myCreatedDateTime = new Date(2024, 5, 19, 2, 52, 1, 12)
console.log(myCreatedDateTime.toLocaleString())

// decalring date in MM-DD-YYYY format, could be modified according to need
myCreatedDate = ("05-19-2024")
console.log(myCreatedDate);

//+++++++++++++++++++++++++++   TimeStamps   +++++++++++++++++++++++++++++++++++

// for current Date and Time in TimeStapms or Miliseconds
// let myTimeStamp = new Date().getTime()
// console.log(typeof myTimeStamp);
// console.log(myTimeStamp);
// let date = new Date(myTimeStamp)
// console.log(date.toString());


// to show current date and time of the system
var time = new Date().getTime(); // get your number
var date = new Date(time); // create Date object

console.log(date.toString());

// to get only Month, Date or Year, use getMonth(), getDate() and getYear()

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());

console.log(  newDate.toLocaleString('default',{
    weekday:"long"
}));