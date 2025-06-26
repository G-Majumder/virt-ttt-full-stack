//delare a peoples array
var peoples = [];
//check date format
function checkFormat(date) {
    //define the regex
    var regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
}
;
//adding record to peoples array
function addPerson(people) {
    if (checkFormat(people.birthdate)) {
        peoples.push(people);
        console.log("Record Added");
    }
    else {
        console.error("Invalid birthdate format. Expected YYYY-MM-DD");
    }
}
addPerson({ name: "Goutam", birthdate: "2021-05-20" });
addPerson({ name: "Kunal", birthdate: "2017-06-26" });
addPerson({ name: "Karma", birthdate: "2021-03-26" });
addPerson({ name: "Vipin", birthdate: "2021-0-20" });
addPerson({ name: "Rajesh", birthdate: "2021-05-26" });
//Cheking for Birthday
peoples.forEach(function (people) {
    //Convert to Date Object
    var DOB = new Date(people.birthdate);
    var month = DOB.getMonth();
    var day = DOB.getDate();
    var today = new Date();
    //console.log(DOB.getDate(), today.getDate());
    if ((day == today.getDate()) && (month == today.getMonth())) {
        console.log("Today is ".concat(people.name, "'s Birthday"));
    }
    else {
        console.log("No Birthday Today");
    }
});
