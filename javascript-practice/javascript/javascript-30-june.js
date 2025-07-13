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


// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let text = "";

// list: {
//   text += cars[0] + "\n"; 
//   text += cars[1] + "\n"; 
//   break list;
//   text += cars[2] + "\n"; 
//   text += cars[3] + "\n"; 
// }

// console.log(text)


// let obj={
//     a:1,
//     b:2,
//     set prop(a){
//         this.a=10;
//     },
//     get prop1(){
//         return obj.a+obj.b
//     }
// }

// obj.prop=11

// console.log(obj.a)

// const car = {type:"Fiat", model:"500", color:"white"};

// car.type="audi"; 

// console.log(car.type)

// const arr =[1,2,3]

// arr.push(4)

// console.log(arr)

// const object = Object.create(car)
// console.log(Object.getOwnPropertyDescriptors(car))


// function fun(...a){
//     a[1][0]=1000;
//     // console.log(a);
//     // for(let i of a){
//     //     console.log(i)
//     // }
// }

// let arr = [1,[5,6,6],2,3,3,4,5];
// fun(...arr);

// console.log(arr)


// const person = {
//   fullName: function(city,country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   }
// }

// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }

// console.log(person.fullName.apply(person1, ["Oslo", ["Norway"]]));



// function sum(a, b, c,d,e) {
//   return a + b + c+d+e;
// }

// const arr = [1, 2, 3,4,5];

// console.log(sum.apply(null, arr));


// let a =4;

// if(true){
//     let a =10;
// }

// console.log(a)



// function myCounter() {
//   let counter = 0;
//   return function() {
//     counter++;
//     return counter;
//   };
// }
// const add = myCounter();
// console.log(add())
// add();
// add();
// console.log(add());

//  


    // a = [1,2,3,4,5,6,7,8];
                                                                                                                                                                            
    // function add(i){
    //     if(a.length===i)return 0;
    //     return a[i]+ add(i+1) ;
    // }

    // console.log(add(0));



// getName();
// console.log(x);

// var x= 8;

// function getName(){
//     console.log("hello");
// }




// var getName = ()=>{
//     console.log("hello");
// }

// getName();



// var x=1;
// a();
// b();

// function a(){
//     var x=10;
//     console.log(x);
// }


// function b(){
//     x=100;
//     console.log(x);
// }

// console.log(x);



// console.log(x);

// let x=10;

// var x=10;

// function a(){
//     x--;
//     if(x===0)return;
//     c()
//     function c(){
//         console.log(b);
//         a();
//     }
//     b++;
// }
// var b=10;
// a();
// console.log(b);

// var a =100;

// if(true){
//     var a=10;
//     console.log(a);
// }
// console.log(a);



// function x(){
//     var a =  7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();
// console.log(a);



// function x(){
//     var a =  7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// const z = x();


// const counter = {
//     count:0,
//     start:()=>{
//         setTimeout(()=>{
//             this.count++;
//             console.log(this.count);
//         },1000)
//     }
// }
// counter.start();



// difference between let and var in below

// function x(){
//     for(let i =0;i<=5;i++){
//         setTimeout(()=>{
//             console.log(i);
//         },i*1000);
//     }
//     console.log("last line");
// }

// x();


// function x(){
//    for(let i =0;i<=5;i++){

//     function close(i){
//        setTimeout(()=>{
//            console.log(i);
//        },i*1000);
//     }

//     close(i);
//    }
//    console.log("last line");
// }
 
// x()


// a();
// // b();

// function a(){
//     console.log("a is called");
// }

// let b = function (){
//     console.log("b is called");
// }


// function attachEventListeners(){
//     let count = 0;
//     document.getElementById('clickMe').addEventListener(
//         'click',
//         function xyz()
//         {console.log("button clicked", ++count);}
//     )
// }
// attachEventListeners();

const p = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("value")
    },10000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("value")
    },1000);
});

async function handlePromise(){
    console.log("hello1");
    let val = await p;
    console.log("hello2");
    console.log("hello3");
    console.log(val);

    let val2 = await p2;
    console.log("hello4");
    console.log(val2);

}
handlePromise();





