/*console.log("Higher Order");
function operation(a,b,task){//operation is higher order function
    let result=task(a,b)//task is call back function
    return result
}
let res = operation(20,50,function(a,b){//PASSING ARGUMENTS TO OPERATION()
    return a+b;
})
let res1 = operation(20,50,function(a,b){
    return a/b;
})
console.log(res);
console.log(res1);
document.write("This is a higher order functions");*/
//Js program to perform add,mul,sub and div by accepting two inputs using prompt()??
/*var a = 10;
var b = 20;
let c = Number(prompt("enter number 1"))
let d = Number(prompt("enter number 2"))
let e = Number(prompt("enter number 3"))
let f = Number(prompt("enter number 4"))
let res = a+b;
let res1 = a*b;
let res2 = a-b;
let res3 = a/b;
console.log(res);
console.log(res1);
console.log(res2);
console.log(res3);*/

/*var b = 20;
function test(){
    var b = 30;
    console.log('from test'+b)
    console.log(this.b);
}
test();
var name = "Sai";
var city = "Hyderabad";
function display(name){
    console.log(`${name} belongs to ${city});
}*/
/*function operation(a,b,task){//operation is higher order function
    let result=task(a,b)//task is call back function
    return result
}
let res = operation(20,50,function(a,b){//PASSING ARGUMENTS TO OPERATION()
    return a+b;
})
function operation(a,b,task){//operation is higher order function
    let result=task(a,b)//task is call back function
    return result
}
let res1 = operation(20,50,function(a,b){//PASSING ARGUMENTS TO OPERATION()
    return a+b;
})
let res2 = operation(20,50,function(a,b){
    return a/b;
})
let res3 = operation(20,50,function(a,b){
    return a*b;
})
let res4 = operation(20,50,function(a,b){
    return a-b;
})
console.log(res);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);*/

/*var arr = [5,6,7,8,9];
function square(arr){
    square = []
for(ele of arr){
  let res = ele*ele;
  square.push(res);
}
return square
}
function cube(arr){
    cube = []
    for(ele of arr){
        let res = ele*ele*ele;
        cube.push(res);
    }
    return cube
}
let x = square(arr)
console.log(x);
let y = cube(arr)
console.log(y);*/
var arr = [4,5,6,7,8];
function square(num){
    return num*num;
}
function cube(num){
    return num*num*num;
}
function anyoperation(arr,operation){
    let res = []
    for(ele of arr)
        res.push(operation(ele))
        return res;
}
let x = anyoperation(arr,square)
console.log(x);
let y = anyoperation(arr,cube)
console.log(y);