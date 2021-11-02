function colLoop() {

    if((this.spilleren.y+20)>224 && this.spilleren.x < 352 ){
        this.spilleren.y = 224-20 - 0.001;
    this.spilleren.speedY = 0;
    this.spilleren.gravitySpeed = 0;
    
        
        this.spilleren.hoppe = false;
    }
    if (this.spilleren.y +20 > 160 && this.spilleren.y + 20 < 224) {
        if(this.spilleren.x +20 >160 && this.spilleren.x<160+0.001) {
            this.spilleren.x = 160-20-0.001;
            this.spilleren.speedX = 0;
        }
    }
    if(this.spilleren.x+20 > 160  && this.spilleren.x+20 < 244 ) {
        if(this.spilleren.y +20 >160){
            this.spilleren.y = 160-20-0.001
            this.spilleren.speedY = 0 ;
            this.spilleren.gravitySpeed = 0;
            this.spilleren.hoppe = false;
        }
    }
    if (this.spilleren.y + 20  > 160 && this.spilleren.y + 20 < 224) {
        if(this.spilleren.x <225 && this.spilleren.x>225-0.001) {
            this.spilleren.x = 225+0.001;
            this.spilleren.speedX = 0;
        }
    }
}