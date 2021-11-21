var tellerEL = document.getElementById("teller");
var death = document.getElementById("death");
var fixtime = 0;
var timer = levelTime[0];
var deathcount = 0;
var sluttmenu = false;
var totaltime = 0;
function oppteller() {
  if (levelTime[LevelNum] > 0) {
    ++fixtime;
    //endrer farge
    if(timer<=3 ){
      tellerEL.style.backgroundColor = "red";
    } else {
      tellerEL.style.backgroundColor = "#4cbce4";
    }
    if (pause == false) {
      if (fixtime > 29) {// vi velger å bare bruke den intervallen som allerede eksisterer og if koden her er for å gjøre den intervallen om nærmere til sekunder
        --timer;
        if(LevelNum < levelTime.length -1){// denne if koden laget jeg fordi vi handlingene som sjer på siste levelen skal være annerledes
        ++totaltime
        console.log(fixtime);
        tellerEL.innerHTML = "Time: " + timer;
        fixtime = 0;
        }else {
          tellerEL.innerHTML = ""
          fixtime = 0;
        }
      }
    }
    if (timer < 0) {// sjekker om timeren går forbi 0
      if(LevelNum < levelTime.length -1){
      ++deathcount; 
      this.spilleren.y = 180;
      this.spilleren.x = 0;
      timer = levelTime[LevelNum];
      tellerEL.innerHTML = "Time: " + timer;
    }
    else{
      sluttmenu = true;// På siste levelen som er slutten av spillet vil spilleren ha 10 sek før han får en meny opp

      
    }
    }
  }
}
