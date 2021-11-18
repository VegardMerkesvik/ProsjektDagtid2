document.getElementById("game").addEventListener("mousemove", logKey);
var rect;
var xposition;
var yposition;
function logKey(e) {
  rect = e.target.getBoundingClientRect();
  xposition = e.clientX - rect.left;
  yposition = e.clientY - rect.top;
}

document.getElementById("game").onmousedown = function () {
  clickmenu();
};
function menu() {
  if (pause == true) {
    ctx.fillStyle = "white";
    ctx.fillRect(
      canvas.width / 4,
      canvas.height / 4,
      canvas.width / 2,
      canvas.height / 2
    );
    ctx.fillStyle = "green";
    ctx.fillRect(
      canvas.width / 4,
      canvas.height / 4,
      canvas.width / 2,
      canvas.height / 10
    );
    ctx.fillStyle = "red";
    ctx.fillRect(
      canvas.width / 4,
      canvas.height / 2.21,
      canvas.width / 2,
      canvas.height / 10
    );
    ctx.fillStyle = "pink";
    ctx.fillRect(
      canvas.width / 4,
      canvas.height / 2.85,
      canvas.width / 2,
      canvas.height / 10
    );
    ctx.fillStyle = "blue";
    ctx.fillRect(
      canvas.width / 4,
      canvas.height / 1.81,
      canvas.width / 2,
      canvas.height / 10
    );
    ctx.fillStyle = "yellow";
    ctx.fillRect(
      canvas.width / 4,
      canvas.height / 1.54,
      canvas.width / 2,
      canvas.height / 10
    );

    ctx.font = "bold 12px Arial";
    ctx.fillStyle = "blue";
    ctx.fillText("Menu", canvas.width / 4 + 10, canvas.height / 4 + 20);

    ctx.fillStyle = "red";
    ctx.fillText("retry", canvas.width / 4 + 10, canvas.height / 4 + 55);

    ctx.fillStyle = "black";
    ctx.fillText("close", canvas.width / 4 + 10, canvas.height / 4 + 115);

    ctx.fillStyle = "yellow";
    ctx.fillText("start side", canvas.width / 4 + 10, canvas.height / 4 + 85);
  }
}
function restart() {
  location.reload();
}

function clickmenu() {
  console.log("clickfunc");
  if (
    xposition > (canvas.width / 4) * 1.816 &&
    xposition < (canvas.width / 4) * 1.816 + (canvas.width / 2) * 1.816 &&
    yposition > (canvas.height / 2.85) * 1.816 &&
    yposition < (canvas.height / 2.85) * 1.816 + (canvas.height / 10) * 1.816 &&
    pause == true
  ) {
    console.log("restart");
    location.reload();
  }
  if (
    xposition > (canvas.width / 4) * 1.816 &&
    xposition < (canvas.width / 4) * 1.816 + (canvas.width / 2) * 1.816 &&
    yposition > (canvas.height / 2.21) * 1.816 &&
    yposition < (canvas.height / 2.21) * 1.816 + (canvas.height / 10) * 1.816 &&
    pause == true
  ) {
    console.log("startside");
  }
  if (
    xposition > (canvas.width / 4) * 1.816 &&
    xposition < (canvas.width / 4) * 1.816 + (canvas.width / 2) * 1.816 &&
    yposition > (canvas.height / 1.81) * 1.816 &&
    yposition < (canvas.height / 1.81) * 1.816 + (canvas.height / 10) * 1.816 &&
    pause == true
  ) {
    console.log("close");
  }
  if (
    xposition > (canvas.width / 4) * 1.816 &&
    xposition < (canvas.width / 4) * 1.816 + (canvas.width / 2) * 1.816 &&
    yposition > (canvas.height / 1.54) * 1.816 &&
    yposition < (canvas.height / 1.54) * 1.816 + (canvas.height / 10) * 1.816 &&
    pause == true
  ) {
    console.log("yellow");
  }
}
