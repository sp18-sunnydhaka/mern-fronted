import { students, courses, instructors, studentMatrix } from './data.js';

async function createGradeFilter(min, max){
    return function(student) {
        return new Promise((resolve) => {
          setTimeout(() => {
            const result = student.courses.some(course =>
              course.grade >= min && course.grade <= max
            );
            resolve(result);
          }, 10000);
        });
    };
}

export {
  createGradeFilter
};