
let count=203800000000;
//set local variable in JS
//localStorage.setItem('count', count);
//get local variable set before
//console.log(localStorage.getItem('count'));

let counterDisplay=document.getElementById('counter');

let countUp=733;
//increase count each second

setInterval(function(){
    count=parseInt(localStorage.getItem('count'))+countUp;
    localStorage.setItem('count', count);
    counterDisplay.innerHTML=count.toLocaleString("en-US");
},1000);












    


