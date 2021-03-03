const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create()
  world = engine.world;
  ground = new ground(width/2,height,width,20);

  for(var i = 0 , i < = width; i = i + 80){
   divisons.push(new Divisons(i,height - divisonsHeight / 2, 10,divisonsHeight))
  }
   
  for(var m = 75; m <width;m = m+50 ){
    plinkos.push(new Plinko(m,75));
  }
    
  for(var m = 50; m <width;m = m+50 ){
    plinkos.push(new Plinko(m,175));
  }
    
  for(var m = 75; m <width;m = m+50 ){
    plinkos.push(new Plinko(m,275));
  }
    
  for(var m = 55; m <width;m = m+50 ){
    plinkos.push(new Plinko(m,375));
  }
}

function draw() {
  background(255,255,255);  
  textSize(25)
  Engine.update(engine);
  ground.display();

  for(var i = 0 ; i <plinkos.lenght;1++){
    plonkos[i].display();
  }

  


drawSprites()
  
}
