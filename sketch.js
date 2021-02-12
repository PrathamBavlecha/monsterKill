const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
bg = loadImage("images/GamingBackground.png")
superhero = loadImage("images/Superhero-02.png")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world; 
  Engine.update(engine);

  ground = new Ground(500,600,1500,10)
  
  hero = new Hero(300,100,300)
  monster = new Monster(1000,400,200)

  rope = new Fly(hero.body,{x:300,y:50})

  block1 = new Block(800,550)
  block2 = new Block(800,475)
  block3 = new Block(800,400)
  block4 = new Block(800,325)
  block5 = new Block(800,50)
  block6 = new Block(800,300)

  ablock1 = new Block(700,550)
  ablock2 = new Block(700,500)
  ablock3 = new Block(700,450)
  ablock4 = new Block(700,400)
  ablock5 = new Block(700,350)
  ablock6 = new Block(700,300)
  

  bblock1 = new Block(600,550)
  bblock2 = new Block(600,500)
  bblock3 = new Block(600,450)
  bblock4 = new Block(600,400)
  bblock5 = new Block(600,350)
  bblock6 = new Block(600,300)
  bblock7 = new Block(600,250)

}

function draw() {
  background(bg);
  Engine.update(engine)

  hero.display()
  monster.display()

  ground.display()

  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()


  ablock1.display()
  ablock2.display()
  ablock3.display()
  ablock4.display()
  ablock5.display()

  bblock1.display()
  bblock2.display()
  bblock3.display()
  bblock4.display()
  bblock5.display()
  bblock6.display()
  bblock7.display()
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})  
}

