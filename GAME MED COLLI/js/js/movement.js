var upKey;
var rightKey;
var leftKey;
var downKey;
var pause = false;

function setupKeyboard() {
  document.addEventListener("keydown", function (e) {// dette er for bevegelse av spilleren og man bruker keycodes for å finne ut hvilken knapp som blir trykket ned og gjør at knappen som blir presset ned er lik true
    if (pause == false) {
      switch (e.keyCode) {
        case 87:
        case 38:
        case 32:
          upKey = true;
          break;
        case 65:
        case 37:
          leftKey = true;
          break;
        case 83:
        case 40:
          downKey = true;// vi beholder dette tilfelle vi ønsker en ekstra funksjon til spillet
          break;
        case 68:
        case 39:
          rightKey = true;
          break;
      }
    }
    if (pause == false) {//her lader jeg også en egen if setting med knapper for pause knappen
      switch (e.keyCode) {
        case 27:
          pause = true;
      }
    } else {
      switch (e.keyCode) {
        case 27:
          pause = false;
      }
    }
  });
  document.addEventListener("keyup", function (e) {//dette er for å registrere når knappene ikke holdes nede.
    if (pause == false) {// if pause == false / true er viktig slik at vi kan sørge for at retningene ikke fungerer når pause er på
      switch (e.keyCode) {
        case 87:
        case 38:
        case 32:
          upKey = false;
          break;
        case 65:
        case 37:
          leftKey = false;
          break;
        case 83:
        case 40:
          downKey = false;
          break;
        case 68:
        case 39:
          rightKey = false;
          break;
      }
    }
  });
}
