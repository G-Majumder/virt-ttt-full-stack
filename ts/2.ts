/*
2.Implement a user account system where each user has a private password field. Allow setting 
and validating password only through methods. Extend this to an admin user that can reset
passwords for other users.
*/

class User{
    protected name : string;
    protected userid : string;
    private password : string;

    //one constructor for all
    constructor(name?: string, userid?: string, password?: string){
        this.name = name ?? "unknown";
        this.userid = userid ?? "unknown";
        this.password = password ?? "unknown";
    }

    public setName(name : string){
        this.name = name;
    }
    public getName() : string{
        return this.name;
    }
    public setUserid(userid : string){
        this.userid = userid;
    }
    public getUserId():string{
        return this.userid;
    }
    public setPassword(password : string){
        this.password = password;
    }
    public getPassword() : string{
        return this.password;
    }
};

class Admin extends User{
    protected readonly userType : string = "admin";
    constructor(name?: string, userid?: string, password?: string){
        super(name, userid, password);
    }

    public resetPassword(users: User[], userID : string, newpassword : string){
        for(let i = 0; i<users.length; i++){
            if(users[i].getUserId() === userID){
                users[i].setPassword(newpassword);
                console.log(`Password Updated.... ${users[i].getPassword()}`);
                break;
            }else{
                continue;
            }
        }
    }
};

//Ceating multiple users
const users : User [] = [];

//Adding multiple users to array
users.push(new User("Rahul", "ra234", "235!dfr"));
users.push(new User("Sneha", "sn123", "abc@123"));
users.push(new User("Arjun", "ar789", "pass#456"));
users.push(new User("Meera", "me456", "meera$789"));
users.push(new User("Vikram", "vk001", "vik@321"));


//getting all the users data
for(let i = 0; i<users.length; i++){
    console.log(`Details of user ${i+1} => Name : ${users[i].getName()},  userid : ${users[i].getUserId()}, Password :${users[i].getPassword()}`)
}

//updating password through Admin
const admin = new Admin();
admin.resetPassword(users, "vk001", "3645Vk!");
admin.resetPassword(users, "sn123", "dfr#432");

//Data after change in password
console.log("-------Data After Password Change----------");
for(let i = 0; i<users.length; i++){
    console.log(`Details of user ${i+1} => Name : ${users[i].getName()},  userid : ${users[i].getUserId()}, Password :${users[i].getPassword()}`)
}