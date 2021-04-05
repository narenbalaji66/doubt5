const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var maxDrop=100,drops=[];
var engine,world;
function preload(){
    
}

function setup(){
     
     engine=Engine.create
     world=engine.world
     createCanvas(400,1000);
     if (frameCount%150===0){
     for(var i=0; i<maxDrop; i++){
        drops.push(new Drops(random(0,400), random(0,400)))
     } 
     } 
    
}

function draw(){
    background("black");
    Engine.update(engine)
    for(var i=0; i<maxDrops; i++){
        drops[i].display()
    }
    
}   

