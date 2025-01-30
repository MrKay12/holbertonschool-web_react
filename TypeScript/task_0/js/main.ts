// This file contains the main logic of the application. It defines the `Student` interface with properties `firstName`, `lastName`, `age`, and `location`. It creates two student variables, `student1` and `student2`, stores them in an array called `studentsList`, and uses Vanilla JavaScript to render a table displaying each student's first name and location.

// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create student1 and student2 variables
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles'
};

// Store them in an array named studentsList
const studentsList: Student[] = [student1, student2];

// Function to render a table
function renderTable() {
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    headerRow.insertCell().innerText = 'First Name';
    headerRow.insertCell().innerText = 'Location';

    studentsList.forEach(student => {
        const row = table.insertRow();
        row.insertCell().innerText = student.firstName;
        row.insertCell().innerText = student.location;
    });

    document.body.appendChild(table);
}

// Call the function to render the table
renderTable();