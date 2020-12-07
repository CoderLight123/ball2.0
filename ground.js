class Ground{
    constructor(x,y,w,h){

        var options={
   
            isStatic:true,
            }

this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.body =Bodies.rectangle(this.x , this.y ,this.w, this.h,options)
    
    
    World.add(world,this.body)
    }



    
  
    display() {
     var go=this.body.position ;
    push();
    translate(go.x, go.y);
rectMode(CENTER);
fill("yellow")
strokeWeight(3)
    rect(0,0,this.w,45)
    pop();

    }
  }
  