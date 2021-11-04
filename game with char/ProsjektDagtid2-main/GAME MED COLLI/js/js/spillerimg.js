
var pos=new Image();

function pos_loop(){
if (!leftKey && !rightKey || leftKey && rightKey) {
    pos.src="bilder/frog.png"
} else if (rightKey) {
    pos.src="bilder/Run.png"
}else if(leftKey) {
    pos.src="bilder/Run.png"
} else if(spilleren.y-spilleren.old_y>0){
    pos.src="bilder/Fall.png"
} else if(spilleren.y-spilleren.old_y<0){
    pos.src="bilder/jump.png"
}

}