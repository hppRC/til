'use strict';var tileCount=20;var actRandomSeed=0;var actStrokeCap=void 0;var circleResolution=360;var angle=0;var d=6.28/circleResolution;var setup=function setup(){createCanvas(windowWidth,windowHeight);actStrokeCap=ROUND;};var draw=function draw(){clear();strokeCap(actStrokeCap);randomSeed(actRandomSeed);if(angle>PI||angle<0){d*=-1;}angle+=d;console.log(angle);for(var gridY=0;gridY<tileCount;gridY++){for(var gridX=0;gridX<tileCount;gridX++){var posX=width/tileCount*gridX;var posY=height/tileCount*gridY;var toggle=int(random(0,2));if(!toggle){strokeWeight(windowWidth/2*sin(angle)/20);line(posX,posY,posX+width/tileCount,posY+height/tileCount);}if(toggle){strokeWeight(windowHeight/2*sin(angle)/20);line(posX,posY+width/tileCount,posX+height/tileCount,posY);}}}};var mousePressed=function mousePressed(){actRandomSeed=random(100000);};var keyReleased=function keyReleased(){if(key=='s'||key=='S')saveCanvas(gd.timestamp(),'png');if(key=='1')actStrokeCap=ROUND;if(key=='2')actStrokeCap=SQUARE;if(key=='3')actStrokeCap=PROJECT;};