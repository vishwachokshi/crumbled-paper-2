
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
var engine, world;
var ground;
var paper
var log1,log2,log3;

}
   
function setup() {
	createCanvas(800, 700);
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

	ground = new Ground(400,650,1200,20);
	paper = new Paper(100,625,10,10);
    log1 = new Dustbin(500,625,300,15);
	log2 = new Dustbin(515,625,15,200);
    log3 = new Dustbin(715,625,300,15);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  log1.display();
  log2.display();
  log3.display();

  drawSprites();
 
}

function keyPressed () {
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position(x = 100, y = 100))
		friction : 0.5;
	}
}

