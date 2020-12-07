var ball1, white, bin1, bin2, bin3, bina, binb, binc, groundok;




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
PLAY=1;
END=0;
game=PLAY;

function preload()
{
	ground=loadImage("g.jpg");
	bin321=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 597);


	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);

	//grounda = createSprite(width/2,588,width,19);
	//grounda.shapeColor=("black");

	ball1 = new Ball(100,540,60,60);

	bin1 = createSprite(920,570,125,17);
	bin1.visible=false;
	//bin1.shapeColor=("blue");
	bin2 = createSprite(860,510,17,130);
	bin2.visible=false;
	//bin2.shapeColor=("blue");
	bin3 = createSprite(980,510,17,130);
	bin3.visible=false;
	//bin3.shapeColor=("blue");
	bin123 = createSprite(920,500,10,10);
	bin123.addImage(bin321);
	bin123.scale=0.45

	bina =Bodies.rectangle(920,585,125,17 , {isStatic:true} );
	World.add(world, bina);
	binb =Bodies.rectangle(860,510,17,130 , {isStatic:true} );
	World.add(world, binb);
	binc =Bodies.rectangle(980,510,17,130 , {isStatic:true} );
	World.add(world, binc);	

	groundok = new Ground(width/2, 599, 1500, 20 , {isStatic:true} );
 	World.add(world, groundok);

	//var game is ... 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 // background(ground);
 background("lightgrey");

  ball1.display();
  groundok.display();
  drawSprites();
}

function keyPressed(){

	if(keyCode === UP_ARROW && (game===PLAY)){

	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:190,y:-300});
	game = END;
	}

}

