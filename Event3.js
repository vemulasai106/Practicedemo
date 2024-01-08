//using literals
/*let obj = {
    fname:"shiva",
    age:30,
    hob:'cricket'

}
console.log(obj);
//using Function
function obj2(fname,age,education)
{
    this.fname = fname;
    this.age = age;
    this.education = education;
}
console.log(obj2);
let obj3 = new obj2('kumar',30,'phd')
console.log(obj3);
//Methods
let obj4 = {
    fname:"sai",
    age:22,
    hob:'cricket'
}
console.log(obj4);
console.table(obj4);
console.log(Object.seal(obj));
console.log(obj.skill="ppl skill");
console.log(obj.hob="swim");
console.table(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(Object.freeze(obj));
console.log((obj.fname="HUMAN"));
console.table(obj)

let obj5 = {
    fname:"marker",
    brand:'cameling',
    price:30,
    color:'red'
}
console.log(obj5);
console.table(obj5);
console.log(Object.seal(obj));
console.log(obj.design="rosi");
console.table(obj);


let source = {
    profession:"CT",
    location:"HYDERABAD"
}
console.log(Object.assign(obj,source,object));
console.table(obj);*/

//using Array Literal [].
let arr = [50,40,30,20]
console.log(arr);
//using Array() with new keyword
let arr1 = new Array(50,40,30,20)
console.log(arr1);
//Example to store multiple values
let arr2 = ['ak',30,undefined,null,true,NaN]
console.log(arr2);
//Methods in array
//length
let arr3 = [20,30,40,50,60]
console.log(arr3.length);
//push
let arr4 = arr.push(70)
console.log(arr4);
console.log(arr);
//pop
let arr5 = arr.pop()
console.log(arr5);
console.log(arr);
//shift()
//unshift()
//indexOf()
//includes()
//slice()
  let arr6 = [10,20,30,40,50]
  console.log(arr)
  let arr7 = arr.splice(1,3,2595,"humans",28)
  console.log(arr7);
  console.log(arr);
//splice()
//for-in
//for-of
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
for(let a in arr){
    console.log(a);
}
for(let b of arr){
    console.log(b);
}
//for-each
arr.forEach((b,a)=>{
    console.log(`${a}${b}`);
})
//map
let d = [10,20,30,40,50,60]
console.log(d);
//flat
let d1 = [[[[[[[[[[[[[[05]]]]]]]]]]]]]]
console.log(d1.flat(15));
//filter
let arr8 = d.filter((a)=>{
    return a > 40
})
console.log(arr);