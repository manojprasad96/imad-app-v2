console.log('Loaded!');
var element1=document.getElementById('txt');
element1.innerHTML='Hai this is client';
var img=document.getElementById('imag');

var marginLeft=0;    
var marginRight=0;

function moveLeft(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}

function moveRight(){
    marginRight=marginRight+1;
    img.style.marginRight=marginRight+'px';
}

img.onclick= function (){
     var Interval1=setInterval(moveLeft,50);
     var Interval2=setInterval(moveRight,50);
     
};