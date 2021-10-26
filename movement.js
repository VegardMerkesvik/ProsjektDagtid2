var upKey;
var rightKey;
var leftKey;
var downKey;

function setupKeyboard() {
    document.addEventListener("keydown", function(e){
        if(e.key ==="w" || e.key === "ArrowUp"){
            upKey = true;
        } else if(e.key === "a" || e.key === "ArrowLeft") {
            leftKey = true;
        }
        else if(e.key === "s" || e.key === "ArrowDown") {
            downKey = true;
        }
        else if(e.key === "d" || e.key === "ArrowRight") {
            rightKey = true;
        }
    });
    document.addEventListener("keyup", function(e){
        if(e.key ==="w" || e.key === "ArrowUp"){
            upKey = false;
        } else if(e.key === "a" || e.key === "ArrowLeft") {
            leftKey = false;
        }
        else if(e.key === "s" || e.key === "ArrowDown") {
            downKey = false;
        }
        else if(e.key === "d" || e.key === "ArrowRight") {
            rightKey = false;
        }
    });
}