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


function add(...args){
    console.log(args)
    let out = 0;
    for(i=0;i<args.length;i++){
        out += args[i]
    }
    return out
}

add(2,5,7)
VM105:2 (3) [2, 5, 7]
14
add(2,5,7,3)
VM105:2 (4) [2, 5, 7, 3]
17

var a = [1,3,4]
var b = [4,5,6]
undefined
var a = [1,3,...b,4]
undefined
a
(6) [1, 3, 4, 5, 6, 4]



function add(...args){
    console.log(args)
    let out = 0;
    for(i=0;i<args.length;i++){
        out += args[i]
    }
    return out
}

var input = [1,2,3,4]
add(...input)
10

var a = [5,8,3,6,1,9,4,7]
a.map((data) => {return data*2})

[10, 16, 6, 12, 2, 18, 8, 14]

var a = [5,8,3,6,1,9,4,7]
a.filter((data) => {return data>5})
[8, 6, 9, 7]


//// string literal
//es5
var a = 10;
var b = "my age is "+a;
"my age is 10"

//es6
var a = 10;
var b = `my age is ${a}`
"my age is 10"