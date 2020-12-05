var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var red1,red2,red3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	red1=createSprite(330,630,10,70)
	red1.shapeColor="red"

	red2=createSprite(450,630,10,70)
	red2.shapeColor="red"

	red3=createSprite(395,655,120,10)
	red3.shapeColor="red"

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 red1 = Bodies.rectangle(330,630,10,70,{isStatic:false})
	 World.add(world,red1);

	 red2= Bodies.rectangle(450,630,10,70,{isStatic:false})
	 World.add(world,red2);

	 red3 = Bodies.rectangle(395,655,120,10,{isStatic:false})
	 World.add(world,red3);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageBody.keyPressed;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode===DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
  Matter.Body.setStatic(packageBody, false)
    
  }
}



