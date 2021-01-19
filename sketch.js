
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//declare variables
var ground;
var border1,border2,border3,border4;
var divisionHeight = 300;
var width = 480;
var particle;

var particles = [];
var plinkos = [];
var divisions = [];

function preload()
{
	//add images
}

function setup() {
	createCanvas(480,800);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.

  border1 = new Ground(240,3,480,6);
  border2 = new Ground(240,797,480,6);
  border3 = new Ground(3,400,6,800);
  border4 = new Ground(477,400,6,800);

  ground = new Ground(240,784,480,20);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  //add particles to array
  if(frameCount%30 === 0){
    particles.push(new Particle(random(50, 440),30,10));
  }
 
  //display particles
  for(var m = 0; m<particles.length; m++){
    particles[m].display();
  }

  //create divisions
  for(var k = 0; k <= divisions.length; k = k + 80){
    divisions.push(new Divisions(k,800-(divisionHeight/2),10,divisionHeight));
  }

  //display divisions
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  //first row of plinkos
  for(var i = 40; i <= width; i = i+50){
    var plinko = new Plinko(i,75,15);
    plinko.display();
  }

  //second row of plinkos
  for(var i = 15; i <= width-10; i = i+50){
    var plinko = new Plinko(i,175,15);
    plinko.display();
  }

  //third row of plinkos
  for(var i = 40; i <= width-10; i = i+50){
    var plinko = new Plinko(i,275,15);
    plinko.display();
  }

  //fourth row of plinkos
  for(var i = 15; i <= width-10; i = i+50){
    var plinko = new Plinko(i,375,15);
    plinko.display();
  }
  
  fill("red");
  border1.display();
  border2.display();

  fill("white");
  ground.display();

  fill("red");
  border3.display();
  border4.display();

  drawSprites();

}
