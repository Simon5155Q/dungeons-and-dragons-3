var blob=[];
var obj;
var mp = 100;
var d = new Date();
var n = d.getSeconds();
var movN = 3;
var movN2 = -3; 
var spriteSheet, spriteData;
var anim = [];
var playr;


function preload(){
  spriteData = loadJSON("sprite1.json");
  spriteSheet = loadImage("Images/walk.png");
  
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  playr = createSprite(displayHeight/2, displayWidth/4, 50, 50);

  cursor(CROSS);

  var frames = spriteData.frames;
  for(var i = 0; i < frames.length; i++){
    var pos = frames[i].position;
    var img = spriteSheet.get(pos.x, pos.y, pos.w, pos.h);
     anim.push(img);
  }

  playr = new Char(anim,100,100, 0);
  }


function draw() {
  background("cyan");
  text("magic points:" + mp, 200, 200);
  
  playr.velocityX = 0;
  playr.velocityY = 0;
  for(var i=0;i<8;i++){
    blob[i]=  new Blob(playr.x,playr.y);
  }

  if(mp > 20){
    if(mouseWentDown("leftButton")){
      blob[0].move1();
      blob[1].move2();
      blob[2].move3();
      blob[3].move4();
      blob[4].move5();
      blob[5].move6();
      blob[6].move7();
      blob[7].move8();
      mp = mp - 20;
      for(var i = 0; i<8 ; i++){
        blob[i].display();
        }
    }
  }
 /* else{
    console.log("not enogh mp");
  }*/

  if(mp < 100){
    if(Math.round(second()) % 10 === 0){
      mp = mp + 1
      console.log(mp);
    }
   else{
    mp = 100;
   }
  }
  /*if(mp > 100){
    mp = 100;
  }*/
  
  

  


    if(keyDown("W")){
      playr.mov1();
    }
    if(keyDown("S")){
      playr.mov4();
    }
    if(keyDown("A")){
      playr.mov3();
    }
    if(keyDown("D")){
      playr.mov2();
    }

    playr.display();
    playr.animate();
  

 drawSprites();
console.log(second());
 
 

}
