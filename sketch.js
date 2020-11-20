
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var chain1, chain2, chain3, chain4, chain5;
var roof;


function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2, 150, 500, 50);

	bob1 = new Bob(width/2,height/2+100,40);
	bob2 = new Bob(width/2-82,height/2+100,40);
	bob3 = new Bob(width/2-164,height/2+100,40);
	bob4 = new Bob(width/2+82,height/2+100,40);
	bob5 = new Bob(width/2+164,height/2+100,40);
	chain1 = new Chain(bob1.body,roof.body,0,0);
	chain2 = new Chain(bob2.body,roof.body,-82,0);
	chain3 = new Chain(bob3.body,roof.body,-164,0);
	chain4 = new Chain(bob4.body,roof.body,80,0);
	chain5 = new Chain(bob5.body,roof.body,164,0);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(color(201,201,201));
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  move(bob3);
}

function move(body40){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(body40.body,body40.body.position,{x:-50,y:50});
	}
}

