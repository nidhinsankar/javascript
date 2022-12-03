document.querySelector('.heading').innerHTML = "JS BASICS"


function three(params) {
    // var a = "three";
    var a;
    console.log(a);
}

function two(params) {
    var a = "two";
    console.log(a)
    three()
}

function one(params) {
    var a = "one";
    console.log(a);
    two()
}

// one()

function big(params) {
    function little(params) {
        return "it is me"
    }
    return little()
    function little(params) {
        return "no me"
    }
}

console.log(big())