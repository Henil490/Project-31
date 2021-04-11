class Plinko{
    constructor(x, y) {
      var options = {
        restitution:0.7,
        isStatic:true
      }
      this.x=x;
      this.y=y;
      this.radius=10;
     this.body = Bodies.circle(this.x,this. y, this.radius, options);
     World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      fill("white");
      pop();
    }
  };
