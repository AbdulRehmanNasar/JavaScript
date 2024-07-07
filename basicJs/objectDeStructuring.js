// Object de-structuring
// used to handle objects and obtain useful data from objects
const user = {
    userName: "AbdulRehman",
    userId: "123abc",
    userEmail: "user@gmail.com",
    userPassCode: 1357,
    userCourses: ["Computer Science", "Mathematics", "Operating System"],
    isLoggedIn: false
}
// to access elements of object(user)

// user.userName   not an effective way to access, we have to repeatedly use .userName for need

// de-structuring object
const {userEmail} = user
console.log(userEmail);

// we can assign new name or key to elements of object by using de-structuring
const {userEmail: email} = user
console.log(email);