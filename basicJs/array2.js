const studentsInSectionA = ["Ali", "Kazim", "Awais"]
const studentsInSectionB = ["Saif", "Momin", "Ijaz"]

// using push() to merge 2 arrays but its not effective method
// its add array in existing array not elements of 2nd array
// also we can merge only two arrays
studentsInSectionA.push(studentsInSectionB)
console.log(studentsInSectionA);

// using concat() to merge 2 arrays
// by using concat() we can merge only 2 arrays only
const studentsInSectionC = ["Ali", "Kazim", "Awais"]
const studentsInSectionD = ["Saif", "Momin", "Ijaz"]
const testArray = [1, 2, 3, 4, 5]

// for concat() we have to store merged array in new array
const mergedStudents = studentsInSectionC.concat(studentsInSectionD)
console.log(mergedStudents);

// using spread operator to merge Arrays
// we can merged more than 2 Array using spread operator
const mergedStudents1 = [...studentsInSectionC, ...studentsInSectionD, ...testArray]
console.log(mergedStudents1);

// using flat() to get original or single array by removing layers in an Array
const layeredArray = [1, 2, 3, [4, 5, 6], [7,8,9, [10, 11]]]
const singleArray = layeredArray.flat(Infinity) // in place of infinity we can use own range to remove layers like 1, 2, 3...
console.log(singleArray);

// Methods to convert string, object, numbers or any other type into Array
// e.g when we collect data from webpages it comes in form of NodeList, Object, String...
// first we confirm that the data is in form of Array or not
console.log(Array.isArray("AbdulRehman"));

// using from() to convet into array
console.log(Array.from("AbdulRehman"));

// using of() to convert into array
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

// using from() to convert an object into array
// directly converting Object into Array will return an empty Array
console.log(Array.from({name: "AbdulRehman", rollNo: 123}));
// we have to use key-values
const object = {
    name: "AbdulRehman",
    rollNo: 123
}
console.log(Array.from(Object.keys(object)));
console.log(Array.from(Object.values(object)));

// using Object.enteries() to get key-value pair in array format from object
const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
}
console.log(Object.entries(obj));