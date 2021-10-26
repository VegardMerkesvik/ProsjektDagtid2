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


    texture = new Texture(32,15);

    //engine for nå
    gameLoop = setInterval(step, 1000/30);




    


} 

function step() {

    spilleren.step();

    draw();

    
}
function draw(){
    ctx.fillStyle = "grey"
    ctx.fillRect(0,0, 480,320)
  
    spilleren.draw();

    

}

