class Bob {
    constructor(x, y, r) {
      var options = {
          //isStatic:true,
          'restitution':1.1,
          'friction':1.1,
          'density':1.01
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle(this.x, this.y, this.r/2, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      fill(255, 0, 255);
      ellipse(0, 0, this.r);
      pop();
    }
  };