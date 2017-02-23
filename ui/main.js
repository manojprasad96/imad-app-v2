console.log('Loaded!');
var element1=document.getElementById('txt');
element1.innerHTML='Hai this is client';
var img=document.getElementById('imag');
var margin=0;
img.onclick= function (){
    for(i=0;i<5;i++){
        margin=margin+10;
        img.style.marginLeft=margin+'px';
    }
    for(i=0;i<5;i++){
        margin=margin+10;
        img.style.marginRight=margin+'px';
    }
};