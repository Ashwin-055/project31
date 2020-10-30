const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,ground1,ground2,box1,box2,box3,box4,box5,play=true,score=0,bImg;
function preload(){
  getBImg();
}
function setup(){
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(650,600,width,20);
  ground1=new Ground(1065,500,285,10);
  ground2=new Ground(650,300,285,10);
  box1=new Box(945,470,40,50,"red");
  box2=new Box(985,470,40,50,"red");
  box3=new Box(1025,470,40,50,"red");
  box4=new Box(1065,470,40,50,"red");
  box5=new Box(1105,470,40,50,"red");
  box6=new Box(1145,470,40,50,"red");
  box7=new Box(1185,470,40,50,"red");
  box8=new Box(985,420,40,50,"green");
  box9=new Box(1025,420,40,50,"green");
  box10=new Box(1065,420,40,50,"green");
  box11=new Box(1105,420,40,50,"green");
  box12=new Box(1145,420,40,50,"green");
  box13=new Box(1025,370,40,50,"blue");
  box14=new Box(1065,370,40,50,"blue");
  box15=new Box(1105,370,40,50,"blue");
  box16=new Box(1065,320,40,50,"teal");
  box17=new Box(527.5,270,40,50,"red");
  box18=new Box(567.5,270,40,50,"red");
  box19=new Box(607.5,270,40,50,"red");
  box20=new Box(647.5,270,40,50,"red");
  box21=new Box(687.5,270,40,50,"red");
  box22=new Box(727.5,270,40,50,"red");
  box23=new Box(767.5,270,40,50,"red");
  box24=new Box(567.5,220,40,50,"green");
  box25=new Box(607.5,220,40,50,"green");
  box26=new Box(647.5,220,40,50,"green");
  box27=new Box(687.5,220,40,50,"green");
  box28=new Box(727.5,220,40,50,"green");
  box29=new Box(607.5,170,40,50,"blue");
  box30=new Box(647.5,170,40,50,"blue");
  box31=new Box(687.5,170,40,50,"blue");
  box32=new Box(647.5,120,40,50,"teal");
  stone=new Stone(150,500,6,20,"orange");
  rope=new Rope(stone.body,{x:150,y:500});
}

function draw() {
  if(bImg){
     background(bImg);
  }
  Engine.update(engine);
  ground.display();
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  stone.display();
  rope.display();
  ground2.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  box29.score();
  box30.score();
  box31.score();
  box32.score();
  textSize(30);
  text("Points:"+score,1050,40);
  if(mouseIsPressed){
      mouseDragged();
  }
}
function mouseDragged(){
  if(play==true&&mouseX<250&&mouseY>350){
    Matter.Body.setStatic(stone.body,false);
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
}
function mouseReleased(){
    if(mouseX<250&&mouseY>350){
       play=false; 
       rope.fly();
    }
}
function keyPressed(){
  if(keyCode==32&&stone.body.position.x!=150&&stone.body.position.y!=500){
     Matter.Body.setPosition(stone.body,{x:150,y:500});
     play=true;
     rope.attach(stone.body);
  }
}
async function getBImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<6){
        b = "mB.png";
    }
    else{
        b = "nB.jpg";
    }

    bImg = loadImage(b);
}