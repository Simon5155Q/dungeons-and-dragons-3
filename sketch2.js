var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var database;
var form, player, game;
var allPlayers;
var spriteSheet, spriteData;
var anim = [];
var playr;

function preload(){
  spriteData = loadJSON("sprite.json");
  spriteSheet = loadImage("walk.png");
  
}


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  //database = firebase.database();
  console.log(spriteData)
  /*game = new Game();
  game.getState();
  game.start();
  game.update(1); */ 
  var frames = spriteData.frames;
  for(var i = 0; i < frames.length; i++){
    var pos = frames[i].position;
    var img = spriteSheet.get(pos.x, pos.y, pos.w, pos.h);
     anim.push(img);
  }
  console.log(anim);

  playr = new Char(anim,100,100, 0.5);
}

function draw(){
  background("cyan");
  //image(anim[frameCount % anim.length],200,200)
  /*if(gameState === 1){
    clear();
    game.play();
  }*/


  playr.display();
  playr.animate();
  

  


}
