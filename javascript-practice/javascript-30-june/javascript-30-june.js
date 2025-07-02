// const obj = {counter:10};

// // Define setters
// Object.defineProperty(obj, "reset", {
//   get : function () {this.counter = 0;}
// });
// Object.defineProperty(obj, "increment", {
//   get : function () {this.counter++;}
// });
// Object.defineProperty(obj, "decrement", {
//   get : function () {this.counter--;}
// });
// Object.defineProperty(obj, "add", {
//   set : function (value) {this.counter += value;}
// });
// Object.defineProperty(obj, "subtract", {
//   set : function (i) {this.counter -= i;}
// });

// // Play with the counter:
// // obj.add(5);

// console.log(obj.counter)

// console.log(obj.counter)
// obj.reset;
// obj.add = 5;
// obj.subtract = 1;
// obj.increment;
// obj.decrement;


    // const myObject = {
    //     fun1 : function(){
    //         return 2;
    //     }
    // };

    // Object.defineProperty(myObject, 'myMethod', {
    //     value: function() {
    //         console.log('This is my custom method!');
    //     }   
    // });

    // myObject.myMethod();




// let text;
// switch (4) {
//   case 4:
//   case 5:
//     text = "Soon it is Weekend";
//     break;
//   case 0:
//   case 6:
//     text = "It is Weekend";
//     break;
//   default:
//     text = "Looking forward to the Weekend";
// }

// console.log(text)


// const person = {fname:"John", lname:"Doe", age:25};

// let text = "";
// for (let x in person) {
//   text += x + " ";
// }

// console.log(text)


// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x in cars) {
//   text += x;
// }

// console.log(text)


// function test() {
//   outer: for (var i = 0; i < 3; i++) {
//     console.log("i=" + i);
//     for (var j = 0; j < 3; j++) {
//       if (j === i) {
//         break;
//       }
//       console.log("j=" + j);
//     }
//   }
// }

// test()


const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";

list: {
  text += cars[0] + "\n"; 
  text += cars[1] + "\n"; 
  break list;
  text += cars[2] + "\n"; 
  text += cars[3] + "\n"; 
}

console.log(text)





