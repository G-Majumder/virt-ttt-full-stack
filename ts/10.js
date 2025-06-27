/**
 * 10. You are given student data from multiple CSV lines. Each line is an array of strings, where:
•	First value is the student name (sometimes padded with extra spaces).
•	Remaining values are course names (some arrays are nested).
•	You must:
o	Trim name values.
o	Flatten all course arrays.
o	Group them by student using Object.fromEntries().
o	Handle errors using optional catch binding.
 */
// creating student data using StudentData type
var studentRecord = [
    { name: "Alice", courses: [["Math", "Science"]] },
    { name: "  Bob", courses: [["History"]] },
    { name: "Charlie  ", courses: [["Math", "Art"], ["History"]] }
];
// function to process student data
function processStudentData(data) {
    try {
        // using Object.fromEntries to create a record of students and their courses
        return Object.fromEntries(data.map(function (student) { return [
            student.name.trim(), // trimming the student name
            student.courses.flat() // flattening the course arrays
        ]; }));
    }
    catch (error) {
        // handling errors with optional catch binding
        console.error("Error processing student data:", error);
        return {};
    }
}
// processing the student data
var processedData = processStudentData(studentRecord);
// logging the processed data
console.log(processedData);
