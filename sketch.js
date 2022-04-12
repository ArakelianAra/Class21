//Name Spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ball
var engine, world;
var ground;
var left,right,topWall
function setup() {
  createCanvas(800,400);

  //Creating variable engine & world that we can change/manipulate
  engine = Engine.create();
  world = engine.world;

  var ball_options={restitution:2}
  ball=Bodies.circle(200,200,30,ball_options)
  World.add(world,ball)

  //new = new object
  ground = new Ground(400, 380, 800, 20);
  left=new Ground(20,200,20,400)
  right=new Ground(780,200,20,400)
  topWall=new Ground(400,20,800,20)
}

function draw() {
  Engine.update(engine);

  background(0);  
      left.display()
   ground.display();
   right.display()
   topWall.display()
  //ellipse - oval
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  
}

/*
OBJECT ORIENTED PROGRAMMING - OOP
      Objects:
            1. Properties
            2. Functions

      Steps to create an object:
            1. Creating a design - properties/functions - CLASS
            2. Creating the object - properties are assigned automatically (not functions)
            3. Functions are used when & if they are required
*/