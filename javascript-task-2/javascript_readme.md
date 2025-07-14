Main file is studentRecord.js it is terminal based code

Tasks
A. Core Student Utilities

addStudent(students, newStudent) → i made the deep copy with json.stringfy and json.parse


removeStudentById(students, id) → new array without matching student
Iused filter to return student if student.id !== student.id


updateStudentName(students, id, newName) → new array with updated name via object spread
iused map()where if student id matched i changed name to newName with spread operato

getStudentById(students, id) → student object or null
used find to return first student with this id 

calculateAverageGrade(student) → average of student.courses[].grade
used reduce to get some of all courses grades then divided it with student.course.length

getHonorRoll(students, threshold) → students with avg ≥ threshold
used reduce inside filter frist get sum and then checking threshold 

getCourseRoster(students, courseName) → [{id, name, grade}, …]
used nested forEach for checking of same course name then pushing it in new arr roster


B. Loop-Based Reporting

printStudentSummaries(students)
use forEach on students and map for course codes and then reduce for average sum 


findFirstUnderage(students, ageLimit)
Used find to give first student that is less than ageLImit 


countFailingCourses(students, passMark)
forEach student gives number of courses studnet failing in.



C. Object Methods & Destructuring
printCourseStats(students)
made a object  for course grade and pushing grades in it
then using object.entries in for math.min and Math.max


Log CourseName: min=…, max=…, avg=… via Object.entries, Math.min, Math.max, reduce


D. Factory & Closure
createGradeFilter(min, max)
I have used async function here and used settimeout wraped in promise which is returned and then this function is called from async function and await is used for this timeout

Returns a function taking a student, returning true if any course grade in [min,max]


E. Relational-Style Operations
getCoursesByInstructor(courses, instructorId) → [{code, title}, …]
first used .filter to check if instructorid in course match the instructorid given then used mapto retun a list of course code and course title

totalCreditsPerStudent(students, courses) → [{id, name, totalCredits}, …]
using ,ap on stdunt then reduce for sum and inside reduce used .find to find the course with this course code and thier credit 

studentTranscript(students, courses, instructors) → [{id, name, transcript:[{course,grade,instructorName},…]}, …]
student id grade and instructor name is s returned 

courseAverages(students) → [{course, avgGrade}, …]
for each course is gradeMap is used as object then then to find average object.entris is used

topStudentsByCourse(students, courseName, n) → top n students by grade
first used map to return array of of student with specified course 
then filter for null values and then sort them on basis of grade and then slice for top n students.
