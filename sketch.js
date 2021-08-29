var cat,catImg1,catImg2
var mouse,mouseImg1,mouseImg2
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catImg1 = loadAnimation("images/cat1.png")
    mouseImg1 = loadAnimation("images/mouse1.png")
    catImg2 = loadAnimation("images/cat2.png,cat3.png")
    mouseImg2 = loadAnimation("images/mouse2.png,mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(800,500)
mouse = createSprite(200,500)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x = mouse.x<(cat.width-mouse.width/2)){
    
}
    drawSprites();
}


function keyPressed(){
if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouse-teasing",mouseImg2)
    mouse.changeAnimation("mouse-teasing")
    mouse.frameDelay = 25
}
  //For moving and changing animation write code here
if(keyCode=== LEFT_ARROW ){
mouse.addAnimation("mouse-teasing",mouseImg2);
mouse.changeAnimation("mouse-teasing")
mouse.frameDelay = 125
}

}
