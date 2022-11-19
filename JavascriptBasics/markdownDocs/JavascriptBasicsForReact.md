#   BASICS CONCEPTS IN JAVASCRIPT

## LET
 - LET is the improved version of the var keyword
 - block scoped . It can't be accessible outside particular block


 ```javascript
    let a = 10;
    function f(){
        if(true) {
            let b= 8;

            // it prints 8
            console.log(b)
        }

        //it gives an error because it is declared inside if statement
        console.log(b);

    }
    f()

    // it prints 10
    console.log(a)
 ```

 ## CONST   
 - CONST keyword has all the properties from let keyword except the user cannot update it
 - CONST has to be initialized at the time of the declaration,otherwise it returns an error

```javascript

    const a = 10;

    function f() {
        a = 9;

        // returns an error stating that assignment to const variable
        console.log(a)
    }
```


## VAR

- VAR it is the oldest varible used to decaalre a variable
- it is global and function scope
- if var is used inside a function then it is function scope. if var keyword declared outside the function it is global scope

```javascript

    var a = 10;

    fucntion f() {
        var b = 11;

        //prints 10
        console.log(a)
    }

    // returns an  error. it is not accessible outside  the function scope
    console.log(b)
```

## DATATYPES 

  ### PRIMITIVE DATATYPES

  - NUMBER = 2, 4.4, 345
  - STRING = "Hello World"
  - BOOLEAN = true,false
  - NULL = represents no value at all
  - UNDEFINED = a variable that has not been assigned a value is undefined
  - SYMBOL = used as an identifier for object properties

  ### NON PRIMITIVE DATATYPES
  - OBJECT = instance through which we can access members
  - ARRAY = groups of similar values 
  - REGEXP = represents regular expression


# ARROW FUNCTION

```javascript
   const FunctionName = (parameters) => {
        //statements
        //statements
        //statements
   }
```

# DESTRUCTING 

- it is a process of javascript expression which makes it easy to unpack values from an array or object

```javascript
   let [a,b] = [20,30]
   //prints 20
   console.log(a)
   //prints 30
   console.log(b)
   let {a,b} = {10,40}
    // prints 10
   console.log(a)
   // prints 40
   console.log(b)
```

# SPREAD OPERATOR 

- It allows an iterable likw array or string as an array expansion or string to be expanded in places where zero or more arguments

```javascript
   function myFunction(d,f,g) {
        return d,f,g
   }

   let arr = [4,5,6]
   const numbers =  myFunction(...arr)
```

# TEMPLATE LITERALS

# OBJECT PROPERTY SHORTHAND

# REST OPERATOR

# IMPORT AND EXPORT

# PROMISES

# LOGICAL AND ASSIGNMENT