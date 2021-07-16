class Char{
constructor (animation, x, y, speed){
  this.playr=createSprite(x,y,10,10)
  this.x = x;
  this.y = y;
  this.animation = animation;
  this.w=animation.width
 this.len = anim.length;
  this.speed = speed;
  this.index = 0;//

 }
 display() {
 var index = round(this.index)%this.len;
  //console.log(index)
  //image(this.animation[index],this.x,this.y)
  this.playr.addAnimation("animation",this.animation[index]);
   
}
mov1(){
  this.playr.setVelocity(0,-3);
}
mov2(){
  this.playr.setVelocity(3,0);
}
mov3(){
  this.playr.setVelocity(0,3);
}
mov4(){
  this.playr.setVelocity(-3,0);
} 
animate() {
  this.index += this.speed;
  this.x += this.speed * 10;

//if (this.x > width) {
//   this.x = -this.w;
 // }
 
}


}