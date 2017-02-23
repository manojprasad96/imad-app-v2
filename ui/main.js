console.log('Loaded!');
var element1=document.getElementById('txt');
element1.innerHTML='Hai this is client';
var img=document.getElementById('imag');

var margin=0;    

function moveLeft(){
    margin=margin+1;
    img.style.marginLeft=margin+'px';
}

img.onclick= function (){
     var interval1=setInterval(moveLeft,50);
     
};