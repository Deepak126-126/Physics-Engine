const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = { 
    isStatic: true
}

  ground = Bodies.rectangle(200,390,200,20,options);
  World.add(world,ground);

var ball_options = {
  restitution:1.0
}
ball = Bodies.circle(200,100,20,ball_options);
World.add(world,ball);
var ball1_options = {
  restitution:5.0
}
ball1 = Bodies.circle(300,150,50,ball1_options);
World.add(world,ball1);

var ball2_options = {
  restitution:-2.0
}
ball2 = Bodies.circle(100,200,50,ball2_options);
World.add(world,ball2);

  console.log(ground);
  console.log(ground.type);
  console.log(ground.position.x);
  console.log(ground.position.y);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  ellipse(ball1.position.x,ball1.position.y,20,50);
  ellipse(ball2.position.x,ball2.position.y,20,70);
  
  drawSprites();
}