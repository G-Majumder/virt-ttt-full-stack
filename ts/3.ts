/**
 * 3. You have an array of student objects, each with a name, and optionally a grades array (might be missing). Write a program that:
•	Uses arrow functions to process students.
•	Calculates the average grade for each student who has grades.
•	Returns an array of messages like:
"Student [name] has an average grade of [avg]"
•	If a student has no grades or grades is missing, safely handle it using optional chaining and return:
"Student [name] has no grades."
 */

//defining a Student type
type Student = {
    name : string;
    marks? : number[];
}

//creating an array of type Student
const students : Student[] = [];

//adding records to stduents
students.push({name : "Rahul"}); // no grades
students.push({name : "Smita", marks : [56, 78, 90]}); //with grades
students.push({name : "Gokul", marks: []}); // empty marks
students.push({name : "Kiara", marks : [78, 54]}); //partial marks

//Print stduent record
for(let i = 0; i<students.length; i++){
    console.log(`${students[i].name} has gards ${students[i].marks?.length !== 0 ? students[i].marks : 'no grades'}`);
}

//processing data with an arrow function
students.forEach(student => {
    const avg = student.marks?.length
    ? (student.marks.reduce((a,b) => a + b, 0) / student.marks.length)
    : null;

    //peraing the custome message
    let message = avg !== null 
    ? `Student ${student.name} has an average marks of ${avg.toFixed(2)}`
    : `Student ${student.name} has no grade` ;

    console.log(message);
});