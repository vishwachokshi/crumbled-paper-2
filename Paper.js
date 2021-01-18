class Paper
{
  constructor(x, y) 
  {
    var options = {
        isstatic : false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.body = Bodies.circle(x, y, 50, [options], [maxSides]);
    this.width = 50;
    this.height = 50;
    this.image = loadImage("sprites/paper.png");
    this.scale = 70
    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("white");
    fill("red");
    Matter.Bodies.circle(x, y, 50, [options], [maxSides]);
    pop();
  }
};
