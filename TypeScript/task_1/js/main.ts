// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
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