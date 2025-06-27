/**
 * Imagine you are receiving user data from an async generator which yields user objects. Each user has an email field. 
 * You need to:
•	Extract the domain from each email using a regular expression with named groups.
•	Store all unique domains using a Set.
•	Use for-await-of to handle the incoming stream.
•	Use Promise.finally() to print “Stream completed” at the end, even if errors occur
 */
// Define User type
type User = {
    name: string;
    email: string;
};

// Sample users
const users: User[] = [
    { name: "Rahul", email: "rahul1@gmail.com" },
    { name: "Ravi", email: "ravi_abc@yahoo.co.in" },
    { name: "Rohit", email: "rohit_123@gmail.com" },
    { name: "Rita", email: "rita_23@rediffmail.com" }
];

async function* userGenerator(users : User []){
    for(const user of users){
        console.log(`Processing User : ${user.name}`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        yield user;
    }
}
function extarctDomain(email : string) : string | null{
    const regex = /^[^@]+@([^@]+\.[^@]+)$/;
    const match = email.match(regex);
    return match ? match[1] : null;
}
async function processUserData(users : User []){
    const domainName = new Set<string>();
    try{
        for await (const user of userGenerator(users)){
            const domain = extarctDomain(user.email);
            if(domain){
                domainName.add(domain);
            }
        }
    }catch(error){
        console.error("Error processing user stream:", error);
    }finally{
        console.log("Unique domains:", Array.from(domainName));
        console.log("Stream completed");
    }
}
processUserData(users);