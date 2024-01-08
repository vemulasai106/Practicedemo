let grandparent = document.querySelector("#grandparent")
console.log(grandparent);
let parent = document.querySelector("#parent")
console.log(parent);
let child = document.querySelector("#child")
console.log(child);
//addEventListener("event",()=>{},Boolean)
grandparent.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("grandparent clicked");
},false)
parent.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("parent clicked");
},true)
child.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("child clicked");
},false)

/*function test(m,n){
    setTimeout(()=>{
        for(let i=m; i<=n; i++)
        {
            console.log(i);
        }
    },5000)
}
test(0,"50ba")
function msg(){
    console.log("Message Printed")
}
msg()
//promises in js are nothing but proxy.
function test1(m,n){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(isNaN(m)||isNaN(n)){
            return reject()
        }
        for(let i=m; i<=n; i++){
            console.log(i);
        }
        return resolve()
    },5000)
  })
}
function message(){
    console.log("message printed there")
}
test1(20,500)
.then(message())
.catch(()=>console.log("Hey Humans Error There"))
.finally(()=>console.log("Javascript End"))*/