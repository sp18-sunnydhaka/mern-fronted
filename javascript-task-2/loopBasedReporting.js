import { students, courses, instructors, studentMatrix } from './data.js';

function printStudentSummaries(students){
    students.forEach((student) => {
        const courseCodes = student.courses.map(course => course.code).join(", ");
        const total = student.courses.reduce((sum, course) => sum + course.grade, 0);
        const average = total / student.courses.length;
        console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}`);
        console.log(`Courses: ${courseCodes}`);
        console.log(`Average Grade: ${average.toFixed(2)}`);
        console.log("--------------------------");
    });
}

function findFirstUnderage(students, ageLimit){
    const underageStudent = students.find(student => student.age < ageLimit);
    console.log(underageStudent);
}


function countFailingCourses(students, passMark){

    students.forEach((student) => {
        let count = 0;
        console.log(student.name);
      student.courses.forEach((course) => {
        if (course.grade < passMark) {
          count++;
        }
      });
        console.log(count);
    });

}

export {
  printStudentSummaries,
  findFirstUnderage,
  countFailingCourses
};