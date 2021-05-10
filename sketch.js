var balloon,balloonImage1,balloonImage2;
var xypos

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
  }


function setup() {
  database=firebase.database();
  var pointer=database.ref("Position");
  pointer.on("value",readPosition);


  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  
}


function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage1);
    changePosition(-1,0);

  }

  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage1);
    changePosition(1,0);

  }

  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage1);
    changePosition(0,-1);

  }

  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage1);
    changePosition(0,+1);

  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function changePosition(x,y){
  database.ref("Position").set({
      xDB:xypos.xDB+x,
      yDB:xypos.yDB+y
  })
}

function readPosition(data){
  xypos=data.val();
  balloon.x=xypos.xDB
  balloon.y=xypos.yDB
  }
  