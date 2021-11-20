var frog0 = document.getElementById("frog0");
var Run0 = document.getElementById("Run0");
var Jump0 = document.getElementById("Jump0");
var Fall0 = document.getElementById("Fall0");
var frog1 = document.getElementById("frog1");
var Run1 = document.getElementById("Run1");
var Jump1 = document.getElementById("Jump1");// som du kan se så har vi laget bildene inn på hoved html dokumentet go grunnen for at vi gjorde dette er fodi hvis vi lastet inn bildene på js trengte den laste tid nå spilleren byttet retning og forsvant for ett kort bilde
var Fall1 = document.getElementById("Fall1");// men når vi fikk bildene inn på documentet slik så ville alle bildene lastes inn sammen med documentet
var retning = 0;                             
var pos;
var imgx = 0;
var imgy = 0;
var telling = 0;

function pos_loop() { // i denne funksjonen så bytter vi på hvilket bilde som skal lages skal tegnes inn på canvaset
  if ((!leftKey && !rightKey) || (leftKey && rightKey)) {
    telling = 0;
    imgx = 0;
    imgy = 0;
    if (retning == 0) {
      pos = frog0;
    } else {
      pos = frog1;
    }
  } else if (rightKey) {
    retning = 0;
    ++telling;
    if (telling > 2) {
      if (imgx < 275) {
        imgx += 25;
      } else {
        imgx = 0;
      }
      pos = Run0;
      telling = 0;
    }
  } else if (leftKey) {
    retning = 1;
    ++telling;
    if (telling > 2) {
      if (imgx < 275) {
        imgx += 25;
      } else {
        console.log("her");
        imgx = 0;
      }

      pos = Run1;
      telling = 0;
    }
  }
  if (this.spilleren.y - this.spilleren.old_y > 0) {
    imgx = 0;
    spillery = 0;
    if (retning == 0) {
      pos = Jump0;
    } else {
      pos = Jump1;
    }
  } else if (this.spilleren.y - this.spilleren.old_y < 0) {
    imgx = 0;
    imgy = 0;
    if (retning == 0) {
      pos = Fall0;
    } else {
      pos = Fall1;
    }
  }
}
