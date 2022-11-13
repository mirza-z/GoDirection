var mainMenu = document.getElementById("main-menu");
var igra = document.getElementById("igra");
var opcije = document.getElementById("opcije");
var eksplozija = document.getElementById("eksplodiraj");
var igrac = document.getElementById("igrac");
var objekt = document.getElementById("objekt");
var vrijeme = document.getElementById("vrijeme");
var counter = 0;

var score = 0;

var topIgrac = 0;
var leftIgrac = 0;
var topObjekt = 100;
var leftObjekt = 0;
    
igrac.style.top = topIgrac + "px";
igrac.style.left = leftIgrac + "px";
objekt.style.top = topObjekt + "px";
objekt.style.left = leftObjekt + "px";

var xDown = null;                                                        
var yDown = null;

function stopiraj(){
    setInterval(()=>{
        counter++;
    }, 1000);
}

function explode(){
    igra.style.display = "none";
    vrijeme.innerHTML = counter + " Sekundi";
    eksplozija.style.display = "flex";
}

function startNewGame(){
    score = 0;
    console.clear();
    console.log(counter);
    counter = 0;
    eksplozija.style.display = "none";
    mainMenu.style.display = "flex";
}

function postaviNoviObjekt(direkcija){
    var uslov = getRandomInt(0,2);
    if(direkcija == "dole"){

        if(uslov){
            var  max = topObjekt-120;
            var min = -300;
            topObjekt = getRandomInt(min, max);
            objekt.style.top = topObjekt + "px";
            objekt.style.height = 20 + "px";
            objekt.style.width = 60 + "px";
        } else{
            var  max;
            var min;
            var a = getRandomInt(0, 2);
            if(leftIgrac<-100) a=1;
            else if(leftIgrac>100) a=0;
            if(a){
                max = 150;
                min = leftIgrac+70;
            } else{
                max = leftIgrac-70;
                min = -150;
            }
            leftObjekt = getRandomInt(min, max);
            topObjekt = topIgrac-55;
            objekt.style.left = leftObjekt + "px";
            objekt.style.top = topObjekt + "px";
            objekt.style.height = 55 + "px";
            objekt.style.width = 20 + "px";
        }
    }
    
    else if(direkcija == "gore"){
        if(uslov){
            var  max = 300;
            var min = topObjekt+80;
            topObjekt = getRandomInt(min, max);
            objekt.style.top = topObjekt + "px";
            objekt.style.height = 20 + "px";
            objekt.style.width = 55 + "px";
        } else{
            var  max;
            var min;
            var a = getRandomInt(0, 2);
            if(leftIgrac<-100) a=1;
            else if(leftIgrac>100) a=0;
            if(a){
                max = 150;
                min = leftIgrac+80;
            } else{
                max = leftIgrac-80;
                min = -150;
            }
            
            leftObjekt = getRandomInt(min, max);
            objekt.style.left = leftObjekt + "px";
            topObjekt = topIgrac-55;
            objekt.style.top = topObjekt + "px";
            objekt.style.height = 55 + "px";
            objekt.style.width = 20 + "px";
        }
    } 
    
    else if(direkcija == "lijevo"){
        if(uslov){
            var  max = 150;
            var min = leftIgrac+60;
            leftObjekt = getRandomInt(min, max);
            objekt.style.left = leftObjekt+ "px";
        } else{
            var  max;
            var min;
            var a = getRandomInt(0, 2);
            if(topIgrac<=-270) a=1;
            else if(topIgrac>=270) a=0;
            if(a){
                max = 300;
                min = topObjekt+80;
            } else{
                max = topObjekt-80;
                min = -300;
            }
            
            topObjekt = getRandomInt(min, max);

            objekt.style.top = topObjekt + "px";
            objekt.style.height = 20 + "px";
            objekt.style.width = 60 + "px";
        }
    }

    else if(direkcija == "desno"){
        if(uslov){
            var  min = -150;
            var max = leftIgrac-80;
            leftObjekt = getRandomInt(min, max);
            objekt.style.left = leftObjekt + "px";
        } else{
            var  max;
            var min;
            var a = getRandomInt(0, 2);
            if(topIgrac<=-270) a=1;
            else if(topIgrac>=270) a=0;
            if(a){
                max = 300;
                min = topObjekt+80;
            } else{
                max = topObjekt-80;
                min = -300;
            }
            
            topObjekt = getRandomInt(min, max);
            objekt.style.top = topObjekt + "px";
            objekt.style.left = leftIgrac + "px";
            objekt.style.height = 20 + "px";
            objekt.style.width = 55 + "px";
        }
    }
}

function provjera(direkcija){
    if(direkcija=="dole"){
        if(topIgrac>=topObjekt) return false;
        else if(leftIgrac!=leftObjekt) return false;
        else return true;
    }
    else if(direkcija=="gore"){
        if(topIgrac<=topObjekt) return false;
        else if(leftIgrac!=leftObjekt) return false;
        else return true;
    }
    else if(direkcija=="desno"){
        if(leftIgrac>=leftObjekt) return false;
        else if(topIgrac!=topObjekt+55) return false;
        else return true;
    }
    else if(direkcija=='lijevo'){
        if(leftIgrac<=leftObjekt) return false;
        else if(topIgrac!=(topObjekt+55)) return false;
        else return true;
    }
}

function svajpanoDole(){
    
    if(provjera("dole")){
        while(topIgrac != topObjekt){

            igrac.style.top = topIgrac + "px";
            topIgrac++;
        }
        score++;
        if(score==20){
            console.log(counter);
            explode();
        }
        postaviNoviObjekt("dole");
    }
    else score--;
    
} 

function svajpanoGore(){
    
    if(provjera("gore")){
        while(topIgrac != topObjekt){

            igrac.style.top = topIgrac + "px";
            topIgrac--;
        }
        score++;
        if(score==20){
            console.log(counter);
            explode();
        }
        console.log(score);
        postaviNoviObjekt("gore");
    }
    else score--;
    
} 

function svajpanoLijevo(){
    
    if(provjera("lijevo")){
        while(leftIgrac != leftObjekt){
                igrac.style.left = leftIgrac + "px";
                leftIgrac--;
        }
        score++;
        if(score==20){
            console.log(counter);
            explode();
        }
        postaviNoviObjekt("lijevo");
    }
    else score--;
} 

function svajpanoDesno(){
    
    if(provjera("desno")){
        while(leftIgrac != leftObjekt){

            igrac.style.left = leftIgrac + "px";
            leftIgrac++;
        }
        score++;
        if(score==20){
            console.log(counter);
            explode();
        }
        console.log(score);
        postaviNoviObjekt("desno");
    }
    else score--;
} 

    

function zapocni(){
    
    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);

}

function options(){
    mainMenu.style.display = "none";
    opcije.style.display = "flex";
}

function main(){
    mainMenu.style.display = "flex";
    opcije.style.display = "none";
}

stopiraj();

function play(){
    counter = 0;
    mainMenu.style.display = "none";
    igra.style.display = "flex";
    
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