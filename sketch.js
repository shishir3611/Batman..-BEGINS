const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var thunderCreatedFrame=0;

function preload(){
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(800,800);
    umbrella = new Umbrella(200,400);

    //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,1500), random(0,800)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(1400,130), random(10,30), 30, 30);
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //displaying rain drops
    for(var i = 1; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    drawSprites();
}  