document.querySelector('.heading').innerHTML = "CALL STACK"


function one() {
    return 1
}

function two(){
    return one() + 1
}

function three() {
    return two() + 1
}

console.log(three())