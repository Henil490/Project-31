const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

function setup() {

  engine = Engine.create();
    world = engine.world;
  ground=new Ground(250,790,500,10);
  createCanvas(800,400);
 
  for(var k=0;k <width; k=k+80){
    divisions.push(newDivisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,75));
 }

 for (var j = 15; j <=width-10; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,175));
 }

  for (var j = 40; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,75));
 }

  for (var j = 15; j <=width-10; j=j+50) 
 {
  plinkos.push(new Plinko(j,175));
  }}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  ground.display();
  
  for (var j=0;j<plinkos.length; j++) {
     
    particles[j].display();
  }
  for(var k=0;k < plinkos.length; k++){
     
    divisions[k].display();}
    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-30, width/2+30), 10,10));}
  drawSprites();
}
