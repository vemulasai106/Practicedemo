//IIFE
/*let demo = (function(){
    console.log("Example");
})()
//IIFE with arrow function
let demo1 = (()=>{
    console.log("Example 2");
})()
//nested functions.
//
var a = "jntu";
function parent(){
    var a = "KPHB"
    function child(){
        console.log(a);
        console.log(this.a);

        console.log("inner child");
        function child1(){
            console.log("Some statements to higher child");
        }
        return child1
    }
    return child;
}
parent()()()
let sai = (function(){
    console.log("Sai was Coaching at jspiders jntu branch");
})
sai()
var c = "jspiders";
function parent(){
    var c = "coaching"
    function child(){
        console.log(c);
        console.log(this.c);
        console.log("inner child");
        function child1(){
            console.log("Hyderabad is a developing metropolitan city");
        }
        return child1;
    }
    return child;
}
parent()()()*/
//normal function
/*function add(a,b){
    return a+b
}
console.log(add(5,6))
//used arrow function
let square = c=>c*c
console.log(square(5))

var sum = (a,b)=>{
    console.log(a+b)
}
sum(6,5)*/

const sum = (a,b)=>a+b;
console.log(sum(10,20))
const product = (a,b)=>a*b;
console.log(product(10,20))
const remainder = (a,b)=>a%b;
console.log(remainder(10,20))
const division = (a,b)=>a/b;
console.log(division(10,20))

let a = ()=>{
    console.log("hello")
}
a();
function outer(){
    function inner(){
    }
    return inner;
}
outer()()
let b = 10;
function test(){
  ++b
  console.log(b)
}

let c = 10;
function x(){
    let d = 20;
    function y(){
        console.log(d);
        console.log(c);
    }
    return y;
}
x()()