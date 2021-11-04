var canvas;
var to;



var gameLoop;
var spilleren;
var texture;


window.onload = function(){
    canvas=document.getElementById("game");
    ctx = canvas.getContext("2d");
   

    //keybind
    setupKeyboard();

  
    //dette er spilleren
    spilleren  = new Spiller(20,180);


    

    //engine for nå
    gameLoop = setInterval(step, 1000/30);


 

    


} 

function step() {
    
    spilleren.step();
    colLoop();
    pos_loop();
     draw();
}
function draw(){
    ctx.clearRect(0, 0, 480, 320);
     loop()
    
    spilleren.draw();

   
    

}
