import { students, courses, instructors, studentMatrix } from './data.js';
import {
  addStudent,
  removeStudentById,
  updateStudentName,
  getStudentById,
  calculateAverageGrade,
  getHonorRoll,
  getCourseRoster
} from './coreStudentUtilities.js';

import {
  createGradeFilter
} from './factoryClosure.js';

import {
  printStudentSummaries,
  findFirstUnderage,
  countFailingCourses
} from './LoopBasedReporting.js';

import {
  printCourseStats
} from './objectMethodsDestructuring.js';


import {
  getCoursesByInstructor,
  totalCreditsPerStudent,
  studentTranscript,
  courseAverages,
  topStudentsByCourse
} from './relationalStyleOperations.js';

import readlineSync from 'readline-sync';


function choosetask(){
    console.log(`Choose one:
        1.  Core Student Utilities
        2. Loop-Based Reporting
        3.  Object Methods & Destructuring
        4. Factory & Closure
        5. Relational-Style Operations
        6. Quit`)
        return  readlineSync.question('Enter number between 1 and 6: ');
}


const newStudentExample =   { id: 21, name: "Sunny Dhaka", age: 20, courses: [ { code: "PHYS101", grade: 85 }, { code: "MATH201", grade: 82 }, { code: "ENG301", grade: 80 } ] };

const removeStudentIdExample = 20;

function option1(){
    console.log(`Choose functionality:
        1.addStudent
        2.removeStudentById
        3.updateStudentName
        4. getStudentById 
        5. calculateAverageGrade
        6. getHonorRoll
        7. getCourseRoster
        8. Go back`)
        let inp = Number(readlineSync.question('Enter number between 1 and 8: '));
        if(inp===1){
            addStudent(students,newStudentExample);
            option1();
        }
        else if(inp===2){
            removeStudentById(students,removeStudentIdExample);
            option1();
        }
        else if(inp===3){
            updateStudentName(students,20,"Sunny Dhaka");
            option1();
        }
        else if(inp===4){
            getStudentById(students,20);
            option1();
        }
        else if(inp===5){
            calculateAverageGrade(newStudentExample);
            option1();
        }
        else if(inp===6){
            getHonorRoll(students,90);
            option1();
        }
        else if(inp===7){
            getCourseRoster(students,"CS102");
            option1();
        }
        else if(inp===8){
            program();
        }
        else{
            console.log("Try again");
            option1();
        }
}


function option2(){
    console.log(`Choose functionality:
        1. printStudentSummaries
        2. findFirstUnderage
        3. countFailingCourses
        4. Go back`)
        let inp = Number(readlineSync.question('Enter number between 1 and 4: '));
        if(inp == 1){
            printStudentSummaries(students);
            option2();
        }
        else if(inp == 2){
            findFirstUnderage(students,2);
            option2();
        }
        else if(inp == 3){
            countFailingCourses(students,90);
            option2();
        }
        else if(inp == 4){
            program();
        }
        else{
            console.log("Try again");
            option2();
        }
}

function option3(){
    console.log(`Choose functionality:
        1. printCourseStats
        2. Go back`)
        let inp = Number(readlineSync.question('Enter number between 1 and 2: '));
        if(inp === 1){
            printCourseStats(students);
            option3();
        }
        else if(inp ===2){
            program();
        }
        else{
            option3();
        }
}

async function option4(){
console.log(`Choose functionality:
        1. createGradeFilter
        2. Go back`)
        let inp = Number(readlineSync.question('Enter number between 1 and 2: '));
        if(inp === 1){
            let newfunc = await createGradeFilter(90,100);
            let result = await newfunc(newStudentExample);
            console.log(result);
            option4();
        }
        else if(inp ===2){
            program();
        }
        else{
            option4();
        }
}

function option5(){
    console.log(`Choose functionality:
        1. getCoursesByInstructor
        2. totalCreditsPerStudent,
        3. studentTranscript,
        4. courseAverages,
        5.topStudentsByCourse
        6. Go back`)
        let inp = Number(readlineSync.question('Enter number between 1 and 6: '));

        if(inp === 1){
            getCoursesByInstructor(courses, 101);
            option5();
        }
        else if(inp === 2){
            totalCreditsPerStudent(students, courses);
            option5();
        }
        else if(inp === 3){
            studentTranscript(students, courses, instructors);
            option5();
        }
        else if(inp === 4){
            courseAverages(students);
            option5();
        }
        else if(inp === 5){
            topStudentsByCourse(students, "CS101", 3);
            option5();
        }
        else if(inp === 6){
            program();
        }
        else{
            option5();
        }
}

function program(){
    let main_option = Number(choosetask());
    if(main_option === 1){
        option1();
    }
    else if(main_option === 2){
        option2();
    }
    else if(main_option === 3){
        option3();
    }
    else if(main_option === 4){
        option4();
    }
    else if(main_option === 5){
        option5();
    }
    else if(main_option === 6){
        return;
    }
    else{
        console.log("Try again.")
        program();
    } 
}

program();

