class Rope{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.04,
          length: 0
      }
      this.pointB=pointB
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
  }
  display(){
      if(this.rope.bodyA){
          var pointA = this.rope.bodyA.position;
          var pointB = this.pointB;
          push()
          strokeWeight(4);
          stroke("green");
          line(pointA.x, pointA.y, pointB.x, pointB.y);
          pop()
      }
  }
  fly(){
      this.rope.bodyA=null;
  }
  attach(body1){
    this.rope.bodyA=body1;
    Matter.Body.setStatic(body1,true);
  }
}