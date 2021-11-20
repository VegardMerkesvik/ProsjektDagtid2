document.getElementById("game").addEventListener("click", logKey);
var rect;
var xposition;
var yposition;

function logKey(e) {
  rect = e.target.getBoundingClientRect();
  xposition = e.clientX - rect.left;
  yposition = e.clientY - rect.top;
  console.log( xposition + " " + yposition)
  clickmenu()
}


function menu() {
  
  if (pause == true) {
    ctx.fillStyle = "green";
    ctx.fillRect(
      canvas.width / 4,
      canvas.height / 4,
      canvas.width / 2,
      canvas.height / 3
    );

    ctx.fillStyle = "green";
    ctx.fillRect(
      canvas.width / 4,
      canvas.height / 4,
      canvas.width / 2,
      canvas.height / 10
    );
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(
      canvas.width / 4,
     canvas.height / 2.85,
      canvas.width / 2,
      canvas.height / 10
    );
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(
      canvas.width / 4,
      (canvas.height / 2.21)+0.5,
      canvas.width / 2,
      canvas.height / 10
    );
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(
      canvas.width / 4,
      (canvas.height / 1.81)+1,
      canvas.width / 2,
      canvas.height / 10
    );
   
    ctx.font = "bold 12px Arial";
    ctx.fillStyle = "lightgreen";
    ctx.fillText("Menu", canvas.width / 4 + 10, canvas.height / 4 + 20);

    ctx.fillStyle = "green";
    ctx.fillText("Retry", canvas.width / 4 + 10, canvas.height / 4 + 55);

    ctx.fillStyle = "green";
    ctx.fillText("Close", canvas.width / 4 + 10, canvas.height / 4 + 115);

    ctx.fillStyle = "green";
    ctx.fillText("Start side", canvas.width / 4 + 10, canvas.height / 4 + 85);
  }
  if(sluttmenu == true){
   
      
      ctx.fillStyle = "green";
      ctx.fillRect(
        canvas.width / 4,
        canvas.height / 4,
        canvas.width / 2,
        canvas.height / 10
      );
      ctx.fillStyle = "lightgreen";
      ctx.fillRect(
        canvas.width / 4,
        canvas.height / 2.21,
        canvas.width / 2,
        canvas.height / 10
      );
      ctx.fillStyle = "lightgreen";
      ctx.fillRect(
        canvas.width / 4,
        canvas.height / 2.85,
        canvas.width / 2,
        canvas.height / 10
      );
    
  
      ctx.font = "bold 12px Arial";
      ctx.fillStyle = "lightgreen";
      ctx.fillText("THE END", canvas.width / 4 + 10, canvas.height / 4 + 20);
  
      ctx.fillStyle = "green";
      ctx.fillText("Try again", canvas.width / 4 + 10, canvas.height / 4 + 55);
  
      ctx.fillStyle = "green";
      ctx.fillText("Start side", canvas.width / 4 + 10, canvas.height / 4 + 85);
    
  }
}
function restart() {
  location.reload();
}

function clickmenu() {
  if (
    xposition > (document.getElementById("game").clientWidth / 4)  &&
    xposition < (document.getElementById("game").clientWidth / 4)  + (document.getElementById("game").clientWidth / 2)  &&
    yposition > (document.getElementById("game").clientHeight / 2.85)  &&
    yposition < (document.getElementById("game").clientHeight / 2.85)  + (document.getElementById("game").clientHeight / 10)  &&
    pause == true
  ) {
    console.log("restart");
    location.reload();
  }
  if (
    xposition > (document.getElementById("game").clientWidth / 4)  &&
    xposition < (document.getElementById("game").clientWidth / 4)  + (document.getElementById("game").clientWidth / 2)  &&
    yposition > (document.getElementById("game").clientHeight / 2.21)  &&
    yposition < (document.getElementById("game").clientHeight / 2.21)  + (document.getElementById("game").clientHeight / 10)  &&
    pause == true
  ) {
  window.location.href = "Frontpage.html"; // her skal start side url skrives
    console.log("startside");
  }
  if (
    xposition > (document.getElementById("game").clientWidth / 4)  &&
    xposition < (document.getElementById("game").clientWidth / 4)  + (document.getElementById("game").clientWidth / 2)  &&
    yposition > (document.getElementById("game").clientHeight / 1.81)  &&
    yposition < (document.getElementById("game").clientHeight / 1.81)  + (document.getElementById("game").clientHeight / 10)  &&
    pause == true
  ) {
    pause = false;
    console.log("close");
  }
  if (
    xposition > (document.getElementById("game").clientWidth / 4)  &&
    xposition < (document.getElementById("game").clientWidth / 4)  + (document.getElementById("game").clientWidth / 2)  &&
    yposition > (document.getElementById("game").clientHeight / 1.54)  &&
    yposition < (document.getElementById("game").clientHeight / 1.54)  + (document.getElementById("game").clientHeight / 10)  &&
    pause == true
  ) {
    console.log("yellow");
  }
  if (
    xposition > (document.getElementById("game").clientWidth / 4)  &&
    xposition < (document.getElementById("game").clientWidth / 4)  + (document.getElementById("game").clientWidth / 2)  &&
    yposition > (document.getElementById("game").clientHeight / 2.85)  &&
    yposition < (document.getElementById("game").clientHeight / 2.85)  + (document.getElementById("game").clientHeight / 10)  &&
    sluttmenu == true
  ) {
    console.log("restart");
    location.reload();
  }
  if (
    xposition > (document.getElementById("game").clientWidth / 4)  &&
    xposition < (document.getElementById("game").clientWidth / 4)  + (document.getElementById("game").clientWidth / 2)  &&
    yposition > (document.getElementById("game").clientHeight / 2.21)  &&
    yposition < (document.getElementById("game").clientHeight / 2.21)  + (document.getElementById("game").clientHeight / 10)  &&
    sluttmenu == true
  ) {
  window.location.href = "Frontpage.html"; // her skal start side url skrives
    console.log("startside");
  }
  if (
    xposition > (document.getElementById("game").clientWidth / 4)  &&
    xposition < (document.getElementById("game").clientWidth / 4)  + (document.getElementById("game").clientWidth / 2)  &&
    yposition > (document.getElementById("game").clientHeight / 1.81)  &&
    yposition < (document.getElementById("game").clientHeight / 1.81)  + (document.getElementById("game").clientHeight / 10)  &&
    sluttmenu == true
  ) {
    pause = false;
    console.log("close");
  }
  if (
    xposition > (document.getElementById("game").clientWidth / 4)  &&
    xposition < (document.getElementById("game").clientWidth / 4)  + (document.getElementById("game").clientWidth / 2)  &&
    yposition > (document.getElementById("game").clientHeight / 1.54)  &&
    yposition < (document.getElementById("game").clientHeight / 1.54)  + (document.getElementById("game").clientHeight / 10)  &&
    sluttmenu == true
  ) {
    console.log("yellow");
  }
}