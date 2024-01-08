
/*console.log("start");
var a;
    a=10;
console.log(a);
var b=90;
var b=100;
console.log(b);
let x=20;
console.log(x);
const o=50;
console.log(o);
var b;
console.log(b);
var b=10;
    b="hello";
    console.log(b);
    let b1=50;
    console.log(b1);
    const d=10;
    console.log(d);
    console.log(a);
    console.log(b);
    var a=10;
    console.log(a);
    var b=20;
    console.log(b);
    var i=20;
    var j=30;
    console.log(i);
    console.log(j);
    console.log("end");
document.write("Hello world");
document.write("javascript is object based language");
console.log("javascript is object oriented language");*/
//Implicit..............
console.log(20 + 10);
console.log(20 + '10');
console.log(20 + 'a');
console.log(20 - 5);
console.log(20 - '5');
console.log(typeof NaN);
console.log(typeof nan);
console.log(typeof null);
console.log(typeof true);
console.log(typeof false);
//Explicit.............
console.log(20 + Number("10"));
console.log(20 + String(10));
console.log(Boolean(1));
console.log(Boolean(0));
//Ex:-
var num1 = 10;
var num2 = 20;
console.log(num1 + num2);
//......Using of backtick.......
var demo = "List of demos"
technical:"FE"
Location:"jntu"
pg : "MSC"
country:"India";
console.log(demo);

//Ex:-2 some methods in console.
console.table({name:"human",age:"null",state:"Ts"});
//console.clear();//is used to clear the console window.
//console.error("User can create a custom error");
//console.warn("Custom warning msg on console");

var hob = "my hobbies"
"swimming"
"cycling"
"running"
"travel"
console.log(hob);
//+operator:- concat,when one operand as string or behaves like a concat operator if the operand is a string .
//Note:- The string represented using backtick is also known as , "Template String".
//The Advantage of template String is we can substitute an expression in a string using ${expression}.

//.............Using backtick or template string............
var names = "Sai";
var age = 22;
var pg = 'BSC(Computers)';
console.log(`I'm ${names} and I'm ${age} my degree${pg}`)
console.log("I'm ${names} and I'm ${age} my degree${pg}")
//for jumping to next line in the console use \n (backslash n)
console.log("My name is: \n Tapaswi");
//with variables.
var str = "I Love My Country:\n INDIA"
console.log(str);
//Note:-
//1.In javascript all non-zero numbers are compared as true.
//2.Number 0,null,NaN--(empty string),undefinedin all these values are considered as false,when they are converted in boolean.
//3.A non-empty string is considered as true.
//.......Implicit.......
console.log(5- "1");
//the string is converted to number, result is 4.
console.log(5+ '1');//51
//the number 5 is converted to string, result is 51.
console.log(5- 'a')//NaN
//The string is converted to number, the string does not have a numeric value,
//Hence it is converted to a special number NaN.
//Note:-two NaN's never considered as the same.
console.log(NaN==NaN)//false
//.......Explicit Type Casting............
//The process of converting one type of value to another type of value is known as [ETC].
//1.conversion of any type to number.
//1.if a string is valid number we get the real number
console.log(Number('123'));//123
//2.if the string consist of any other character then we get NaN as the output.
console.log(Number('m'));//Nan
//3.boolean to a number
console.log(Number(false));//0
console.log(Number(true));//1
//program to print your details, name,age aggreate,pg on browser console.
