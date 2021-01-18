var jerry,jerry1Image,jerry2Image,jerry3Image,jerry4Image
var tom,tom1Image,tom12,tom13,tom14
var cheese,cheeseImage
var garden,gardenImage
var canvas
var edge1,edge2,edge3


function preload() {
    //load the images here
      jerry1Image=loadImage("images/jerryFour.png");
      tom1Image=loadImage("images/tomOne.png");
      tom2Image=loadImage("images/tomTwo.png");
      tom3Image=loadImage("images/tomThree.png");
      tom4Image=loadImage("images/tomFour.png")
      gardenImage=loadImage("images/garden.png");
      cheeseImage=loadImage("images/cheese.png")
   
   

}

function setup(){
    canvas = createCanvas(900,600);
    //create tom and jerry sprites here
    jerry=createSprite(200,400,50,10);
    jerry.addImage(jerry1Image);
    jerry.scale=0.1

    cheese=createSprite(220,420,30,40)
    jerry.addImage(cheeseImage);

    
  
    

    tom=createSprite(300,500,50,70);
    tom.addImage(tom1Image);
    tom.scale=0.1
    

    edge1=createSprite(450,600,900,10)




}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide






    jerry.display();

    keyPressed();

    drawSprites();
}


function keyPressed(){

  if(keyDown("A")){
    tom.velocityX= -12
    var rand = Math.round(random(1,6));
    switch(rand) {
      
      case 2: tom.addImage(tom2Image);
              break;
      case 3: tom.addImage(tom3Image);
              break;
     

      default: break;
    }
  
   

  }
  if(keyDown("D")){
    tom.velocityX=+12

    var rand = Math.round(random(1,6));
    switch(rand) {
      
      case 2: tom.addImage(tom2Image);
              break;
      case 3: tom.addImage(tom3Image);
              break;
     

      default: break;
    }

  }

 
  


}
