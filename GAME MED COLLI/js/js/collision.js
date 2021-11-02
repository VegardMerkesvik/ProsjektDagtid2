

collision = {
  84:function(objekt, rad, col) {
      this.floorCol(objekt, rad);
  },
  99:function(objekt,rad,col){
    this.rightCol(objekt, col);
  },
  101:function(objekt, rad, col) {
      this.leftCol(objekt,col);

  },
  83:function(objekt, rad, col) {
    if(this.rightCol(objekt, col)){return;}
    this.floorCol(objekt, rad);
  },
  85:function(objekt, rad, col) {
    if(this.leftCol(objekt, col)){return;}
    this.floorCol(objekt, rad);

  },
  100:function(objekt, rad, col) {
    this.floorCol(objekt, rad);
},
  floorCol(objekt, rad) {
   if(objekt.y - objekt.old_y > 0){
        
    var bunn = rad * 32;

       if ((objekt.y +20)> bunn  && (objekt.old_y + 20) <= bunn) {
            
        objekt.speedY = 0;
        objekt.old_y = bunn- objekt.height - 0.01 ;
        objekt.y = bunn- objekt.height - 0.01; 
       objekt.gravitySpeed = 0; 
      
        objekt.hoppe = false 

        }
        }
      },
  rightCol(objekt, col){
      if(objekt.x-objekt.old_x > 0) {
        var vegR = col* 32;
        if((objekt.x+20)>vegR && (objekt.old_x+20) <= vegR){
            objekt.speedX = 0;
            objekt.x =  vegR - objekt.width - 0.01;
            objekt.old_x = vegR - objekt.width - 0.01;
        }
      }
  },
  leftCol(objekt, col){
    if(objekt.x-objekt.old_x < 0) {
        var vegL = (col+1)* 32;
        if((objekt.x)<vegL && (objekt.old_x) >= vegL){
            objekt.speedX = 0;
            objekt.x = vegL + 0.01;
            objekt.old_x = vegL + 0.01;
        }
    }
}
  };
  

function colLoop(){

   
        

        
    
    
    if(this.spilleren.y - this.spilleren.old_y > 0){
       
        var left_col = Math.floor(this.spilleren.x / 32);
        var bunn_rad = Math.floor((this.spilleren.y+20)/32);
        var colValue = world.map[bunn_rad* world.col + left_col];
        
        if(colValue > 0 ) {
            console.log(left_col + " " + bunn_rad + " " + colValue);
            collision[colValue](this.spilleren, bunn_rad, left_col);
        }

        var right_col = Math.floor((this.spilleren.x+20)/32);
        colValue = world.map[bunn_rad* world.columns + right_col];

        if(colValue > 0){
            
            collision[colValue](this.spilleren, bunn_rad, right_col);
            
            
        }
    }



//function colxLoop() {
    if(this.spilleren.x-this.spilleren.old_x <0) {
        var left_col = Math.floor(this.spilleren.x / 32);
        var bunn_rad = Math.floor((this.spilleren.y+20)/32);
        var colValue = world.map[bunn_rad* world.col + left_col];
        
        if(colValue > 0 ) {
            collision[colValue](this.spilleren, bunn_rad, left_col);
        }
        var top_rad = Math.floor(this.spilleren.y/32);
        colValue = world.map[top_rad * world.col + left_col];
        if(colValue > 0) {
            collision[colValue](this.spilleren, top_rad, left_col);
        }
    } else if (this.spilleren.x - this.spilleren.old_x > 0) {
        var right_col = Math.floor((this.spilleren.x+20)/32);
        var bunn_rad = Math.floor((this.spilleren.y +20)/32);
        var colValue = world.map[bunn_rad*world.col + right_col];
        
        if ( colValue > 0) {
            collision[colValue](this.spilleren, bunn_rad, right_col);
        }
        var top_rad = Math.floor(this.spilleren.y/32);
        colValue = world.map[top_rad * world.col + right_col];
        if(colValue > 0) {
            collision[colValue](this.spilleren, top_rad, right_col);
        }
    }
//}
}
