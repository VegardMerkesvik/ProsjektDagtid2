var tellerEL = document.getElementById("teller");
var death = document.getElementById("death");
var fixtime = 0;
var timer = levelTime[0];
var deathcount = 0;
function oppteller() {
  if (levelTime[LevelNum] > 0) {
    ++fixtime;
    if (pause == false) {
      if (fixtime > 29) {
        console.log(fixtime);
        --timer;
        tellerEL.innerHTML = "Time: " + timer;
        fixtime = 0;
      }
    }
    if (timer < 0) {
      ++deathcount;
      this.spilleren.y = 180;
      this.spilleren.x = 20;
      timer = levelTime[LevelNum];
      tellerEL.innerHTML = "Time: " + timer;
    }
  }
}
