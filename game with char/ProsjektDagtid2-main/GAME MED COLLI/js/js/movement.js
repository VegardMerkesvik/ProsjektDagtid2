var upKey;
var rightKey;
var leftKey;
var downKey;

function setupKeyboard() {
    document.addEventListener("keydown", function(e){
        switch (e.keyCode) {
            case 87: case 38: case 32:
                upKey = true;
            break;
            case 65: case 37:
                leftKey = true;
            break;
            case 83: case 40:
                downKey = true;
            break;
            case 68: case 39:
                rightKey = true;
            break;
        }

       
    });
    document.addEventListener("keyup", function(e){
        switch (e.keyCode) {
            case 87: case 38: case 32:
                upKey = false;
            break;
            case 65: case 37:
                leftKey = false;
            break;
            case 83: case 40:
                downKey = false;
            break;
            case 68: case 39:
                rightKey = false;
            break;
        }


       
    });
}