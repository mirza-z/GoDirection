var mainMenu = document.getElementById("main-menu");
var igra = document.getElementById("igra");
var opcije = document.getElementById("opcije");
var eksplozija = document.getElementById("eksplodiraj");
var igrac = document.getElementById("igrac");
var objekt = document.getElementById("objekt");

var score = 0;

var topIgrac = 0;
var leftIgrac = 25;
var topObjekt = 200;
var leftObjekt = -30;
    
igrac.style.top = topIgrac + "px";
igrac.style.left = leftIgrac + "px";
objekt.style.top = topObjekt + "px";
objekt.style.left = leftObjekt + "px";

var xDown = null;                                                        
var yDown = null;

function postaviNoviObjekt(direkcija){
    var uslov = getRandomInt(0,2);
    if(direkcija == "dole"){

        if(uslov){
            var  max = topObjekt-80;
            var min = -350;
            topObjekt = getRandomInt(min, max);
            objekt.style.top = topObjekt + "px";
            objekt.style.height = 20 + "px";
            objekt.style.width = 60 + "px";
        } else{
            var  max;
            var min;
            var a = getRandomInt(0, 2);
            if(a){
                max = 160;
                min = leftObjekt+26;
            } else{
                max = leftObjekt-26;
                min = -160;
            }
            leftObjekt = getRandomInt(min, max);
            objekt.style.left = leftObjekt + "px";
            objekt.style.top = topIgrac + "px";
            objekt.style.height = 60 + "px";
            objekt.style.width = 20 + "px";
        }
    }
    
    else if(direkcija == "gore"){
        if(uslov){
            var  max = 350;
            var min = topObjekt+80;
            topObjekt = getRandomInt(min, max);
            objekt.style.top = topObjekt + "px";
            objekt.style.height = 20 + "px";
            objekt.style.width = 60 + "px";
        } else{
            var  max;
            var min;
            var a = getRandomInt(0, 2);
            if(a){
                max = 160;
                min = leftObjekt+26;
            } else{
                max = leftObjekt-26;
                min = -160;
            }
            
            leftObjekt = getRandomInt(min, max);
            objekt.style.left = leftObjekt + "px";
            objekt.style.top = topIgrac + "px";
            objekt.style.height = 60 + "px";
            objekt.style.width = 20 + "px";
        }
    } 
    
    else if(direkcija == "lijevo"){
        if(uslov){
            var  max = 160;
            var min = leftIgrac+100;
            leftObjekt = getRandomInt(min, max);
            objekt.style.left = leftObjekt;
        } else{
            var  max;
            var min;
            var a = getRandomInt(0, 2);
            if(a){
                max = 350;
                min = topObjekt+30;
            } else{
                max = topObjekt+30;
                min = -350;
            }
            
            topObjekt = getRandomInt(min, max);

            objekt.style.top = topObjekt + "px";
            objekt.style.height = 20 + "px";
            objekt.style.width = 60 + "px";
        }
    }

    else if(direkcija == "desno"){
        if(uslov){
            var  min = -160;
            var max = leftIgrac-100;
            leftObjekt = getRandomInt(min, max);
            objekt.style.left = leftObjekt;
        } else{
            var  max;
            var min;
            var a = getRandomInt(0, 2);
            if(a){
                max = 350;
                min = topObjekt+30;
            } else{
                max = topObjekt+30;
                min = -350;
            }
            
            topObjekt = getRandomInt(min, max);
            objekt.style.top = topObjekt + "px";
            objekt.style.left = leftIgrac-55 + "px";
            objekt.style.height = 20 + "px";
            objekt.style.width = 60 + "px";
        }
    }
}

function provjera(direkcija){
    if(direkcija=="dole"){
        if(topIgrac>=topObjekt) return false;
        else if(leftIgrac-55!=leftObjekt) return false;
        else return true;
    }
    else if(direkcija=="gore"){
        if(topIgrac<=topObjekt) return false;
        else if(leftIgrac-55!=leftObjekt) return false;
        else return true;
    }
    else if(direkcija=="desno"){
        if(leftIgrac-55>=leftObjekt) return false;
        else return true;
    }
    else if(direkcija=='lijevo'){
        if(leftIgrac+55<=leftObjekt) return false;
        else return true;
    }
}

function svajpanoDole(){
    
    if(provjera("dole")){
        while(topIgrac+33 != topObjekt){

            igrac.style.top = topIgrac + "px";
            topIgrac++;
        }
        score++;
        console.log(score);
        postaviNoviObjekt("dole");
    }
    else console.log("greska");
    
} 

function svajpanoGore(){
    
    if(provjera("gore")){
        while(topIgrac-33 != topObjekt){

            igrac.style.top = topIgrac + "px";
            topIgrac--;
        }
        score++;
        console.log(score);
        postaviNoviObjekt("gore");
    }
    else console.log("greska");
    
} 

function svajpanoLijevo(){
    
    if(provjera("lijevo")){
        while(leftIgrac-55 != leftObjekt){
                igrac.style.left = leftIgrac + "px";
                leftIgrac--;
        }
        score++;
        console.log(score);
        postaviNoviObjekt("lijevo");
    }
    else {console.log("greska");
    console.log(leftObjekt);
    console.log(leftIgrac);
    console.log(topObjekt);
    console.log(topIgrac);}
} 

function svajpanoDesno(){
    
    if(provjera("desno")){
        while(leftIgrac+55 != leftObjekt){

            igrac.style.left = leftIgrac + "px";
            leftIgrac++;
        }
        score++;
        console.log(score);
        postaviNoviObjekt("desno");
    }
    else{
        console.log("greska");
        console.log(leftObjekt);
        console.log(leftIgrac);
        console.log(topObjekt);
        console.log(topIgrac);
    } 
} 

    

function zapocni(){
    
    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);

}

function options(){
    mainMenu.style.display = "none";
    opcije.style.display = "flex";
}

function playAudio(url) {
    new Audio(url).play();
  }


function main(){
    mainMenu.style.display = "flex";
    opcije.style.display = "none";
}

function play(){
    mainMenu.style.display = "none";
    igra.style.display = "flex";
    playAudio('soundtrack.mp3');
    zapocni();
}


function fullscreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

function getTouches(evt) {
    return evt.touches ||             // browser API
           evt.originalEvent.touches; // jQuery
  }                                                     
                                                                           
  function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];                                      
      xDown = firstTouch.clientX;                                      
      yDown = firstTouch.clientY;                                      
  };                                                
                                                                           
  function handleTouchMove(evt) {
      if ( ! xDown || ! yDown ) {
          return;
      }
  
      var xUp = evt.touches[0].clientX;                                    
      var yUp = evt.touches[0].clientY;
  
      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;
                                                                           
      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
          if ( xDiff > 0 ) {
            svajpanoLijevo();
          } else {
            svajpanoDesno();
          }                       
      } else {
          if ( yDiff > 0 ) {
           svajpanoGore();
          } else { 
            svajpanoDole();
          }                                                                 
      }
      /* reset values */
      xDown = null;
      yDown = null;                                             
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }