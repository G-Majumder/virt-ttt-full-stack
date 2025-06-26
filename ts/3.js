/**
 * 3. You have an array of student objects, each with a name, and optionally a grades array (might be missing). Write a program that:
•	Uses arrow functions to process students.
•	Calculates the average grade for each student who has grades.
•	Returns an array of messages like:
"Student [name] has an average grade of [avg]"
•	If a student has no grades or grades is missing, safely handle it using optional chaining and return:
"Student [name] has no grades."
 */
var _a;
//creating an array of type Student
var students = [];
//adding records to stduents
students.push({ name: "Rahul" }); // no grades
students.push({ name: "Smita", marks: [56, 78, 90] }); //with grades
students.push({ name: "Gokul", marks: [] }); // empty marks
students.push({ name: "Kiara", marks: [78, 54] }); //partial marks
//Print stduent record
for (var i = 0; i < students.length; i++) {
    console.log("".concat(students[i].name, " has gards ").concat(((_a = students[i].marks) === null || _a === void 0 ? void 0 : _a.length) !== 0 ? students[i].marks : 'no grades'));
}
//processing data with an arrow function
students.forEach(function (student) {
    var _a;
    var avg = ((_a = student.marks) === null || _a === void 0 ? void 0 : _a.length)
        ? (student.marks.reduce(function (a, b) { return a + b; }, 0) / student.marks.length)
        : null;
    //peraing the custome message
    var message = avg !== null
        ? "Student ".concat(student.name, " has an average marks of ").concat(avg.toFixed(2))
        : "Student ".concat(student.name, " has no grade");
    console.log(message);
});
