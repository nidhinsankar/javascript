document.querySelector('.heading').innerHTML = "prototype and prototypal inheritance"

let arr = ["nidhin","akshay"]

let obj1 = {
    name:'nidhin',
    age:23,
    sayMyName:()=>{
        console.log()
    }
}

Function.prototype.callMyName = function (params) {
    console.log("saying my name")
}

function fun(){}

fun.prototype.foo = "bar"

Array.prototype.one = function (){
    console.log('one in here')
}

let obj2 = {
    name:"sankar",
}

Object.prototype.sayingName = function (){
    console.log('saying name in here')
}

Object.prototype.linkName = "linking link in here"

obj2.__proto__ = obj1 