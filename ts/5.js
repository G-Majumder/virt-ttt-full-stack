/*
You have two user profile objects:
const user1 = { name: "Madam", age: 30, city: "Chennai" };
const user2 = { age: 31, profession: "Developer", country: "India" };
Write a program that:
• Merges both user objects into one, with properties from user2 overriding those from user1 if conflicts exist.
• Uses destructuring to extract name, age, and the rest of the properties separately.
• Prints the extracted values clearly.
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var user1 = {
    name: "Madam",
    age: 30,
    city: "Chennai"
};
var user2 = {
    age: 31,
    profession: "Developer",
    country: "India"
};
var finalProfile = {};
for (var key in user1) {
    //adding all keys of user1
    finalProfile[key] = user1[key];
}
for (var key in user2) {
    //add keys from user2 and override
    finalProfile[key] = user2[key];
}
console.log(finalProfile);
//another way to merge and easy way
var finalProfile2 = __assign(__assign({}, user1), user2);
console.log(finalProfile2);
