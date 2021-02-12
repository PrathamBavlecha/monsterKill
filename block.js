class Block {

constructor (x, y) {
    var options = {
    restitution :0.8, 
    friction:1.0,
    density:2,
    isStatic:false 
    }
    
    this.body = Bodies.rectangle(x, y, 75, 75, options);
    this.width = width; 
    this.height = height;
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
    World.add(world, this.body);
}
display(){
    
    var pos = this.body.position; 
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle)
    rectMode(CENTER)
    strokeWeight (3)
    stroke("black");
    fill(this.color);
    rect (0, 0,75,75)
    pop();
}
}