const numberOfStudents = 11;
const numberOfMentors = 2;

const totalOfPeopleInTheClass = numberOfStudents + numberOfMentors; // 100%

const percentageOfStudents = (100 * numberOfStudents) / totalOfPeopleInTheClass;
const percentageOfMentors = (100 * numberOfMentors) / totalOfPeopleInTheClass;

console.log("Percentage students: " + Math.round(percentageOfStudents) + "%");
console.log("Percentage mentors: " + Math.round(percentageOfMentors) + "%");
