// layers in object of objects
const regularUser = {
    userId: "123abc",
    userEmail: "someone@gmail.com",
    fullName: {
        userName: {
            userFirstName: "AbdulRehman",
            userLastName: "Nasar"
        }
    }
}
// accessing the layers
console.log(regularUser.fullName.userName.userFirstName);

// consider if some element is missing in the layer we use "?" by Optional Chaning
const regularUser1 = {
    userId: "123abc",
    userEmail: "someone@gmail.com",
    fullName1: {
        userName: {
            userFirstName: "AbdulRehman",
            userLastName: "Nasar"
        }
    }
}
console.log(regularUser1.fullName?.userName.userFirstName);

// merging objects

const obj = {
    a: 1,
    b: 2,
    c: 3
}
const obj1 = {
    d: 4,
    e: 5,
    f: 6
}
const obj2 = {
    g: 7
}
// by storing 2 objects in 3rd object
// we can merge more than 2 objects by this methods

const mergedObj = {obj, obj1}
console.log(mergedObj);

// using assign() to merge 2 objects
// we can merge more than 2 objects by this methods

const mergedObj1 = Object.assign(obj, obj1, obj2)
console.log(mergedObj1);
// another way to use assing for merging
const mergedObj2 = Object.assign({}, obj, obj1, obj2)
console.log(mergedObj2);

// using spread operator to merging the objects
const mergedOb3 = {...obj, ...obj1, ...obj2}
console.log(mergedOb3);

// using keys() and values() to get keys and values of object
const appUser = {
    name: "Zammy",
    id: "123abc",
    email: "zammy@gmail.com",
    passCode: 1357
}
console.log(Object.keys(appUser));
console.log(Object.values(appUser));

// checking Object has some element or property
console.log(appUser.hasOwnProperty("isLoggedIn"));
console.log(appUser.hasOwnProperty("id"));

