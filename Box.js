class Box{
  constructor(x, y, width, height, color){
    this.w=width;
    this.h=height;
    this.c=color;
    var option={
      'isStatic':false,
      'restitution':0
    }
    this.Visibility=255;
    this.body=Bodies.rectangle(x,y,width,height,option);
    World.add(world,this.body);
  }
  display(){
    if(this.body.speed < 3){
       var pos=this.body.position;
       var angle=this.body.angle;
       push();
       //translate(pos.x,pos.y);
       rotate(angle);
       fill(this.c);
       rect(pos.x,pos.y,this.w,this.h);
       pop();
    }else{
       World.remove(world, this.body);
       push();
       this.Visibility = this.Visibility - 5;
       pop();
    }
  }
  score(){
    if(this.Visibility<0&&this.Visibility>-105){
       score++;
    }
  }
}