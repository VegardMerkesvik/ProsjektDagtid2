
var pos=new Image();
var imgx = 0;
var imgy = 0;

function pos_loop(){
if (!leftKey && !rightKey || leftKey && rightKey) {
    pos.src="bilder/frog.png"
    imgx = 0;
    imgy = 0;

} else if (rightKey) {
    pos.src="bilder/Run.png"
}else if(leftKey) {
    pos.src="bilder/Run.png"
} 
if(this.spilleren.y-this.spilleren.old_y>0){
    pos.src="bilder/Fall.png"
    imgx = 0;
    spillery = 0;
} else if(this.spilleren.y-this.spilleren.old_y<0){
    pos.src="bilder/jump.png"
    imgx = 0;
    imgy = 0;
}

}