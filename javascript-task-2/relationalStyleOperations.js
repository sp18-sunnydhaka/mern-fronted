import { students, courses, instructors, studentMatrix } from './data.js';


function getCoursesByInstructor(courses, instructorId) {
  const list = courses
    .filter(course => course.instructorId === instructorId)
    .map(course => ({ code: course.code, title: course.title }));
  console.log(list);
}


function totalCreditsPerStudent(students, courses) {
  const summary = students.map(student => {
    const totalCredits = student.courses.reduce((sum, { code }) => {
      const courseInfo = courses.find(c => c.code === code);
      return sum + (courseInfo ? courseInfo.credits : 0);
    }, 0);
    return { id: student.id, name: student.name, totalCredits };
  });
  console.log(summary);
}

function studentTranscript(students, courses, instructors) {
  const transcripts = students.map(student => {
    const transcript = student.courses.map(({ code, grade }) => {
      const courseInfo = courses.find(c => c.code === code) || {};
      const instructor = instructors.find(i => i.id === courseInfo.instructorId) || {};
      return {
        course: code,
        grade,
        instructorName: instructor.name 
      };
    });
    return { id: student.id, name: student.name, transcript };
  });
  console.log(transcripts);
}


function courseAverages(students) {
  const gradeMap = {};
  students.forEach(student => {
    student.courses.forEach(({ code, grade }) => {
      if (!gradeMap[code]) gradeMap[code] = [];
      gradeMap[code].push(grade);
    });
  });

  const averages = Object.entries(gradeMap).map(([course, grades]) => ({
    course,
    avgGrade: grades.reduce((a, g) => a + g, 0) / grades.length
  }));
  console.log(averages);
}


function topStudentsByCourse(students, courseName, n) {
  const ranked = students
    .map(s => {
      const entry = s.courses.find(c => c.code === courseName);
      return entry
        ? { id: s.id, name: s.name, grade: entry.grade }
        : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.grade - a.grade)
    .slice(0, n);
  console.log(ranked);
}


export {
  getCoursesByInstructor,
  totalCreditsPerStudent,
  studentTranscript,
  courseAverages,
  topStudentsByCourse
};