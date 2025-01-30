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