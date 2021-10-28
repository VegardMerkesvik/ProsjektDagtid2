var canvas;
var to;



var gameLoop;
var spilleren;
var texture;


window.onload = function(){
    canvas=document.getElementById("game");
    ctx = canvas.getContext("2d");
    to=canvas.getContext("2d");

    //keybind
    setupKeyboard();

  
    //dette er spilleren
    spilleren  = new Spiller(20,20);


    

    //engine for nå
    gameLoop = setInterval(step, 1000/30);




    


} 

function step() {
    
    spilleren.step();

    draw();

    
}
function draw(){
    
    spilleren.draw();

    

}

