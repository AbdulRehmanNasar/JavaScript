// methods to declare an array
const arr = [1, 2, "AbdulRehman", false, 3, 4, 5]
console.log(typeof arr);
// console.log(arr);
const array = new Array(1, 2, 3, 4, 5)
console.log(typeof array);
console.log(array);
// getting length of an array
console.log(array.length);
// getting specific value by index
console.log(array[0]);
// showing the indexes on which values are present
console.log(Object.keys(array));

// methods to handle/manipulate an Array

// reverse()-> to reverse an Array with Shallow Copy(it changes the original array)
// console.log(array.reverse());
// toReversed()-> another method to reverse an Array with Deep Copy (it does not change the original array)
// console.log(array.toReversed());

// push()-> to add an element in the last of an Array
array.push(6)
console.log(array);

// pop()-> to delete an element from the ending index of an Array
array.pop()
console.log(array);

// unshift()-> to add specific value at the starting index by shifting remaining element at forward indexes
// it required value as perameter and this methoed is no optimal, its time consuming load on system
array.unshift(5)
console.log(array);
// shift()-> to removing element of first index of an Array
array.shift()
console.log(array);

// includes()-> to check wheather an element is present or not in an Array
// output will be true/false
console.log(array.includes(4));

// indexOf()-> returns the position of the first occurrence of a value in a string
// if value is not present it will return "-1"
console.log(array.indexOf(3));

// join()-> take all the items in an array and turn them into a single string
const array1 = array.join()
console.log(array1);
console.log(typeof array1);

// slice()-> returns selected elements in an array, as a new array
// do not change the original array
const array2 = array.slice(1, 3)
console.log(array2);
console.log(array.slice(1, 3));

//splice()-> to remove, replace or insert items starting at a chosen index
// it changes the original Array
const array3 = array.splice(1, 3)
console.log(array3);
console.log(array);
