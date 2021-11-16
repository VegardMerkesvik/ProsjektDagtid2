var tellerEL = document.getElementById("teller");
var fixtime = 0;
var timer = levelTime[0];
var deathcount = 0
function oppteller() {
    ++fixtime
    if(fixtime > 29){
        console.log(fixtime);
        --timer
        tellerEL.innerHTML = "Time: " + timer ;
        fixtime = 0;
    
    }
    if (timer < 0) {
 ++deathcount
 this.spilleren.x =20;
 this.spilleren.y =180;
 timer = levelTime[LevelNum];
 tellerEL.innerHTML = "Time: " + timer ;

 

    }
}