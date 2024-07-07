// Methods to create object
// Using an Object Literal
const obj = {
    a: 1,
    b: 2,
    c: 3
}
console.log(obj);

// Using the new Keyword (there is no need to use this method, literal is more effective)
const obj1 = new Object()
obj1.name = "Haider"
obj1.age = 18
obj1.gender = "male"
obj1.loggedIn = false
console.log(obj1);

// Using constructor to create an Object
function Person(name, age, loggedIn){
this.firstName = name
this.Age = age
this.LoggedIn = loggedIn
}
const Person1 = new Person("Ali", 18, true)
const Person2 = new Person("Moazam", 21, false)
const Person3 = new Person("Kazim", 19, true)

console.log(Person1);

// Accessing the elements of Object
const sym = Symbol("key-1")
const obj2 = {
    name: "Saahib",
    age: 18,
    location: "Lahore",
    email: "saahib@yango.com",
    "Person's Email": "saahib@waasil.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Wednesday", "Friday"],
    [sym]: ["myKey1"]
}
console.log(obj2.email);
console.log(obj2["email"]);
// reason to use this way to access elements in Object is defined in accessing "Person's Email"
console.log(obj2["Person's Email"]);
// another reason is we cannot access Symbol in Object by using obj2.symbol
console.log(obj2["sym"]);
console.log(typeof sym);
console.log(obj2);

const obj3 = {}

// Methods in Objects

// Copies properties from a source object to a target object
Object.assign(obj3, obj2)
console.log(obj3);

// Creates an object from an existing object
const obj4 = Object.create(obj2)
console.log(obj4.name);

// Returns an array of the key/value pairs of an object
console.log(Object.entries(obj2));

// Returns an array of the keys of an object
console.log(Object.keys(obj2));

// Returns an array of the property values of an object
console.log(Object.values(obj2));

// Object protection methods

// freeze()-> Prevents any changes to an object
Object.freeze(obj2)
obj2.email = "admin@xyz.com"
console.log(obj2);

// Prevents adding object properties
const object1 = {
    a: 1,
    b: 2,
    c: 3
}
object1.gender = "Male"
Object.preventExtensions(object1)
object1.eyeColour = "black" // we cannot add elements
object1.a = 5 // but we can change values of existing elements
console.log(object1);

// Prevents adding and deleting object properties
Object.seal(object1)
delete object1.a
console.log(object1);


// Adding functions in Object

const hiObject = {
    name: "AbdulRehman"
}
// function greetings(){
//     console.log("Hi JS user.");    For doing that we have to use Prototype
// }
// hiObject.greetings();
// console.log(hiObject);

hiObject.greetings = function greetings(){
    console.log("Hi JS user.");
}

hiObject.greetingWithName = function greetingWithName(){
    console.log(`Hi JS user, ${this.name}`);
}
console.log(hiObject.greetings());
console.log(hiObject.greetingWithName());
console.log(hiObject);
