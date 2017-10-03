var xpos = 0;
var xspeed = 5;

var ypos = 0;
var yspeed = 3;

var c;

function setup() {
    createCanvas(windowWidth, windowHeight);
    c = color(0,255,0);
}

function draw() {
    background(255);
    
    fill(c);    

    ellipse(xpos, ypos, 50, 50);

    if (xpos >= width || xpos < 0) {
        xspeed = -1 * xspeed;
    }
    
    if (ypos > height|| ypos < 0) {
        yspeed = -1 *yspeed;       
    }

    xpos = xpos + xspeed;
    ypos = ypos + yspeed;

    console.log(mouseY);

    if(mouseIsPressed){
         c= color(234,0,34);
    }else{
         c= color(0,0,255);
    }
    
    
}

