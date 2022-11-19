# JAVASCRIPT BASICS BY GEEKS FOR GEEKS

## ALERTS,PROMPTS AND CONFIRM BOX :

1. An alert box is used in the website to show a warning message to the user that they have entered the wrong value other than what is required to filled in that position. Nonetheless, an alert box can still be used for friendlier messages. Alert box gives only one button "OK" to select and proceed.

```javascript
<!DOCTYPE html>
<html>
<head>
        
    <script type="text/javascript">
            function Warning() {
            alert ("Warning danger you have not filled everything");
            console.log("Warning danger you have not filled everything");
            }
    </script>
    
</head>
<body>
    
<p>Click me </p>

    <form>
        <input type="button" value="Click Me" onclick="Warning();" />
    </form>
    
</body>
</html>
```

2. A confirm box is often used if you want the user to verify or accept something. When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed. If the user clicks on the OK button, the window method confirm() will return true. If the user clicks on the Cancel button, then confirm() returns false and will show null.

```javascript
<!DOCTYPE html>
<html>
<head>
    
    <script type="text/javascript">

            function Confirmation(){
            var Val = confirm("Do you want to continue ?");
            if( Val == true ){
                console.log(" CONTINUED!");
                return true;
            }
            else{
                console.log("NOT CONTINUED!");
                return false;
            }
            }

    </script>
    
</head>
<body>

<p>Click me: </p>
    <form>
        <input type="button" value="Click Me" onclick="Confirmation();" />
    </form>
    
</body>
</html>
```

3. A prompt box is often used if you want the user to input a value before entering a page. When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value. If the user clicks the OK button, the window method prompt() will return the entered value from the text box. If the user clicks the Cancel button, the window method prompt() returns null.

```javascript
<!DOCTYPE html>
<html>
<head>
    
    <script type="text/javascript">
        
            function Value(){
            var Val = prompt("Enter your name : ", "name");
            console.log("You entered : " + Val);
            }

    </script>
    
</head>
<body>
<p>Click me: </p>
    <form>
        <input type="button" value="Click Me" onclick="Value();" />
    </form>
    
</body>
</html>
```

## VARIABLES IN JAVASCRIPT :
 
 1. Before ES2015 we mostly used var keyword to declare the variable in javascript code
 
 1. But After ES2015 we can use two new varibles they are let and const

 1. let keyword is same as var keyword but it has some constraints other that var 
 1. const is only used when the varible value need to be chnaged by the program
 

 ## REGULAR EXPRESSIONS

        ^: Indicates the start of a string/line
        \d: Finds any digit
        [abc]: Finds any character between the brackets
        [^abc]: Finds any character not between the brackets
        [0-9]: Finds any digit between the brackets
        [^0-9]: Finds any digit not between the brackets
        (x|y): Finds any of the alternatives specified