function Spiller(x, y) {
  this.x = x;
  this.y = y;
  this.old_x = 0;
  this.old_y = 0;
  this.width = 25;
  this.height = 25;
  this.speedX = 0;
  this.speedY = 0;
  this.friksjon = 0.6;
  this.maximumS = 14;
  this.maximumSX = 8;
  this.gravity = 0.2;
  this.hoppe = true;
  this.gravitySpeed = 0;

  this.step = function () {
    //spiller bevegelse

    if ((!leftKey && !rightKey) || (leftKey && rightKey)) {
      this.speedX *= this.friksjon;
    } else if (rightKey) {
      this.speedX += 0.8;
    } else if (leftKey) {
      this.speedX -= 0.8;
    }
    if (this.hoppe == false) {
      if (upKey) {
        this.speedY -= 12;
        this.hoppe = true;
        this.gravitySpeed = 0;
        this.gravity = 0.2;
      }
    }
    if (this.speedX > this.maximumSX) {
      this.speedX = this.maximumSX;
    } else if (this.speedX < -this.maximumSX) {
      this.speedX = -this.maximumSX;
    }
    if (this.speedY > this.maximumS) {
      this.speedY = this.maximumS;
    } else if (this.speedY < -this.maximumS) {
      this.speedY = -this.maximumS;
      this.gravitySpeed = 0;
    }

    //graviteten
    this.gravitySpeed += this.gravity;
    this.speedY += this.gravitySpeed;
    //oppdater old x og old z

    this.old_x = this.x;
    this.old_y = this.y;

    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0) {
      this.x = 0;
      this.speedX = 0;
    } else if (this.x > 480 - 1 - this.width) {
      this.x = 480 - 1 - this.width;
      this.speedX = 0;
    }
    /* if(this.y<0){
            this.y=0;
            this.speedY=0;
        }
        else*/ if (this.y > 320) {
      this.x = 20;
      this.y = 180;
      ++deathcount;
      timer = levelTime[LevelNum];
    }
    // pause del
    if (pause == true) {
      this.x = this.old_x;
      this.y = this.old_y;
      this.speedY = 0;
      this.gravitySpeed = 0;
      console.log("funker");
    } else {
    }
  };

  this.draw = function () {
    ctx.drawImage(pos, imgx, 0, 25, 25, this.x, this.y, 25, 25);
  };
}
