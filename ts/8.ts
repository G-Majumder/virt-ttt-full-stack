/**
 * You have an object where keys are usernames and values are their scores. Write an async function that:
•	Simulates fetching this data after 2 seconds.
•	Uses Object.entries() to loop through the username-score pairs.
•	Pads each username to 15 characters (right) and score to 5 digits (left).
•	Logs the leaderboard in a clean, aligned format.
 */

const UserData : {[username : string] : number} = {
    'Rani' : 56,
    'Shyam' : 60,
    'Vikas' : 80,
    'Biplab' : 458,
    'Suman' : 1024
};

async function getLeaderboard() : Promise<void> {
    console.log("Getting data for Leaderboard");

    //2-second delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    //Display the Leaderboard
    console.log("Leaderboard.......");
    console.log("UserName".padEnd(15) + "Score".padStart(5));

    //iterate through object for each user and padded with scores
    Object.entries(UserData).forEach(([username, score]) => {
        const paddedUsername = username.padEnd(15);
        const paddedScore = score.toString().padStart(5, '0');
        console.log(paddedUsername + paddedScore);
    });
}

//call leaderboard
getLeaderboard();
