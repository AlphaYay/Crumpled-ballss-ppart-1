
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, bin, ground;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bin=new Dustbin(1200,650);
	paper= new Paper(200,450,40);
	ground= new Ground(800,670,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bin.display();
  paper.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55});
	}
}

