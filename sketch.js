
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;

var bobDiameter = Bob.r/2*2;

function preload(){
	
}

function setup() {
	createCanvas(1000, 900);
	//createCanvas(500, 300);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(280, 450, 80);
	bob2 = new Bob(330, 450, 80);
	bob3 = new Bob(370, 445, 80);
	bob4 = new Bob(410, 430, 80);
	bob5 = new Bob(450, 410, 80);

	roof = new Roof(440, 180, 400, 20);

	rope1 = new Rope(bob1.body, {x: 280, y: 180});
	rope2 = new Rope(bob2.body, {x: 360, y: 180});
	rope3 = new Rope(bob3.body, {x: 440, y: 180});
	rope4 = new Rope(bob4.body, {x: 520, y: 180});
	rope5 = new Rope(bob5.body, {x: 600, y: 180});
	
	console.log(bob1.body.position);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  Engine.update(engine);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode = 32){
	  Matter.Body.setPosition(bob1.body, {x: 160, y: 240});
	}
  }
