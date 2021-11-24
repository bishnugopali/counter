
let count=203800000000;


let counterDisplay=document.getElementById('counter');

let countUp=733;
//increase count each second
setInterval(function(){
    count=count+countUp;
    counterDisplay.innerHTML=count.toLocaleString("en-US");

},1000);










    


