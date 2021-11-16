var tellerEL = document.getElementById("teller");
var fixtime = 0;
var timer = 0;
var deathcount = 0
function oppteller() {
    ++fixtime
    if(fixtime > 29){
        console.log(fixtime);
        ++timer
        tellerEL.innerHTML = "Time: " + timer ;
        fixtime = 0;
    
    }
    if (timer > levelTime[LevelNum]-1) {
 ++deathcount
 this.spilleren.x =20;
 this.spilleren.y =180;
 timer = 0;
 tellerEL.innerHTML = "Time: " + timer ;

 

    }
}