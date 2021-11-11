var frog = document.getElementById("frog");
var Run = document.getElementById("Run");
var Jump = document.getElementById("Jump");
var Fall = document.getElementById("Fall");

var pos;
var imgx = 0;
var imgy = 0;

function pos_loop(){
if (!leftKey && !rightKey || leftKey && rightKey) {
    pos = frog;
    imgx = 0;
    imgy = 0;

} else if (rightKey) {
    
    pos = Run;
}else if(leftKey) {
    
    
    pos = Run;
} 
if(this.spilleren.y-this.spilleren.old_y>0){
    pos = Jump;
    imgx = 0;
    spillery = 0;
} else if(this.spilleren.y-this.spilleren.old_y<0){
    pos = Fall;
    imgx = 0;
    imgy = 0;
}

}