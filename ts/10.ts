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

// defining student data type
type StudentData = {
    name: string;
    courses: string[][];
};

// creating student data using StudentData type
const studentRecord: StudentData[] = [
    { name: "Alice", courses: [["Math", "Science"]]},
    { name: "  Bob", courses: [["History"]]},
    { name: "Charlie  ", courses: [["Math", "Art"], ["History"]] }
];

// function to process student data
function processStudentData(data: StudentData[]): Record<string, string[]> {
    try {
        // using Object.fromEntries to create a record of students and their courses
        return Object.fromEntries(
            data.map(student => [
                student.name.trim(), // trimming the student name
                student.courses.flat() // flattening the course arrays
            ])
        );
    } catch (error) {
        // handling errors with optional catch binding
        console.error("Error processing student data:", error);
        return {};
    }
}

// processing the student data
const processedData = processStudentData(studentRecord);
// logging the processed data
console.log(processedData);

