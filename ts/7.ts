// Defines a type `User` with two properties: `name` and `role`.
type User = {
    name: string;
    role: string[];
};

//define a role array with some roles
const roles: string[] = ["admin", "moderator", "superuser"];

//create multiple users with different roles with some multiple roles
const users: User[] = [
    { name: "Rajat", role: ["admin"] },
    { name: "Kumar", role: ["moderator", "superuser"] },
    { name: "Shiva", role: ["superuser"] },
    { name: "Suraj", role: ["admin", "moderator"] },
    { name: "Sam", role: ["superuser", "moderator"]},
    { name: "Ravi", role: ["admin", "superuser"] },
    { name: "Anil", role: ["moderator"] },
    { name: "Sita", role: ["admin", "moderator", "superuser"] },
    { name: "Gita", role: ["admin"] },
    { name: "Rahul", role: ["superuser"]}
];

//function to check user have access the admin panel or not
function hasAccessToAdminPanel(name: string): void {
    //find user by name
    const user = users.find(user => user.name === name);
    
    //if user not found return false
    if (!user) {
        console.log(`Access denied. Power Score: [${0}]`);
    }else{
        if(user.role.includes("admin")){
            console.log(`Access granted. Power Score: [${Math.pow(2, user.role.length)}]`);
        }
        else{
            console.log(`Access denied. Power Score: [${Math.pow(2, user.role.length)}]`);
        }
    }
}
// Call the function with different user names
hasAccessToAdminPanel("Rajat");
hasAccessToAdminPanel("Kumar");
hasAccessToAdminPanel("Shiva");
hasAccessToAdminPanel("Suraj");
hasAccessToAdminPanel("Sam");