var upKey;
var rightKey;
var leftKey;
var downKey;
var pause = false;

function setupKeyboard() {
    
    document.addEventListener("keydown", function(e){
        if(pause == false){
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
        }
        if(pause == false) {
            
            switch (e.keyCode) {
                case 27:
                    pause = true;
            }
        }
        else {
           
            switch (e.keyCode) {
                case 27:
                    pause = false;
            }
        }

       
    });
    document.addEventListener("keyup", function(e){
        if(pause == false){
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

    }
       
    });
}