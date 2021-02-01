const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var gamestate = "onSling";

var log;
var score=0;
var chain1;
var box1, pig1;
var backgroundImg,platform;
var bg;

function preload() {
    getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 350, 170);

    log = new Log(230,180,180,PI/2);
    
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
   
    bird = new Bird(200,50);

    chain1 = new SlingShot(bird.body,{x:200,y:50});
   /* var options = {
    bodyA:bird.body,
    bodyB:log.body,
    length:10,
    stiffness:0.04
    }
    chain=Constraint.create(options);
    World.add(world,chain);*/
}

function draw(){
    if(backgroundImg){
    background(backgroundImg);
    }

  text("score:"+ score,1000,20);

    Engine.update(engine);

    pig1.score();
    pig3.score();

    //console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
   // log.display();

    chain1.display();
    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();

    

    // line(bird.body.position.x,bird.body.position.y,log.body.position.x,log.body.position.y)
}

function mouseDragged(){
    if(gamestate !="launched"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
}

function mouseReleased(){
    chain1.fly();
    gamestate = "launched";
}

function keyPressed(){

if(keyCode===32 && bird.body.speed<1){

   console.log(bird.body.speed)

   bird.path = []
   Matter.Body.setPosition(bird.body,{x:200,y:50});
   //Matter.Body.setVelocity(bird.body,{x:0,y:0});
   chain1.attach(bird.body);
}
}

async function getBackgroundImage(){ //async and await

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var hour = responseJSON.datetime.slice(11,13); //11th and 12th (11 is included, doesnt include 13th)   

    if (hour > 06 && hour < 19){

     bg="sprites/bg.png"

    } 

    else {
        bg="sprites/bg2.jpg";
        
    }


    backgroundImg = loadImage(bg);
    //slice(2,6)-->2,3,4,5
 
    
    //2021-01-28T19:10:27.756436+05:30


}