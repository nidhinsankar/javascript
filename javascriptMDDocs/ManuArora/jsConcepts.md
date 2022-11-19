# ACE THE JAVASCRIPT INTERVIEW - MANU ARORA

## ARRAY METHODS 
 - [`map()`](#map)
 - filter()
 - reduce()
 - forEach()
 - find()

 ### MAP

 map() method iterates over an array and returns a new array based on the condtion provided

EXAMPLE
```javascript
const numbers = [2.4,6,3,1]
const newArray = numbers.map(elem => elem * 2)
console.log(newArray) // 4,8,12,6,2
```

### FILTER
 filter() method iterates over an array and filter outs element based on the condition provided

 EXAMPLE 
 ```javascript
const numbers = [1.2.3.4,5]
const newArray = numbers.filter(elem => elem > 2)
console.log(newArray) // 3,4,5
 ```
### REDUCE
reduce is one most powerful array method in javascript. It can be used to reduce the elements of an array to a single element. Values get accumulated over each iteration and at last we are left out with single value or element

EXAMPLE
```javascript
const numbers = [3,4,5,7]
const newArray = numbers.reduce((last,current) => current+last)
console.log(newArray) // 19
```

### FOREACH 
forEach() method is one of the simplest method it simply iterates over an array and performs the given condition on the array . It does not return an array

EXAMPLE
```javascript
const numbers = [1,2,3,4,5,6]
const newArray = numbers.forEach(elem => elem * 2)
console.log(newArray) // 2,4,6,8,10,12
```

### FIND
find() method is used to find an element in an array based on the condition provided and returns the first matching element in the array

```javascript
const numbers = [2,4,5,12,45]
const findElement = numbers.find(elem => elem === 45)
console.log(findElement) // 45
```


---

## VARAIBLE DECLARATIONS
 - var
 - let
 - const

 ### VAR:
  - var is globally or function scoped - meaning it is accessible throughout your script or within a function.
  - var can be re-declared and re-updated .Even it can be declared without initialization.

  ```javascript
  function printName(){
    var text = "hello world"
  }
  console.log(text) // throws an error because it is functional scope

  var text = "aravainf"
  var text = "arravonf again"
  var text  // valid 
  ```

  ### LET:
  - let is now the preferred way of declaring and initialization  the variables in javascript
  - let is block scoped . a block of code written inside the {}.variables defined by let are only accessible by that block of code
  - let can be updated but cannot be re-declared  within the same scope but in different scope there will no error

  ```javascript
    let text = "hello world"
    let text = "hello world again"
    console.log(text) // error comes

    let text = "Hi Manu";
    if (true) {
        let text = "Hello Paaji!";
        console.log(text); // "Hello Paaji!"
    }
    console.log(text); // "Hi Manu"

  ```
 ---
## HOISTING
---

## EQUALITY AND STRICT EQUALITY (== && ===)
---
## this KEYWORD
---
## CALL, APPLY , BIND
---
## STORAGE
 - LOCAL STORAGE
 - SESSION STORAGE
---
## TIMERS
 - setTimeout()
 - setInterval()
---
## PLOYFILLS
---
## EVENT LOOP
---
## PROMISES 
---
## ASYNC AND AWAIT
---
## CLOSURE
---
## PROTOTYPES
---
## DEBOUNCING
---
## THROTTLING
