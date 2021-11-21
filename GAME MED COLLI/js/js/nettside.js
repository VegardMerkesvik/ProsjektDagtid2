var startGame = document.getElementById("info1")
var rules = document.getElementById("info2");
var makers = document.getElementById("info3");
var project = document.getElementById("info4");
var contentInfo = document.getElementById("container")
var regler = false;

rules.onclick = function change(){
  contentInfo.innerHTML = 
   "<div> Spillet handler om er frosk som er på jakt etter å bli et menneske, han har hørt ryktet som sier at om man kysser en EKTE prinsesse vil man forvandles! Din oppgave er å få frosken frem til prinsessen som befinner seg i slutten av spillet!</div>"+
   "<div onclick='back()'> Tilbake </div>"

}
makers.onclick = function change(){
  contentInfo.innerHTML =
   "<div> Spillet er laget av informasjonsbehandling-studenter på NTNU: <br> Andreas Nypan <br> Didrik Bjerkan <br> Vegard Merkesvik </div>"+
   
   "<div onclick='back()'> Tilbake </div>"

}
project.onclick = function change(){
  contentInfo.innerHTML =
   "<div> Dette er et prosjektet i emnet INFT1003 Webteknologi og teamarbeid (2021 HØST). Prosjektet går ut på å lage et spill med webgrensesnitt med tilhørende nettside med annet innhold. </div>"+
   
   "<div onclick='back()'> Tilbake </div>"

}
rules.onmouseover = function changeCol(){
  rules.style.backgroundColor = "#2596be";
}
rules.onmouseout = function changeCol(){
  rules.style.backgroundColor = "#4cbce4";
}
makers.onmouseover = function changeCol(){
  makers.style.backgroundColor = "#2596be";
}
makers.onmouseout = function changeCol(){
  makers.style.backgroundColor = "#4cbce4";
}
project.onmouseover = function changeCol(){
  project.style.backgroundColor = "#2596be";
}
project.onmouseout = function changeCol(){
  project.style.backgroundColor = "#4cbce4";
}
startGame.onmouseover = function changeCol(){
  startGame.style.backgroundColor = "#2596be";
}
startGame.onmouseout = function changeCol(){
  startGame.style.backgroundColor = "#4cbce4";
}



function toGame(){
  location.href = "hoved.html"
}


function back(){
  location.reload();
}

function backTofront(){
  location.href = "Frontpage.html"
}
function keybind() {
  if(regler == false){ pause = true;
    regler = true;
  document.getElementById("game").style.display = "none";
  document.getElementById("taster-og-regler").style.display = "inline";}
  else {pause = false;
    regler = false;
    document.getElementById("game").style.display = "inline";
  document.getElementById("taster-og-regler").style.display = "none";
  }
}