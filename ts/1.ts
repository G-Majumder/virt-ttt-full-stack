/**
 * 1. You are creating a user profile system for a web app. A user's name is stored in a variable.
 * You define the profile using an object, and inside a block, you modify a role field.
 * After the block, you want to confirm the original name is still used and the updated role is reflected.
 * Write a program to implement this logic and explain how the role update works while the name remains unchanged.
 */


//define a user profile
type userProfile = {
    name : string;
    role : string;
};
//Create a object of type userProfile
let user1 : userProfile = {
    name : "Goutam",
    role : "normal"
};

//modifying user role
user1.role = "Admin";

//getting all values
console.log(`User Name : ${user1.name} and role : ${user1.role}`);

