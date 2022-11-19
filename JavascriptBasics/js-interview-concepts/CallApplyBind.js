
let name = {
    firstName:"Nihin",
    lastName: "Sankar",
   
}

let getFullName = function(state){
    console.log(this.firstName + " "+ this.lastName + " from "+state);
}

let name2 = {
    firstName:"Araind ",
    lastName:"oumar"
}

getFullName.call(name,'Chennai')

getFullName.apply(name2,['States'])


let printMyName = getFullName.bind(name2,"America")

printMyName()