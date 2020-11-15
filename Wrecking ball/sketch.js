const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;
const Engine = Matter.Engine;
var box1,box2,box3,box4,box5;
var engine, world, ball;
const Constraint = Matter.Constraint;

function setup(){
    createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(500,800,3000,20);
    box1 = new Box(500,475,70,70);
    box2 = new Box(500,545,70,70);
    box3 = new Box(500,615,70,70);
    box4 = new Box(500,685,70,70);
    box5 = new Box(500,600,70,70);
    ball = new Ball(350,500,80,80);
    rope = new Rope(ball.body, {x:300,y:80});

 
}

function draw(){
background(102);
Engine.update(engine);
ground.display();
box1.display();
box4.display();
box2.display();
box3.display();
box5.display();
ball.display();
rope.display();


}

function mouseDragged(){
    Body.setPosition(ball.body,{x:mouseX,y:mouseY});
};