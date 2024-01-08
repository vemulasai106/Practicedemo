/*function getcube(){
    var num = document.getElementById("number").value;
    alert("The answer is: "+num*num*num);
}
function printvalue(){
        var name1 = document.form1.urname.value;
        alert("Welcome" + name1);
    }*/

    /*let d = document.body.innerHTML="<h1>hello1 there is from js file</h1>"
    console.log(d);
    let d1 = document.body.innerHTML+="<h1>Write something</h1>"
    console.log(d1); 
    let d2 = document.body.innerHTML+=" "
    console.log(d2);
    //--------create element----------------
    let list = document.createElement("ol")
    console.log(list);
    let li = document.createElement("li")
    li.textContent="first list"
    console.log(li);
    list.append(li)
    document.body.append(list)
    let li1 = document.createElement("li")
    li1.textContent="Second list"
    list.append(li1)
//create a table-------
let tab = document.createElement("table")
let tr = document.createElement("tr")
let td = document.createElement("td") 
td.textContent="table Data"   
document.body.append(tab)//add your table to body tag.
tab.append(tr)
tab.append(td)

tab.border="2px"
tab.style.border="2px solid red"*/

/*let h = document.getElementById("h1change")
console.log(h);
h.textContent="this change is from js file"
let i = document.body.innerHTML +="<h1>And Add a Content With</h1>"
let i1 = document.body.innerHTML +=" "
console.log(i1);
console.log(i);*/
/*let list = document.createElement("ul")
let li = document.createElement("li")
li.textContent="First Unorder"
console.log(list);
list.append(li);
document.body.append(list)
let li2 = document.createElement("li")
li2.textContent="Second Unordered"
list.appendChild(li2)
//TABLE----------
let tab = document.createElement("table")
let tr = document.createElement("tr")//first row
let td = document.createElement("td")//first column
tab.style.backgroundColor="gray"
td.textContent="DATA1"
tr.append(td)
console.log(tab);
tab.append(tr)
document.body.appendChild(tab)
//column2--------
let td1 = document.createElement("td")//column2
tr.appendChild(td1)
tab.setAttribute("border","5px")
tab.setAttribute("cellpadding","10px")
tab.setAttribute("cellspacing","10px")
console.log(tab);
//img1
let img = document.createElement("img")
//img.src="https://images.pexels.com/photos/5940831/pexels-photo-5940831.jpeg?auto=compress&cs=tinysrgb&w=600"
img.setAttribute("src","./tour1.webp")
td.append(img)
img.style.height="150px"
img.style.borderRadius="50%"
//img2
let img1 = document.createElement("img")
//img1.src = "https://images.pexels.com/photos/9660916/pexels-photo-9660916.jpeg?auto=compress&cs=tinysrgb&w=600"
img1.setAttribute("src","./tour1.webp")
td1.append(img1)
img1.style.height="150px"
tab.border="5px"*/

function test(){
    console.log("will perform only when button is clicked");
}
//----color----
    let btn = document.querySelector("#btn")
    console.log(btn);//targetting the button tag with it ID ="" name
    let a = window.prompt("Enter any color value");
    btn.innerHTML += a;
     //Merging the btn and prompt to store the content in button.
    function color(){//passing the data entered in to prompt box.
        document.body.style.backgroundColor=`${a}`
        //with the help of template string passing the variable 'a' to make sure
        //expression is working.  
    }
    //--------WINDOWN--------
     console.log(window);
    console.log(window.navigator.vendor)
    console.log(window.navigator.userAgent);
    console.log(window.navigator.mediaDevices.getDisplayMedia);
    // //----------Share Screen-------------
     function share(){
        window.navigator.mediaDevices.getDisplayMedia()
    }
    //--------OTP RANDOM OTP--------
    //Math.random()*500 :-Creates decimal value between Number.
    //Math.floor() :- Makes the round off,[decimal values generated]
    //both methods are used to perform mathematical operation.
    let b = Math.random()*500
    console.log(b);
    let a1 = Math.floor(a)
    console.log(a1);
    function  otp(){
        let generate = Math.floor(Math.random()*1000)
        //console.log(generate);
        document.body.style.backgroundColor=`#${generate}`
    }

    function event1(){
        document.getElementById("p1").innerHTML="Hello Welcome to programming tuotorials in telugu";
    }
    function event2(){
        document.getElementById("p1").innerHTML="Welcome to javascript event tuotorials";
    }


