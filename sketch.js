var ball;
var edges;
var canvas;
var music;
var redCrayon, purpleCrayon, yellowCrayon, blueCrayon;
var redCrayonImg, purpleCrayonImg, yellowCrayonImg, blueCrayonImg;

function preload(){
    music = loadSound("sound.mp3");
    blueCrayonImg = loadImage("crayon1.png");
    yellowCrayonImg = loadImage("crayon2.png");
    purpleCrayonImg = loadImage("crayon3.png");
    redCrayonImg = loadImage("crayon4.png");
}


function setup(){
    canvas = createCanvas(550,500);

    redCrayon = createSprite (60,480,10,10);
    redCrayon.addImage("redC", redCrayonImg);
    redCrayon.scale = 0.2;

    yellowCrayon = createSprite (200,480,10,10);
    yellowCrayon.addImage("yellowC", yellowCrayonImg);
    yellowCrayon.scale = 0.2;    

    purpleCrayon = createSprite (340,480,10,10);
    purpleCrayon.addImage("purpleC", purpleCrayonImg);
    purpleCrayon.scale = 0.2;

    blueCrayon = createSprite (480,480,10,10);
    blueCrayon.addImage("blueC", blueCrayonImg);
    blueCrayon.scale = 0.2;    

    ball = createSprite(random(50,500),100,25,25);
    ball.shapeColor = "white";
    ball.setVelocity(-4,3);
}

function draw() {
    background("lightgrey");
    edges = createEdgeSprites();

    ball.bounceOff(edges);
  
    if(ball.isTouching(redCrayon)){
        music.play();
        ball.bounceOff(redCrayon);
        ball.shapeColor = "red";
    }

    if(ball.isTouching(blueCrayon)){
        music.play();
        ball.bounceOff(blueCrayon);
        ball.shapeColor = "cyan";
    }

    if(ball.isTouching(yellowCrayon)){
        music.play();
        ball.bounceOff(yellowCrayon);
        ball.shapeColor = "yellow";
    }

    if(ball.isTouching(purpleCrayon)){
        music.play();
        ball.bounceOff(purpleCrayon);
        ball.shapeColor = "violet";
        ball.setVelocity(0,0);
    }

    drawSprites();
}
