class Stone{
  constructor(x, y, sides, radius, color){
    this.r=radius;
    this.s=sides;
    this.c=color;
    this.img=loadImage("Hexagon-Light-Blue-PNG.png");
    var option={
      'isStatic':true,
      'restitution':1,
      'density':0.5
    }
    this.body=Bodies.polygon(x,y,sides,radius,option);
    World.add(world,this.body);
  }
  display(){
    var pos=this.body.position;
    fill(this.c);
    imageMode(CENTER);
    image(this.img,pos.x,pos.y,this.r*2,this.r*2);
  }
}