
// function multiply(x){
//     return function(y){
//         console.log(x * y);
//     }
// }

// let multiplyByTwo = multiply(2)

// multiplyByTwo(7)


function firstFunc(params) {
    console.log('first func');
}

function secondfunc(params) {
    console.log('second func line 1')   
    firstFunc()
    console.log('second func line 2')   
}

secondfunc()

