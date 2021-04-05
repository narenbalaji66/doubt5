class Drops{
    constructor(x,y,radius){
   var options={
      friction:0.5
   }
   
   this.radius=radius
   this.body=Matter.Bodies.circle(x,y,radius,options)
   World.add(world,this.body)
} 
  display(){
push()
translate(this.body.position.x, this.body.position.y);
fill("blue");
ellipse(this.body.position.x,this.body.position.y,this.radius*2,this.radius*2)
pop()
  }


}
