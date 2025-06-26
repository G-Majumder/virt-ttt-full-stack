//define a role array with some roles
var roles = ["admin", "moderator", "superuser"];
//create multiple users with different roles with some multiple roles
var users = [
    { name: "Rajat", role: ["admin"] },
    { name: "Kumar", role: ["moderator", "superuser"] },
    { name: "Shiva", role: ["superuser"] },
    { name: "Suraj", role: ["admin", "moderator"] },
    { name: "Sam", role: ["superuser", "moderator"] },
    { name: "Ravi", role: ["admin", "superuser"] },
    { name: "Anil", role: ["moderator"] },
    { name: "Sita", role: ["admin", "moderator", "superuser"] },
    { name: "Gita", role: ["admin"] },
    { name: "Rahul", role: ["superuser"] }
];
//function to check user have access the admin panel or not
function hasAccessToAdminPanel(name) {
    //find user by name
    var user = users.find(function (user) { return user.name === name; });
    //if user not found return false
    if (!user) {
        console.log("Access denied. Power Score: [".concat(0, "]"));
    }
    else {
        if (user.role.includes("admin")) {
            console.log("Access granted. Power Score: [".concat(Math.pow(2, user.role.length), "]"));
        }
        else {
            console.log("Access denied. Power Score: [".concat(Math.pow(2, user.role.length), "]"));
        }
    }
}
// Call the function with different user names
hasAccessToAdminPanel("Rajat");
hasAccessToAdminPanel("Kumar");
hasAccessToAdminPanel("Shiva");
hasAccessToAdminPanel("Suraj");
hasAccessToAdminPanel("Sam");
