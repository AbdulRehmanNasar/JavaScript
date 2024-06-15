console.log("1" + 2); // simple concatination
console.log(1 + "2"); // simple concatination
console.log("1" + 2 + 2); //output will be 122 because of ToPremitive Reflink "https://tc39.es/ecma262/#sec-type-conversion"
console.log(2 + 2 + "1"); //output will be 41 because of ToPremitive Preference RefLink "https://tc39.es/ecma262/#sec-type-conversion"


// post and pre increament RefLink "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment"
//post increament
let x = 3;
let y = x++;
console.log(x, y); // output will be 4 3 (post increament stores value before increament)

//pre increament
let a = 4;
let b = ++a;
console.log(a, b); // output will be 5 5 (pre increament stores value after increament)