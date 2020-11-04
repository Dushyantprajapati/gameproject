const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;

var ground;
var Alex;

function setup() {
  createCanvas(800,500);
  
  engine=Engine.create();
  world=engine.world
    
  Alex=new Alex1(30,480,50,50);
  ground=new Ground(400,490,800,10);
 
}

function draw() {
  
  Engine.update(engine);
  background("red");  


    Alex.display();
  ground.display();
}