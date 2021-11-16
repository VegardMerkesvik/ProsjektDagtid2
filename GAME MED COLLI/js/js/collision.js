var LevelNum = 0;

var collision = {
  84:function(objekt, rad, col) {
    if(this.takCol(objekt, rad)){return;}
      this.floorCol(objekt, rad);
  },
  99:function(objekt,rad,col){
    this.rightCol(objekt, col);
  },
  101:function(objekt, rad, col) {
      this.leftCol(objekt,col);

  },
  83:function(objekt, rad, col) {
    if(this.floorCol(objekt, rad)){return;}
    this.rightCol(objekt, col);
  },
  85:function(objekt, rad, col) {
    if(this.leftCol(objekt, col)){return;}
    this.floorCol(objekt, rad);

  },
  100:function(objekt, rad, col) {
    if(this.floorCol(objekt, rad)){return;}
    if(this.takCol(objekt, rad)){return;}
    if(this.rightCol(objekt,col)){return;}
    this.leftCol(objekt,col);
},
49:function(objekt, rad, col) {
 //   if(this.spikeColL(objekt,col)){return;}
  //  if(this.spikeColR(objekt,col)){return;}
    if(this.spikeCol(objekt,rad)){return;}
    this.takCol(objekt, rad);
},
141:function(objekt, rad, col) {
    if(this.floorFin(objekt,rad)){return;}
    if(this.rightFin(objekt, col)){ return;}
    if(this.leftFin(objekt, col)){return;}
    this.takFin(objekt, rad);
},
35:function(objekt, rad, col) {
    this.floorCol(objekt, rad);
},
37:function(objekt, rad, col) {
    this.floorCol(objekt, rad);
},
36:function(objekt, rad, col) {
    this.floorCol(objekt, rad);
},
20:function(objekt, rad, col) {
    this.floorCol(objekt, rad);
},
144:function(objekt, rad, col) {
    if(this.takCol(objekt, rad)){return;}
    if(this.rightCol(objekt,col)){return;}
    this.leftCol(objekt,col);

},
145:function(objekt, rad, col) {
    if(this.takCol(objekt, rad)){return;}
    if(this.floorCol(objekt, rad)){return;}
    this.leftCol(objekt,col);

},
68:function(objekt, rad, col) {
    if(this.rightCol(objekt,col)){return;}
    this.leftCol(objekt,col);

},
  floorCol(objekt, rad) {
   if(objekt.y - objekt.old_y > 0){

    var bunn = rad * 32;
    
       if ((objekt.y +25)> bunn  && (objekt.old_y + 25) <= bunn) {
            
        objekt.speedY = 0;
        objekt.old_y = bunn- objekt.height - 0.01 ;
        objekt.y = bunn- objekt.height- 0.01; 
       objekt.gravitySpeed = 0; 
      
        objekt.hoppe = false 

        }
        }
      },
  rightCol(objekt, col){
      if(objekt.x-objekt.old_x > 0) {
        var vegR = col* 32;
        if((objekt.x+25)>vegR && (objekt.old_x+25) <= vegR){
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
},
takCol(objekt, rad) {
    if(objekt.y - objekt.old_y < 0){
         
     var tak = (rad+1)  * 32;
     console.log(tak + " " + rad)
        if ((objekt.y )< tak  && (objekt.old_y) >= tak) {
             console.log("ops");
         objekt.speedY = 0;
         objekt.old_y = tak + 0.01 ;
         objekt.y = tak + 0.01; 
        objekt.gravitySpeed = 0; 
       
          
 
         }
         }
        },
spikeCol(objekt, rad) {
    console.log("yo");
    if(objekt.y - objekt.old_y > 0){
        console.log("after");
        var bunn = rad * 32 +10 ;
         
           if ((objekt.y +25)> bunn  && (objekt.old_y + 25) <= bunn) {
                console.log("death");
            objekt.x = 20;
            objekt.y = 180; 
            timer = levelTime[LevelNum];
            
    
            }
            }


},

floorFin(objekt, rad) {
    if(objekt.y - objekt.old_y > 0){
         
     var bunn = rad * 32;
     
        if ((objekt.y +25)> bunn  && (objekt.old_y + 25) <= bunn) {
             
            LevelNum++;
            mapFunk();
            spilleren.x = 20;
            spilleren.y = 200;
            timer = levelTime[LevelNum];
         }
         }
       },
   rightFin(objekt, col){
       if(objekt.x-objekt.old_x > 0) {
         var vegR = col* 32;
         if((objekt.x+25)>vegR && (objekt.old_x+25) <= vegR){

            LevelNum++;
            mapFunk();
            objekt.x = 20;
            objekt.y = 200;
            timer = levelTime[LevelNum];
         }
       }
   },
   leftFin(objekt, col){
     if(objekt.x-objekt.old_x < 0) {
         var vegL = (col+1)* 32;
         if((objekt.x)<vegL && (objekt.old_x) >= vegL){

            LevelNum++;
            mapFunk();
            objekt.x = 20;
            objekt.y = 200;
            timer = levelTime[LevelNum];
         }
     }
 },
 takFin(objekt, rad) {
     if(objekt.y - objekt.old_y < 0){
          
      var tak = (rad+1)  * 32;
      console.log(tak + " " + rad)
         if ((objekt.y )< tak  && (objekt.old_y) >= tak) {

            LevelNum++;
            mapFunk();
            objekt.x = 20;
            objekt.y = 200;
            timer = levelTime[LevelNum];
        
           
  
          }
          }
         }


       };

function colLoop(){

   
        

        
    if(this.spilleren.y-this.spilleren.old_y >0){
    
        this.spilleren.hoppe = true;
    }
   
     if(this.spilleren.y - this.spilleren.old_y > 0){
       
        var left_col = Math.floor(this.spilleren.x / 32);
        var bunn_rad = Math.floor((this.spilleren.y+25)/32);
        var colValue = world.map[bunn_rad* world.col + left_col];
        
        if(colValue > 0 ) {
            
            collision[colValue](this.spilleren, bunn_rad, left_col);
        }

        var right_col = Math.floor((this.spilleren.x+25)/32);
        colValue = world.map[bunn_rad* world.col + right_col];
        
        if(colValue > 0){
            
            collision[colValue](this.spilleren, bunn_rad, right_col);
            
            
        }
    } else if(this.spilleren.y - this.spilleren.old_y < 0) {
        var left_col = Math.floor(this.spilleren.x / 32);
        var top_rad = Math.floor((this.spilleren.y)/32);
        var colValue = world.map[top_rad* world.col + left_col];
        
        if(colValue > 0 ) {
            
            collision[colValue](this.spilleren, top_rad, left_col);
        }

        var right_col = Math.floor((this.spilleren.x+25)/32);
        colValue = world.map[top_rad* world.col + right_col];

        if(colValue > 0){
            
            collision[colValue](this.spilleren, top_rad, right_col);
            
            
        }
    }
   


    if(this.spilleren.x-this.spilleren.old_x <0) {
        var left_col = Math.floor(this.spilleren.x / 32);
        var bunn_rad = Math.floor((this.spilleren.y+25)/32);
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
        var right_col = Math.floor((this.spilleren.x+25)/32);
        var bunn_rad = Math.floor((this.spilleren.y +25)/32);
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
    

}