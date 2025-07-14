import { students, courses, instructors, studentMatrix } from './data.js';

function addStudent(students,newStudent){
    // let new_arr = 
    console.log("Old students arr:",students);
    let newArr = JSON.parse(JSON.stringify(students));
    newArr.push(newStudent);
    console.log("New students arr:",newArr);
}

function removeStudentById(students, id){
    let newArr = students.filter((student)=>{
        return student.id !== id;
    });
    console.log("new arr",newArr);
}

function updateStudentName(students, id, newName){
    const updatedStudents = students.map((student) => {
        if (student.id === id) {
          return { ...student, name: newName };
        } else {
          return student;
        }
    });

  console.log(updatedStudents);
}

function getStudentById(students, id){
    const foundStudent = students.find((student) => student.id === id);
    console.log(foundStudent);
}

function calculateAverageGrade(student){
    const total = student.courses.reduce((sum, course) => {
        return sum + course.grade;
    }, 0);

    const average = total / student.courses.length;
    console.log(average);
}

function getHonorRoll(students, threshold){
    const honorRoll = students.filter((student) => {
    const total = student.courses.reduce((sum, course) => sum + course.grade, 0);
      const avg = total / student.courses.length;
      return avg >= threshold;
    });
    console.log(honorRoll);
}

function getCourseRoster(students, courseName){
    const roster = [];
  students.forEach((student) => {
    student.courses.forEach((course) => {
      if (course.code === courseName) {
        roster.push({
          id: student.id,
          name: student.name,
          grade: course.grade
        });
      }
    });
  });

  console.log(roster);
}


export {
  addStudent,
  removeStudentById,
  updateStudentName,
  getStudentById,
  calculateAverageGrade,
  getHonorRoll,
  getCourseRoster
};