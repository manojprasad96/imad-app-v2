console.log('Loaded!');
var element1=document.getElementById('txt');
element1.innerHTML='Hai this is client';
var img=document.getElementById('imag');

var marginLeft=0;    

function moveLeft(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}

img.onclick= function (){
     var interval=setInterval(moveLeft,50);
     
};