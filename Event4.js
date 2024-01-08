/*var a = 10;
var a = 20;
console.log(a);
let b = 30;
let c = 10;
console.log(b);
console.log(c);
const d = 60;
console.log(d);
const e = 50;
console.log(e);
console.log("Start");
console.log(test)
function test(){
  console.log("Hello");
}
console.log("End");
let a = 10;
let b = 20;
function sum(a,b){
console.log(a+b);
}
sum(-10+3,-20);
sum(10,20)
var a = function(){
    console.log("human");
}
console.log(a);
var city = "Hyderabad";
function display(name){
    console.log(`${name} belongs to ${city}`)
}
display('dinga');
var b = 20;
function test(){
    console.log('from test'+b)
    console.log(this.b);
}
test();
function operation(a,b,task){
    let res = task(a,b);
    return res;
}
let res = operation(10,20,function(a,b){
    return a+b;
})
function operation(a,b,task){
    let result = task(a,b);
    return result;
}
let res1 = operation(10,20,function(a,b){
    return a+b;
})
let res2 = operation(10,20,function(a,b){
    return a-b;
})
let res3 = operation(10,20,function(a,b){
    return a*b;
})
let res4 = operation(10,20,function(a,b){
    return a/b;
})
let res5 = operation(10,20,function(a,b){
    return a%b;
})
console.log(res);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);*/

const sum = (a,b)=>a+b;
console.log(sum(10,20))
const product = (a,b)=>a*b;
console.log(product(10,20))
const remainder = (a,b)=>a%b;
console.log(remainder(10,20))
const difference = (a,b)=>a/b;
console.log(difference(10,20))