//Example 1:-using console.
function demo(){
    console.log("Hello JNTU")
}
demo();
//--------------
function cal(m,n){
    const o = m-n;
    return o;
}
console.log(cal(50,30));
//--------------
function cal1(l,k){
    const j = l*k;
    console.log(j);
}
//---Function with expression
//Example:- using console.
var exp = function(){
console.log("Hello JNTU");
console.log("Function Expression");
}
exp();
//----------
var call=function(m,n){
    const o = m-n;
    return o;
}
console.log(call(50,30));
//------------
var call1 = function(l,k){
   const j = l*k;
   console.log(j);
}
call1(50,30);
//--------------Arrow Function in js: it was introduced to reduce the syntax:-
//(parameter1,parameter2)==>{expressions}
//Implicit Return
//without using 'return'
let arr1 = (x,y) =>
console.log(arr1(20,300));
//create a higher order function  using arrow function.......??????
//Explicit Return
let arr = (a,b) =>{
    let c = a*b;
    return c;
}
console.log(arr(20,30));
//-----------------
const hel = ()=>
{
    console.log("what the hell on earth");
}
hel()
//function operation(a,b,task){
   // let result = task(a,b)
    //return result
//}

