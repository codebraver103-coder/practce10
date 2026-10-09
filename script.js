let outputsec=document.getElementById('sec');
let outputtens=document.getElementById('tens');
let startbtn=document.getElementById('start');
let stopbtn=document.getElementById('stop');
let resetbtn=document.getElementById('reset');
console.log(startbtn);
console.log(stopbtn);
console.log(resetbtn);
console.log(outputsec);
console.log(outputtens);
tens=0;
sec=0;
function startTimer(){
    tens++
    if (tens<=9){
        outputtens.innerHTML="0"+tens;
    }
    if (tens>9){
        outputtens.innerHTML=tens;
    }
    if (tens>99){
        tens=0;
        outputtens.innerHTML="00";
        sec++
        outputsec.innerHTML="0"+sec;
    }
    if (sec>9){
        outputsec.innerHTML=sec;

    }
}
let myinterval;
startbtn.addEventListener('click',function(){
    clearInterval(myinterval);
    myinterval=setInterval(startTimer,10);
})
stop_1.addEventListener('click',function(){
    clearInterval(myinterval);
})
resetbtn.addEventListener('click',function(){
    tens=0
    sec=0
    clearInterval(setInterval);
    outputsec.innerHTML="00";
    outputtens.innerHTML="00";
})

