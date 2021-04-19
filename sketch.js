

var backgroundImage,grassland;
var bowImage,bow;
var redballoon,red,blueballoon,blue,greenballoon,green,pinkballoon,pink,blueGroup,pinkGroup,greenGroup,redGroup;
var arrowImage,arrow,arrowGroup;
var select_balloon;
var score;

function preload(){
   //load your images here 
  backgroundImage=loadImage("background0.png");
  
  bowImage=loadImage("bow0.png")
  
  balloonRed=loadImage("red_balloon0.png")
  balloonBlue=loadImage("blue_balloon0.png")
  balloonGreen=loadImage("green_balloon0.png")
  balloonPink=loadImage("pink_balloon0.png")
  
  arrowImage=loadImage("arrow0.png")
  

}

  

function setup() {
  createCanvas(600, 600);
  
  
  //add code here
  grassland = createSprite(600,90,20,20);
  grassland.addImage("image",backgroundImage);
  grassland.scale=3;
  grassland.x = grassland.width /1;
  grassland.velocityX=-2.5;
  
  
  score = 0;
  

  
  bow = createSprite(560,mouseY,20,20);
  bow.addImage("bowimage",bowImage);
    
  
  blueGroup=new Group();
  greenGroup=new Group();
  redGroup=new Group();
  pinkGroup=new Group();
  arrowGroup=new Group();
}


function draw() {
  background(220);
  
  
  
  
  if (grassland.x < 0) {
    grassland.x = grassland.width /1;
  }
  bow.y = mouseY;
  
  
  if(keyWentDown("space")){
    arrow=createSprite(550,mouseY,20,20)
    arrow.velocityX=-10;
    arrow.addImage(arrowImage)
    arrow.scale=0.3;
    arrow.lifetime=60;
    
    arrowGroup.add(arrow);
  }
  
  if(redGroup.isTouching(arrow)){
    arrow.destroy();
    red.destroy();
    score=score+1;
  }
   if(blueGroup.isTouching(arrow)){
    arrow.destroy();
    blue.destroy();
    score=score+3;
  }
   if(greenGroup.isTouching(arrow)){
    arrow.destroy();
    green.destroy();
    score=score+2;
  }
   if(pinkGroup.isTouching(arrow)){
    arrow.destroy();
    pink.destroy();
     score=score+1;
  }
  
  select_balloon = round(random(1,4));
  console.log(select_balloon);
    
   if(frameCount%200===0){
     if(select_balloon == 1){
       redBalloon();
     }else if(select_balloon == 2){
       blueBalloon();
     }else if(select_balloon == 3){
       greenBalloon();
     }else {
       pinkBalloon();
     } 
     
      
   }
   
  
  
  
  
  drawSprites();
  textSize(20)
  text("Score : " + score,400,50);
  
}

function redBalloon(){
  
 
  red=createSprite(0,300,10,10);
  red.y=(round(random(100,540)))
  red.velocityX=3;
  red.addImage(balloonRed)
  red.scale=0.1;
  red.lifetime=200;
  
  redGroup.add(red);
}
function blueBalloon(){
  
 
  blue=createSprite(0,300,10,10);
  blue.y=(round(random(40,540)))
  blue.velocityX=3;
  blue.addImage(balloonBlue)
  blue.scale=0.1;
  blue.lifetime=200;
  
  blueGroup.add(blue);
}
function pinkBalloon(){
  
  
  pink=createSprite(0,300,10,10);
  pink.y=(round(random(40,540)))
  pink.velocityX=3;
  pink.addImage(balloonPink)
  pink.scale=1.3;
  pink.lifetime=200;
  
  pinkGroup.add(pink);
}
function greenBalloon(){
  
  
  green=createSprite(0,300,10,10);
  green.y=(round(random(40,540)))
  green.velocityX=3;
  green.addImage(balloonGreen)
  green.scale=0.1;
  green.lifetime=200;
  
 greenGroup.add(green);
}
