//play or pause
/*let video = document.querySelector("#video")
console.log(video);
function play(){
   let playorpause = video.classList.toggle("play")
   if(playorpause){//element.classList dom tokens[ex:- add or remove]
    video.play()
   }
   else{
    video.pause
   }
}
let video1 = document.querySelector("#video1")
console.log(video1);
function play(){
    let playorpause = video.classList.toggle("play")
    if(playorpause){
        video.play()
    }
    else{
        video.pause
    }
}
let bttn = document.getElementById("btn")
console.log(bttn);
function bttn1(){
    let playorpause = bttn.classList.toggle("play")
    if(playorpause){//element.classList dom tokens[ex:- add or remove]
        video.play()
        bttn.textContent="play"
    }
    else{
        video.pause()
        bttn.textContent="pause"
    }
}*/
let tab = document.createElement("table")
console.log(tab)
tab.setAttribute("border","5px")
let tr1=document.createElement("tr")
let td1=document.createElement("td")
td1.textContent="ID"
tab.appendChild(tr1)
tr1.appendChild(td1)
document.body.appendChild(tab)

let td2=document.createElement("td")
td2.textContent="Name"
tab.appendChild(tr1)
tr1.appendChild(td2)

let td3=document.createElement("td")
td3.textContent="Rollno"
tab.appendChild(tr1)
tr1.appendChild(td3)

let td4=document.createElement("td")
td4.textContent="Qualification"
tab.appendChild(tr1)
tr1.appendChild(td4)
//table1
let tr2=document.createElement("tr")
let td5=document.createElement("td")
td5.textContent="1001"
tab.appendChild(tr2)
tr2.appendChild(td5)
document.body.appendChild(tab)

let td6=document.createElement("td")
td6.textContent="Sai"
tab.appendChild(tr2)
tr2.appendChild(td6)

let td7=document.createElement("td")
td7.textContent="10"
tab.appendChild(tr2)
tr2.appendChild(td7)

let td8=document.createElement("td")
td8.textContent="B.S.C(Comp)"
tab.appendChild(tr2)
tr2.appendChild(td8)
//table2
let tr3=document.createElement("tr")
let td9=document.createElement("td")
td9.textContent="1002"
tab.appendChild(tr3)
tr3.appendChild(td9)
document.body.appendChild(tab)

let td10=document.createElement("td")
td10.textContent="Kiran"
tab.appendChild(tr3)
tr3.appendChild(td10)

let td11=document.createElement("td")
td11.textContent="15"
tab.appendChild(tr3)
tr3.appendChild(td11)

let td12=document.createElement("td")
td12.textContent="B.Com(Comp)"
tab.appendChild(tr3)
tr3.appendChild(td12)

//table3
let tr4=document.createElement("tr")
let td13=document.createElement("td")
td13.textContent="1003"
tab.appendChild(tr4)
tr4.appendChild(td13)
document.body.appendChild(tab)

let td14=document.createElement("td")
td14.textContent="Tapaswi"
tab.appendChild(tr4)
tr4.appendChild(td14)

let td15=document.createElement("td")
td15.textContent="20"
tab.appendChild(tr4)
tr4.appendChild(td15)

let td16=document.createElement("td")
td16.textContent="B.tech(CSE)"
tab.appendChild(tr4)
tr4.appendChild(td16)
//table4
let tr5=document.createElement("tr")
let td17=document.createElement("td")
td17.textContent="1004"
tab.appendChild(tr5)
tr5.appendChild(td17)
document.body.appendChild(tab)

let td18=document.createElement("td")
td18.textContent="siri"
tab.appendChild(tr5)
tr5.appendChild(td18)

let td19=document.createElement("td")
td19.textContent="25"
tab.appendChild(tr5)
tr5.appendChild(td19)

let td20=document.createElement("td")
td20.textContent="B.tech(ECE)"
tab.appendChild(tr5)
tr5.appendChild(td20)


