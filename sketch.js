var bgImg;
var machine,MImg;
// ss = spaceShip
var ss,sst,ssl,ssr;
var ssImg,sstImg,sslImg,ssrImg;
var hasDocked;

function preload(){
bgImg = loadImage("spacebg.jpg");
MImg = loadImage("iss.png");
ssImg = loadImage("spacecraft1.png");
sstImg = loadImage("spacecraft2.png");
sslImg = loadImage("spacecraft3.png");
ssrImg = loadImage("spacecraft4.png");

}

function setup() {
  createCanvas(1000, 900);

  ss=createSprite(400,700);
  ss.addImage(ssImg);
  ss.scale = 0.3;
  ss.debug=false;
  ss.setCollider("rectangle",0,0,200,450)

  machine=createSprite(500,250);
  machine.addImage(MImg);
  machine.scale = 0.7;
  machine.debug=false;
  machine.setCollider("circle",0,0,80)

}

function draw() {
  background(bgImg);  
  console.log(hasDocked);
   
  if(ss.isTouching(machine)){
     hasDocked=true;
     ss.velocityY=0;
     ss.velocityX=0;
    textSize(30);
    fill("white")
    text(" Docking Succesful! ",450,580);
  }
  else{
    textSize(30);
    fill("white");
    hasDocked=false;
    text(" Un Docked... ",450,580);
  }

 if(keyDown("UP_ARRow")){
   ss.velocityY = -3.0;
   ss.addImage(sstImg);
 }

 if(keyDown("LEFT_ARROW")){
  ss.velocityX = -0.8;
  ss.addImage(ssrImg);
}

if(keyDown("DOWN_ARROW")){
  ss.velocityY = 2.0;
  ss.addImage(ssImg);
}

if(keyDown("RIGHT_ARROW")){
  ss.velocityX = 0.7;
  ss.addImage(sslImg);
}

if(keyWentUp("UP_ARROW")){
  ss.velocityY = 0;
  ss.addImage(ssImg);
}

if(keyWentUp("DOWN_ARROW")){
  ss.velocityY = 0;
  ss.addImage(ssImg);
}

if(keyWentUp("LEFT_ARROW")){
  ss.velocityX = 0;
  ss.addImage(ssImg);
}

if(keyWentUp("RIGHT_ARROW")){
  ss.velocityX = 0;
  ss.addImage(ssImg);
}
  
   drawSprites();
}