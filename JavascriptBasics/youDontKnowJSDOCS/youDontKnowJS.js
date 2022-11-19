//                                           javascript truthy and falsy values

// let names = [1,2,3]
// let ages = [1,2,3]

// if(ages == names){
//     console.log('true');
// }else {
//     console.log('false');
// }

//                           SCOPES IN JAVASCRIPT

// HOISTING

// var a = 10

// foo()

// function foo() {
//     a = 12

//     console.log('inside foo',a);

//     var a
// }

// console.log('outside foo ',a);

// NESTE SCOPES 

// function outer() {
//     var a = 12;

//     function inner() {
//         var b = 13;

//         console.log(a,b)
//     }
//     inner()
//     console.log(a,);
// }

// outer()


//                                                      closure in javascript

// function outer() {
//     var num = 10

//     function inner() {
//         console.log(num);
//         num++
//     }
//     return inner
// }

// const fn = outer()

// fn()
// fn()


//                                                     functions as values

// var foo = function bar() {
//     return 5
// }

// ba

// console.log(fn)


//               Immediatw Invoked Function Expressions

(function bar(){
    console.log('it is IIFE')
})()

