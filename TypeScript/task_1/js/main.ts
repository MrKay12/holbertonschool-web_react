// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Define the printTeacherFunction interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Define the interface for the constructor of StudentClass
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Define the interface for StudentClass
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Implement the StudentClass
class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example usage
const teacher1: Teacher = {
    firstName: 'Alice',
    lastName: 'Johnson',
    fullTimeEmployee: true,
    location: 'San Francisco',
    contract: true
};

const teacher2: Teacher = {
    firstName: 'Bob',
    lastName: 'Brown',
    fullTimeEmployee: false,
    yearsOfExperience: 10,
    location: 'Chicago',
    contract: false
};

const director1: Directors = {
    firstName: 'Charlie',
    lastName: 'Williams',
    fullTimeEmployee: true,
    location: 'New York',
    numberOfReports: 5
};

const director2: Directors = {
    firstName: 'Dana',
    lastName: 'White',
    fullTimeEmployee: false,
    yearsOfExperience: 15,
    location: 'Los Angeles',
    numberOfReports: 10
};

const student = new StudentClass('John', 'Doe');
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working

// Example usage of printTeacher
console.log(printTeacher("John", "Doe")); // Output: J. Doe