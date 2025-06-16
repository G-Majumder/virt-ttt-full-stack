/*
2.Implement a user account system where each user has a private password field. Allow setting
and validating password only through methods. Extend this to an admin user that can reset
passwords for other users.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    //one constructor for all
    function User(name, userid, password) {
        this.name = name !== null && name !== void 0 ? name : "unknown";
        this.userid = userid !== null && userid !== void 0 ? userid : "unknown";
        this.password = password !== null && password !== void 0 ? password : "unknown";
    }
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setUserid = function (userid) {
        this.userid = userid;
    };
    User.prototype.getUserId = function () {
        return this.userid;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    return User;
}());
;
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, userid, password) {
        var _this = _super.call(this, name, userid, password) || this;
        _this.userType = "admin";
        return _this;
    }
    Admin.prototype.resetPassword = function (users, userID, newpassword) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].getUserId() === userID) {
                users[i].setPassword(newpassword);
                console.log("Password Updated.... ".concat(users[i].getPassword()));
                break;
            }
            else {
                continue;
            }
        }
    };
    return Admin;
}(User));
;
//Ceating multiple users
var users = [];
//Adding multiple users to array
users.push(new User("Rahul", "ra234", "235!dfr"));
users.push(new User("Sneha", "sn123", "abc@123"));
users.push(new User("Arjun", "ar789", "pass#456"));
users.push(new User("Meera", "me456", "meera$789"));
users.push(new User("Vikram", "vk001", "vik@321"));
//getting all the users data
for (var i = 0; i < users.length; i++) {
    console.log("Details of user ".concat(i + 1, " => Name : ").concat(users[i].getName(), ",  userid : ").concat(users[i].getUserId(), ", Password :").concat(users[i].getPassword()));
}
//updating password through Admin
var admin = new Admin();
admin.resetPassword(users, "vk001", "3645Vk!");
admin.resetPassword(users, "sn123", "dfr#432");
//Data after change in password
console.log("-------Data After Password Change----------");
for (var i = 0; i < users.length; i++) {
    console.log("Details of user ".concat(i + 1, " => Name : ").concat(users[i].getName(), ",  userid : ").concat(users[i].getUserId(), ", Password :").concat(users[i].getPassword()));
}
