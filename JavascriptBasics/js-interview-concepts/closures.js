document.querySelector('.heading').innerText = "Closures"

// function multiply(x){
//     return function(y){
//         console.log(x * y);
//     }
// }

// let multiplyByTwo = multiply(2)

// multiplyByTwo(7)


// function firstFunc(params) {
//     console.log('first func');
// }

// function secondfunc(params) {
//     console.log('second func line 1')   
//     firstFunc()
//     console.log('second func line 2')   
// }

// secondfunc()

var name = "nidhin"

function argFun(num1,num2) {
    console.log(arguments);
    // console.log(this)

    function topaz(params) {
        console.log(globalThis);

        function a(params) {
            console.log(globalThis);
        }
        a()
    }
    topaz()
}
// console.log(this);
argFun()


/**
 * block scope
 */

if(5 > 1){
    let secret = "nidhin"
}

console.log(secret);