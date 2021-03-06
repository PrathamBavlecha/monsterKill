class Monster{
    constructor(x,y,r){
        var options = {
            density: 1,
            frictionAir:0.05
        }
        this.r = r
        this.x = x
        this.y = y
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options)
        this.image = loadImage("images/Monster-01.png") 
        World.add(world,this.body)
        
    }
    display(){
        var pos = this.body.position
        push ()
        imageMode(CENTER)   
        image(this.image,pos.x,pos.y,this.r,this.r)
        pop ()
    }
}