const accountId = 345439
let accountEmail = "abdulrehman@google.com"
var accountPassword = "12345"
accountCity = "Lahore"

/*
 Prefer not to use "var" beacause
 of issue in block scope and functional scope.
*/

// accountId = 55555 cannot change const

accountEmail = "someone@google.com"
accountPassword = "54321"
accountCity = "Karachi"

// console.log(accountId)
a = 2
b = 5
if(a<b){
    accountPassword = "11111"
    accountEmail = "changeInIF@google.com"
}
else{
    accountPassword = "12345"
    accountEmail = "abdulrehman@google.com"
}
console.table([accountEmail, accountPassword, accountCity])

function withVar(){
    if(true){
        var a = 5
    }
    // console.log(a);
}
function withLet(){
    if(true){
        let b =7
    }
    console.log(b)
}
withVar();
withLet();

console.log(c);
var c = 9;

// console.log(d);
// let d = 10