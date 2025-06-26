// Definining a People Record Type
type PeopleRecord = {
    name : string;
    birthdate : string; // fromat "YYYY-MM-DD"
};

//delare a peoples array
const peoples : PeopleRecord [] = [];

//check date format
function checkFormat(date : string) : boolean{
    //define the regex
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
};

//adding record to peoples array
function addPerson(people : PeopleRecord) : void{
    if(checkFormat(people.birthdate)){
        peoples.push(people);
        console.log("Record Added");
    }else{
        console.error("Invalid birthdate format. Expected YYYY-MM-DD");
    } 

}


addPerson({name : "Goutam", birthdate : "2021-05-20"});
addPerson({name : "Kunal", birthdate : "2017-06-26"});
addPerson({name : "Karma", birthdate : "2021-03-26"});
addPerson({name : "Vipin", birthdate : "2021-0-20"});
addPerson({name : "Rajesh", birthdate : "2021-05-26"});

//Cheking for Birthday
peoples.forEach(people => {
    //Convert to Date Object
    let DOB = new Date(people.birthdate);
    let month = DOB.getMonth();
    let day = DOB.getDate();
    let today = new Date();
    //console.log(DOB.getDate(), today.getDate());
    if((day == today.getDate()) && (month == today.getMonth())){
        console.log(`Today is ${people.name}'s Birthday`);
    }else{
        console.log(`No Birthday Today`);
    }
});