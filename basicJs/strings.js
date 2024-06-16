const name = "AbdulRehman"
const age = 22

// console.log(name + age + " Value"); // old method for handling strings

//new way to handle strings
console.log(`Hello my name is ${name} and my age is ${age}.`);

//another way to declare string
const string = new String("AbdulRehman is here.") // by this declaration we can use prototype efficiently
console.log(string);
console.log(string.length);
console.log(string[0]);
console.log(string.__proto__);// to get prototype, better work in chrome on console
console.log(string.toUpperCase());
console.log(string.indexOf('a'));
console.log(string.charAt(11));

const newString = string.substring(0, 11) //cannot serve -ve values for starting/ending index of character
console.log(newString);

//for getting substring by using -ve values we use Slice
const newString1 = string.slice(-5, 20)
console.log(newString1);


// using Trim to remove spaces at the start and end of string
const newString2 = "          Abdul  Rehman       "
console.log(newString2);
console.log(newString2.trim());

//using Replace to replace any character with other character in string
const url = "https://techv.com/blogs/technology/topic/technical%20evolution"
console.log(url.replace('%20', '-'));

//Include-> for searching or checking whether a string has desired character or not

console.log(url.includes('technology'));

//divides this string into an ordered list of substrings by searching for the pattern,
// puts these substrings into an array, and returns the array

const splittedString = string.split(' ')
console.log(splittedString);

const splittedString1 = string.split('') //splits every character into substrings
console.log(splittedString1);
console.log(splittedString1[5]);// because after split string is converted into substrings of characters

const splittedString2 = string.split()
console.log(splittedString2);
console.log(splittedString2.includes('AbdulRehman is here.'));