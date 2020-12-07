class Ball{
    constructor(x,y,w,h){
    var options={
   
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
    }

    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.image = loadImage("paper.png");
    this.body =Bodies.rectangle(this.x , this.y ,this.w, this.h, options);
    


    World.add(world,this.body);
    }



    
  
    display(){
     var ball=this.body.position ;
    push();
    translate(ball.x, ball.y, this.w, this.h);
    imageMode(CENTER);
    image(this.image,0,0,this.w,this.h);
    pop();
    }

  }
  