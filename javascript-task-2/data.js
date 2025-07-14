// student data 

export const students = [
  { id: 1, name: "Alice Johnson", age: 19, courses: [ { code: "CS101", grade: 88 }, { code: "PHYS101", grade: 91 }, { code: "ENG301", grade: 85 } ] },
  { id: 2, name: "Benjamin Lee", age: 20, courses: [ { code: "CS102", grade: 76 }, { code: "MATH201", grade: 82 }, { code: "ENG301", grade: 79 } ] },
  { id: 3, name: "Chloe Martinez", age: 18, courses: [ { code: "CS101", grade: 93 }, { code: "CS102", grade: 87 } ] },
  { id: 4, name: "Daniel Kim", age: 21, courses: [ { code: "CS101", grade: 85 }, { code: "PHYS101", grade: 88 }, { code: "MATH201", grade: 80 } ] },
  { id: 5, name: "Ella Zhang", age: 19, courses: [ { code: "CS102", grade: 89 }, { code: "MATH201", grade: 91 } ] },
  { id: 6, name: "Finn O'Brien", age: 20, courses: [ { code: "ENG301", grade: 75 }, { code: "PHYS101", grade: 78 } ] },
  { id: 7, name: "Grace Patel", age: 18, courses: [ { code: "CS101", grade: 90 }, { code: "CS102", grade: 84 }, { code: "ENG301", grade: 86 } ] },
  { id: 8, name: "Henry Thompson", age: 22, courses: [ { code: "PHYS101", grade: 72 }, { code: "CS102", grade: 74 }, { code: "ENG301", grade: 80 } ] },
  { id: 9, name: "Isla Brown", age: 19, courses: [ { code: "MATH201", grade: 89 }, { code: "PHYS101", grade: 91 } ] },
  { id: 10, name: "Jack Wilson", age: 20, courses: [ { code: "CS101", grade: 78 }, { code: "ENG301", grade: 83 } ] },
  { id: 11, name: "Kylie Nguyen", age: 18, courses: [ { code: "CS102", grade: 92 }, { code: "MATH201", grade: 90 }, { code: "PHYS101", grade: 88 } ] },
  { id: 12, name: "Liam Davis", age: 21, courses: [ { code: "CS101", grade: 87 }, { code: "CS102", grade: 85 }, { code: "ENG301", grade: 81 } ] },
  { id: 13, name: "Maya Garcia", age: 19, courses: [ { code: "MATH201", grade: 84 }, { code: "PHYS101", grade: 86 } ] },
  { id: 14, name: "Noah Smith", age: 20, courses: [ { code: "CS101", grade: 91 }, { code: "PHYS101", grade: 89 }, { code: "ENG301", grade: 90 } ] },
  { id: 15, name: "Olivia Chen", age: 18, courses: [ { code: "CS102", grade: 95 }, { code: "MATH201", grade: 92 } ] },
  { id: 16, name: "Parker Lewis", age: 22, courses: [ { code: "PHYS101", grade: 79 }, { code: "ENG301", grade: 76 } ] },
  { id: 17, name: "Quinn Anderson", age: 20, courses: [ { code: "CS101", grade: 84 }, { code: "MATH201", grade: 88 } ] },
  { id: 18, name: "Riley Moore", age: 19, courses: [ { code: "CS102", grade: 90 }, { code: "ENG301", grade: 87 } ] },
  { id: 19, name: "Sophia Taylor", age: 21, courses: [ { code: "CS101", grade: 86 }, { code: "CS102", grade: 89 }, { code: "MATH201", grade: 83 } ] },
  { id: 20, name: "Thomas Evans", age: 20, courses: [ { code: "PHYS101", grade: 85 }, { code: "MATH201", grade: 82 }, { code: "ENG301", grade: 80 } ] },
];


// courses 
export const courses = [
  { code:'CS101', title:'Intro to CS',     credits:4, instructorId:100 },
  { code:'CS102', title:'Data Structures', credits:3, instructorId:101 },
  { code:'MATH201', title:'Calculus II',   credits:4, instructorId:102 },
  { code:'PHYS101', title:'Physics I',     credits:4, instructorId:103 },
  { code:'ENG301', title:'English Lit.',   credits:3, instructorId:104 }
];

// instructor 
export const instructors = [
  { id:100, name:'Dr. Smith',   dept:'Computer Science' },
  { id:101, name:'Prof. Lee',    dept:'Computer Science' },
  { id:102, name:'Dr. Gupta',   dept:'Mathematics' },
  { id:103, name:'Dr. OBrien', dept:'Physics' },
  { id:104, name:'Prof. Davis', dept:'English' }
];

// each row: [id, name, age]
export const studentMatrix = [
  [1, "Alice Johnson", 19],
  [2, "Benjamin Lee", 20],
  [3, "Catherine Park", 21],
  [4, "Daniel Smith", 18],
  [5, "Ella Thompson", 22],
  [6, "Franklin White", 20],
  [7, "Grace Kim", 19],
  [8, "Henry Nguyen", 21],
  [9, "Isla Martinez", 20],
  [10, "Jack Wilson", 23],
  [11, "Kylie Chen", 18],
  [12, "Liam Patel", 19],
  [13, "Maya Rivera", 22],
  [14, "Noah Walker", 20],
  [15, "Olivia Harris", 21],
  [16, "Peter Lewis", 19],
  [17, "Quinn Adams", 22],
  [18, "Ryan Scott", 18],
  [19, "Sophia Brooks", 20],
  [20, "Thomas Bell", 21]
];
