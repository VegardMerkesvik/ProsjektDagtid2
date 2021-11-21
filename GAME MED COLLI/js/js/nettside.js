var rules = document.getElementById("info2");
var makers = document.getElementById("info3");
var project = document.getElementById("info4");
var contentInfo = document.getElementById("container")
var regler = false;

rules.onclick = function change(){
  contentInfo.innerHTML = 
   "<div> Ny tekst</div>"+
   "<div onclick='back()'> Tilbake </div>"

}
makers.onclick = function change(){
  contentInfo.innerHTML =
   "<div> Spillet handler om er frosk som er på jakt etter å bli et menneske, han har hørt ryktet som sier at om man kysser en EKTE prinsesse vil man forvandles! Din oppgave er å få frosken frem til prinsessen som befinner seg i slutten av spillet!</div>"+

   "<div onclick='back()'> Tilbake </div>"

}
project.onclick = function change(){
  contentInfo.innerHTML =
   "<div> Ny tekst</div>"+

   "<div onclick='back()'> Tilbake </div>"

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