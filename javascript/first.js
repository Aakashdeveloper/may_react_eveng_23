String = "Hii" 'hey' `Test`  "67" 'true' 'jhg7yguy'
Number = 78   7  87867678 88.77 .89
Boolean = true false

//es5 > Ecma Script

var a = 10
var b = "Hii"
var c = true

var > we can redeclare and reassign both
let > we cannot redeclare but can reassign
const > we cannot redeclare nor reassign

var a = 10

var a // declare
a = 10 // assignment

> var a = 10
> a
10
> var a = 11
> a
11
> a = 12
12
> a
12
> 

> let b = 20
undefined
> b
20
> let b = 21
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 21
21
> 

> const c = 10
undefined
> c
10
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11
Uncaught TypeError: Assignment to constant variable.



/////////////////////////
//es5
function add(a,b){
    return a+b
}

add(1,2)
3
add(4,9)
13

//es6
let add1 = (a,b) => {return a+b}
add1(3,9)
12
add1(1,8)
9

function add(a,b){
    return a,b
}

add(5,1)