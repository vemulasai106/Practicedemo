console.log("DOM");
document.write("Which will just print the next on UI")
document.writeln("Noon")
document.writeln("Moon")
document.writeln("Sun")
document.writeln("Star")
document.writeln("Kids play")
//prompt()
//alert
//Direct acess Methods
//adding css an idea
let d = document.links
console.log(d);
d[2].style.backgroundColor="tomato"
d[1].style.backgroundColor="gray"
d[0].style.backgroundColor="blue"
d[0].style.border="5px solid yellow"
d[1].style.border="5px solid pink"
d[2].style.border="5px solid green"
let b = document.body
console.log(b);
console.log(window.document);
document.body.style.backgroundColor="aqua"
document.body.style.backgroundColor="skyblue"
document.writeln("Yash is a very bad boy")
document.writeln("Hyderabad is a developing metropolitan city")
console.log("Iam still waiting on city")
//Indirect Methods in js.

let id=document.getElementById("demo")
console.log(id);
let c1 = document.getElementsByClassName("box")
console.log(c1);
let tag = document.getElementsByTagName("p")
console.log(tag);
let q = document.querySelectorAll("#demo")
console.log(q);