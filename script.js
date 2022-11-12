var mainMenu = document.getElementById("main-menu");
var igra = document.getElementById("igra");
var opcije = document.getElementById("opcije");
var eksplozija = document.getElementById("eksplodiraj");

function play(){
    mainMenu.style.display = "none";
    igra.style.display = "flex";
}

function options(){
    mainMenu.style.display = "none";
    opcije.style.display = "flex";
}

function main(){
    mainMenu.style.display = "flex";
    opcije.style.display = "none";
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