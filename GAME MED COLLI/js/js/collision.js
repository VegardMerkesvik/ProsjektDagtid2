var LevelNum = 0;// dette definerer hvilken level spilleren har kommet seg til og når funksjonen mapFunk() går av så vil level nummeret leses opp i nextLevel.js
var collision = { // I denne arrayen lager vi funksjoner for de forskjellige tilesan og som igjen starter en annen funksjon for collision og spikes død
  84: function (objekt, rad, col) {
    if (this.takCol(objekt, rad)) {
      return;
    }
    this.floorCol(objekt, rad);
  },
  52: function (objekt, rad, col) {
    if (this.floorCol(objekt, rad)) {
      return;
    }
    if (this.rightCol(objekt, col)) {
      return;
    }
    this.leftCol(objekt, col);
  },
  99: function (objekt, rad, col) {
    this.rightCol(objekt, col);
  },
  101: function (objekt, rad, col) {
    this.leftCol(objekt, col);
  },
  83: function (objekt, rad, col) {
    if (this.floorCol(objekt, rad)) {
      return;
    }
    this.rightCol(objekt, col);
  },
  85: function (objekt, rad, col) {
    if (this.leftCol(objekt, col)) {
      return;
    }
    this.floorCol(objekt, rad);
  },
  146: function (objekt, rad, col) {
    if (this.leftCol(objekt, col)) {
      return;
    }
    if (this.takCol(objekt, rad)) {
      return;
    }
    this.floorCol(objekt, rad);
  },
  100: function (objekt, rad, col) {
    if (this.floorCol(objekt, rad)) {
      return;
    }
    if (this.takCol(objekt, rad)) {
      return;
    }
    if (this.rightCol(objekt, col)) {
      return;
    }
    this.leftCol(objekt, col);
  },
  49: function (objekt, rad, col) {
    if (this.spikeCol(objekt, rad)) {
      return;
    }
    this.takCol(objekt, rad);
  },50: function (objekt, rad, col) {
     if(this.spikeColL(objekt,col)){return;}
     if(this.spikeColR(objekt,col)){return;}
    if (this.spikeCol(objekt, rad)) {
      return;
    }
    this.takCol(objekt, rad);
  },
  141: function (objekt, rad, col) {
   //skilt og prinsesse  for å gå videre til neste level trenger vi ikke collision så vi lager da slikk at når denne tilen er registrert så bytter den level.
      ++LevelNum
    
    
    timer = levelTime[LevelNum];
    mapFunk();
    objekt.x = 20;
    objekt.y = 180;
    document.getElementById("messagebox").innerText =
      "Level: " + (LevelNum + 1);
  },
  15: function (objekt, rad, col) {
    LevelNum++;
    mapFunk();
    objekt.x = 20;
    objekt.y = 200;
    if (LevelNum > mapsArr.length - 2) {
      canvas.style.backgroundImage = "url('css/finish.png')";
    }
    if (levelTime[LevelNum] > 0) {
      timer = levelTime[LevelNum];
    } else {
      tellerEL.innerHTML = "";
    }
  },
  35: function (objekt, rad, col) {
    this.floorCol(objekt, rad);
  },
  37: function (objekt, rad, col) {
    this.floorCol(objekt, rad);
  },
  36: function (objekt, rad, col) {
    this.floorCol(objekt, rad);
  },
  20: function (objekt, rad, col) {
    this.floorCol(objekt, rad);
  },
  1: function (objekt, rad, col) {
    this.floorCol(objekt, rad);
  },
  144: function (objekt, rad, col) {
    if (this.takCol(objekt, rad)) {
      return;
    }
    if (this.rightCol(objekt, col)) {
      return;
    }
    this.leftCol(objekt, col);
  },
  145: function (objekt, rad, col) {
    if (this.takCol(objekt, rad)) {
      return;
    }
    if (this.floorCol(objekt, rad)) {
      return;
    }
    this.rightCol(objekt, col);
  },
  68: function (objekt, rad, col) {
    if (this.rightCol(objekt, col)) {
      return;
    }
    this.leftCol(objekt, col);
  },//etter tilesene blir definert så kommer funksjonene som lager de forskjellige collisionene denne måten å lage tile collision gjør det lettere å legge til nye tiles
  floorCol(objekt, rad) {
    if (objekt.y - objekt.old_y > 0) {
      var bunn = rad * 32;

      if (objekt.y + 25 > bunn && objekt.old_y + 25 <= bunn) {
        objekt.speedY = 0;
        objekt.old_y = bunn - 0.01 - objekt.height ;
        objekt.y = bunn - 0.01 - objekt.height ;
        objekt.gravitySpeed = 0;

        objekt.hoppe = false;
      }
    }
  },
  rightCol(objekt, col) {
    if (objekt.x - objekt.old_x > 0) {
      var vegR = col * 32;
      if (objekt.x + 25 > vegR && objekt.old_x + 25 <= vegR) {
        objekt.speedX = 0;
        objekt.x = vegR - objekt.width - 0.01;
        objekt.old_x = vegR - objekt.width - 0.01;
      }
    }
  },
  leftCol(objekt, col) {
    if (objekt.x - objekt.old_x < 0) {
      var vegL = (col + 1) * 32;
      if (objekt.x < vegL && objekt.old_x >= vegL) {
        objekt.speedX = 0;
        objekt.x = vegL + 0.01;
        objekt.old_x = vegL + 0.01;
      }
    }
  },
  takCol(objekt, rad) {
    if (objekt.y - objekt.old_y < 0) {
      var tak = (rad + 1) * 32;

      if (objekt.y < tak && objekt.old_y >= tak) {
        objekt.speedY = 0;
        objekt.old_y = tak + 0.01;
        objekt.y = tak + 0.01;
        objekt.gravitySpeed = 0;
      }
    }
  },
  spikeCol(objekt, rad) {
    if (objekt.y - objekt.old_y > 0) {
      var bunn = rad * 32 + 10;

      if (objekt.y + 25 > bunn && objekt.old_y + 25 <= bunn) {
        objekt.x = 0;
        objekt.y = 180;
        timer = levelTime[LevelNum];
        ++deathcount;
        console.log("spike");
      }
    }
  },
  spikeColR(objekt, col) {
    if (objekt.x - objekt.old_x > 0) {
      var vegR = col * 32;
      if (objekt.x + 25 > vegR && objekt.old_x + 25 <= vegR) {
        objekt.x = 20;
        objekt.y = 180;
        timer = levelTime[LevelNum];
        ++deathcount;
        console.log("spike");
      }
    }
  },
  spikeColL(objekt, col) {
    if (objekt.x - objekt.old_x < 0) {
      var vegL = (col + 1) * 32;
      if (objekt.x < vegL && objekt.old_x >= vegL) {
        objekt.x = 20;
        objekt.y = 180;
        timer = levelTime[LevelNum];
        ++deathcount;
        console.log("spike");
      }
    }
  }
};

function colLoop() {
  if (this.spilleren.y - this.spilleren.old_y > 0) {// sjekker om spilleren er i fritt fall ps dette var det vi kanskje brukte mest tid på å justere 
    this.spilleren.hoppe = true;
  }

  if (this.spilleren.y - this.spilleren.old_y > 0) {// her sjekker spillet om spilleren går ned over og vil da sjekke tilesan som er under spilleren
    var left_col = Math.floor(this.spilleren.x / 32);// 32 er width/height til hver tile... left_col sin code sjekker kolonne posisjonen i forhold til spill kartet (world.map) til venstre for spilleren
    var bunn_rad = Math.floor((this.spilleren.y + 25) / 32);// 25 er  width/height for spilleren... bunn_rad sin code sjekker rad posisjonen i forhold til spill kartet (world.map) under spilleren
    var colValue = world.map[bunn_rad * world.col + left_col];// colValue er da for å sjekke verdien til tilen som man står i dette hjørnet som er definert 

    if (colValue > 0) {//hvis større enn null er fordi det er ikke noe collision i lufta og tomrom er definert som 0 eller -1
      collision[colValue](this.spilleren, bunn_rad, left_col);
    }

    var right_col = Math.floor((this.spilleren.x + 25) / 32);//left_col sin code sjekker kolonne posisjonen i forhold til spill kartet (world.map) til right for spilleren
    colValue = world.map[bunn_rad * world.col + right_col];

    if (colValue > 0) {
      collision[colValue](this.spilleren, bunn_rad, right_col);
    }
  } else if (this.spilleren.y - this.spilleren.old_y < 0) {// denne else if-en sjekker om spilleren går oppover
    var left_col = Math.floor(this.spilleren.x / 32);
    var top_rad = Math.floor(this.spilleren.y / 32);//bunn_rad sin code sjekker rad posisjonen i forhold til spill kartet (world.map) over spilleren
    var colValue = world.map[top_rad * world.col + left_col];

    if (colValue > 0) {
      collision[colValue](this.spilleren, top_rad, left_col);
    }

    var right_col = Math.floor((this.spilleren.x + 25) / 32);
    colValue = world.map[top_rad * world.col + right_col];

    if (colValue > 0) {
      collision[colValue](this.spilleren, top_rad, right_col);
    }
  }

  if (this.spilleren.x - this.spilleren.old_x < 0) {// sjekker om spilleren beveger seg mot venstre
    var left_col = Math.floor(this.spilleren.x / 32);
    var bunn_rad = Math.floor((this.spilleren.y + 25) / 32);
    var colValue = world.map[bunn_rad * world.col + left_col];

    if (colValue > 0) {
      collision[colValue](this.spilleren, bunn_rad, left_col);
    }
    var top_rad = Math.floor(this.spilleren.y / 32);
    colValue = world.map[top_rad * world.col + left_col];
    if (colValue > 0) {
      collision[colValue](this.spilleren, top_rad, left_col);
    }
  } else if (this.spilleren.x - this.spilleren.old_x > 0) {// sjekker om spilleren beveger seg mot høyre
    var right_col = Math.floor((this.spilleren.x + 25) / 32);
    var bunn_rad = Math.floor((this.spilleren.y + 25) / 32);
    var colValue = world.map[bunn_rad * world.col + right_col];

    if (colValue > 0) {
      
      collision[colValue](this.spilleren, bunn_rad, right_col);
    }
    var top_rad = Math.floor(this.spilleren.y / 32);
    colValue = world.map[top_rad * world.col + right_col];
    if (colValue > 0) { 
      collision[colValue](this.spilleren, top_rad, right_col);
    }
  }
}
