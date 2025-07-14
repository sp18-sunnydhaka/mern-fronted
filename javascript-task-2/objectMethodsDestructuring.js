import { students, courses, instructors, studentMatrix } from './data.js';

function printCourseStats(students){
    const courseMap = {};
    students.forEach((student) => {
      student.courses.forEach((course) => {
        if (!courseMap[course.code]) {
          courseMap[course.code] = [];
        }
        courseMap[course.code].push(course.grade);
      });
    });

    Object.entries(courseMap).forEach(([courseName, grades]) => {
      const min = Math.min(...grades);
      const max = Math.max(...grades);
      const avg = grades.reduce((sum, g) => sum + g, 0) / grades.length;

      console.log(`${courseName}: min=${min}, max=${max}, avg=${avg.toFixed(2)}`);
    });
}

export {
  printCourseStats
};