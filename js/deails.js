var num=0;
var h=0;
var divs=document.getElementById('divs');
var wrap=document.getElementById('divs').children;
console.log(wrap.length)

var timer;

var h=0;
  function tim(){
    timer=setInterval(function(){
        h+=18;
        if(h>=wrap.length*18){
            h=0;
            divs.setAttribute('style','transition:transform '+0+'s');
        }else{
            divs.setAttribute('style','transform:translateY('+-h+'vh)');
        } 
    },3000);
  }
  tim()
