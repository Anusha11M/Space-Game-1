var bg, bgImg
var bottomGround
var topGround
var rocket, rocketImg;
var asteroid,asteroidImg;
var mars, marsImg;
var neptune, neptuneImg;
var restart,restartImg, satellite, satelliteImg;
var Saturn, SaturnImg;


function preload(){
rocketImg = loadImage("Images/Rocket.png")
asteroidImg = loadImage("Images/asteroid.png")
marsImg = loadImage("Images/mars.png")
neptuneImg = loadImage("Images/neptune.png")
restartImg = loadImage("Images/restart.png")
satelliteImg = loadImage("Images/satellite.png")
SaturnImg = loadImage("Images/Saturn.png")
bgImg = loadImage("Images/Space.png")
}

function setup(){

  canvas = createCanvas(displayWidth-20,displayHeight-30);
 
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
rocket = createSprite(100,200,20,50);
rocket.addImage(rocketImg);
rocket.scale = 0.2;

bg.velocityX=4;

}

function draw() {
  
  background("black");
  
  if (bg.x<400){

    bg.x =bg.width/2;
  } 
          //making the hot air balloon jump
          if(keyDown("space")) {
            rocket.velocityY = -6 ;
            
          }

          //adding gravity
           rocket.velocityY = rocket.velocityY + 2;
          
        drawSprites();
        
}