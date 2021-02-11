function setup() {
  createCanvas(800, 600);
  // since the rubric asks for comments, fine, this wasted ten minutes of time to do
}
var house1x = 400;
var house1y = 400;
var house2x = 500;
var house2y = 500;
var house3x = 300;
var house3y = 500;
var leftX = 350;
var rightX = 450;
var sunx = 50;
var suny = 600;
var moonx = 800;
var moony = 600
var count = 0;
var increase = 1;
var decrease = 48;
var mincrease =  1;
var mdecrease = 48;
var mcount = 0;
var runx = 20;
var runy = 200;
var flip5 = 1;
var color1 = 40;
var color2 = 220;
var moonstart = 0;
function draw() {
  background(0, color1, color2);
  if (color1 <= 0 && color2 <= 0){
    moonstart = 1;
  }
  if (moonstart == 1){
    moon(moonx, moony);
    if (moony > 50 && mcount == 0){
      moonx --;
      moony -= 6 * mincrease;
      mincrease = mincrease * .99;
    }
    if (moony <= 50){
      mcount = 1;
    }
    if(mcount == 1){
      moonx --;
      moony += 6 / mdecrease;
      mdecrease = mdecrease * 0.99;
    }
  }
  color1 -= 0.25;
  color2 -= 0.25;
  fill(250, 250, 0);
  if (suny > 50 && count == 0){
    sunx ++;
    suny -= 6 * increase;
    increase = increase * .99;
  }
  if (suny <= 50){
    count = 1;
  }
  if(count == 1){
    sunx ++;
    suny += 6 / decrease;
    decrease = decrease * 0.99;
  }

  ellipse(sunx, suny, 80, 80);
  // the sun
  fill(255, 255, 255);
  leftX --;
  ellipse(leftX, 150, 126, 97);
  ellipse(leftX+62, 150, 70, 60);
  ellipse(leftX-62, 150, 70, 60);

  // right cloud
  rightX ++;
  ellipse(rightX, 100, 126, 97);
  ellipse(rightX+62, 100, 70, 60);
  ellipse(rightX-62, 100, 70, 60);
  strokeWeight(5);
  stroke(0, 0, 0);
  text("This Very Weird Village",300,50,500,70); //rather 2D and with no residents
  //it is quite dumb
  fill(0, 255, 0);
  rectMode(CENTER);
  rect(400, 550, 1000, 100);
  var value = moonstart
  house(house1x, house1y, 100, 200, value);
  house(house2x, house2y, 100, 100, value);
  house(house3x, house3y, 100, 100, value);
  if (flip5 == 1){
    run1(runx, runy);
    runx += 10;
  }
  if (flip5 == 2){
    run2(runx, runy);
    runx += 10;
  }
  if (flip5 == 3){
    run3(runx, runy);
    runx += 10;
  }
  if (flip5 == 4){
    run4(runx, runy);
    runx += 10;
  }
  if (flip5 == 5){
    run5(runx, runy);
    runx += 10;
  }
  flip5 ++;
  if (flip5 == 5){
    flip5 = 1;
  }

  // I only have three houses because I'm too lazy to output four
  // or things will happen twice or thrice
}

function house(x, y, w, h, yes) { // parameters are x and y cordinates which represent the center of the house and w being width, h being height
  fill(41, 19, 19);
  rectMode(CENTER);
  rect(x, y, w, h);
  //door
  fill(255, 0, 255);
  rectMode(CORNERS);
  rect(x-w/10, y + h/2, x + w/10, y + h/3.3); //don't question how I chose 3.3
  point(x + w/10 - w/25, y + h/2.5); // the doorknob for extra points (notice the pun)

  fill(41, 19, 19);

  quad(x + w/3, y - h/2, x + w/2.5, y - h/2, x + w/2.5, y -h/1.2, x + w/3, y - h/1.1); //chimney
  fill(41, 200, 50);
  triangle(x - w/2, y - h/2, x + w/2, y - h/2, x, y - h); //the roof
  if (h < 150 && w < 150){ //so if the house is small and fat

    fill(255, 0, 0);
    var c1 = x //center 1 and 2 are the centers of the windows. I could of done a foor loop but I never used java before which sucks, cuz Python's way better
    var c2 = y // var c1 to c8 are the x and ys, took a long and tedious time to write them out, could of done an array
    rectMode(CENTER);
    if (yes == 1){
      fill(255, 255, 0);
    }
    if (yes == 0){
      fill(255, 255, 255);
    }
    rect(c1 - 30, c2 - 30, 25, 25);
    var c_1 = c1 - 30
    var c_2 = c2 - 30
    rect(c1 + 30, c2 - 30, 25, 25);
    var c_3 = c1 + 30
    var c_4 = c2 - 30
    rect(c1 - 30, c2 + 30, 25, 25);
    var c_5 = c1 - 30
    var c_6 = c2 + 30
    rect(c1 + 30, c2 + 30, 25, 25);
    var c_7 = c1 + 30
    var c_8 = c2 + 30
    line(c_1 + 12.5, c_2, c_1 - 12.5, c_2); //window making 101, as you can see, each window had a w and h of 25, and have two lines that intersect at the window center
    line(c_1, c_2 + 12.5, c_1, c_2 - 12.5);

    line(c_3 + 12.5, c_4, c_3 - 12.5, c_4);
    line(c_3, c_4 + 12.5, c_3, c_4 - 12.5);

    line(c_5 + 12.5, c_6, c_5 - 12.5, c_6);
    line(c_5, c_6 + 12.5, c_5, c_6 - 12.5);

    line(c_7 + 12.5, c_8, c_7 - 12.5, c_8);
    line(c_7, c_8 + 12.5, c_7, c_8 - 12.5);
  }
  if (h > 150 && w >= 100){ // if house is stout
    var add1 = 40; // what to do to window width
    var add2 = 0; //what to do to the y coordinate
    for(let i = 0; i < int(h/25); i++) { //efficiency
      if (i > 1 && i % 2 == 0){ // if even i after i > 1
        add1 = 40;
        add2 = add2 - 50; //how much the windows increment up in an eye's perspective, or down in the programming plane perspective
      }
      if (i % 2 != 0){
        add1 = -40; //alternate window sides, right and left
      }
      if (yes == 1){
        fill(255, 255, 0);
      }
      if (yes == 0){
        fill(255, 255, 255);
      }
      var center1 = x - (add1 * 0.75); //center of the window x
      var center2 = y + h/2 - 10 + add2 - 15; //center of the window y
      rectMode(CENTER);
      rect(center1, center2, 30, 30); //WINDOWS 8 (notice the pun cuz my pc's actually a window 8)
      fill(0, 0, 0);
      line(x - add1, y + h/2 - 10 + add2 - 15, x - add1/2, y + h/2 - 10 + add2 - 15); //the part that took a while, don't question why I chose -10
      line(x - (add1 * 0.75), y + h/2 - 10 + add2, x - (add1 * 0.75), y + h/2 - 10 + add2 - 30);
//so basically x -add1 is the outer edge of the window line and x - add1/2 is the inner edge, the y coordinate is derived by the center of the house being x, going all the way to the bottom, then up 10


      }
//don't question why one house is floating in the air - it just looks cool that way
    }
}

function run1(x, y) {
  var person = [x, y];
  rectMode(CENTER);
  rect(person[0], person[1] + 40, 30, 70);
  ellipseMode(CENTER);
  ellipse(person[0], person[1], 40, 40);

  arc(person[0] + 13, person[1], 18, 20, 1, 90, 270);
  point(person[0] + 5, person[1] - 5);
  //leg1
  line(person[0]-15, person[1] + 70, person[0] - 20, person[1] +90);
  line(person[0] - 20, person[1] +90, person[0] - 40, person[1] + 85);
  line(person[0] - 40, person[1] +85, person[0] - 43, person[1] + 90);

  //leg2
  line(person[0]+15, person[1] + 70, person[0] + 40, person[1] + 110);
  line( person[0] + 40, person[1] + 110, person[0] + 45, person[1] +110);

  //arm1
  line(person[0] - 15, person[1] + 30, person[0] - 40, person[1] + 45);
  line(person[0] - 40, person[1] + 45, person[0] -20, person[1] + 60);
  strokeWeight(3);

  line(person[0] + 15, person[1] + 30, person[0] + 30, person[1] + 40);
  line(person[0] + 30, person[1] + 40, person[0] + 40, person[1] + 20);
}

function run2(x, y) {
  var person = [x, y];
  rectMode(CENTER);
  rect(person[0], person[1] + 40, 30, 70);
  ellipseMode(CENTER);
  ellipse(person[0], person[1], 40, 40);

  arc(person[0] + 13, person[1], 18, 20, 1, 90, 270);
  point(person[0] + 5, person[1] - 5);
  //leg1
  line(person[0]-15, person[1] + 70, person[0] - 15, person[1] +90);
  line(person[0] - 15, person[1] +90, person[0] - 45, person[1] + 85);
  line(person[0] - 45, person[1] +85, person[0] - 47, person[1] + 90);

  //leg2
  line(person[0]+15, person[1] + 70, person[0] + 30, person[1] + 90);
  line( person[0] + 30, person[1] + 90, person[0] + 10, person[1] +110);
  line(person[0] + 10, person[1] +110, person[0] + 13, person[1] + 113);

  //arm1
  line(person[0] - 15, person[1] + 30, person[0] - 35, person[1] + 30);
  line(person[0] - 35, person[1] + 30, person[0] -20, person[1] + 45);
  strokeWeight(3);
  //arm2
  line(person[0] + 15, person[1] + 30, person[0] + 30, person[1] + 30);
  line(person[0] + 30, person[1] + 30, person[0] + 25, person[1] + 12);
}

function run3(x, y) {
  var person = [x, y];
  rectMode(CENTER);
  rect(person[0], person[1] + 40, 30, 70);
  ellipseMode(CENTER);
  ellipse(person[0] + 5, person[1], 40, 40);

  arc(person[0] + 13, person[1], 18, 20, 1, 90, 270);
  point(person[0] + 5, person[1] - 5);
  //leg1
  line(person[0]-15, person[1] + 70, person[0] - 5, person[1] +95);
  line(person[0] - 5, person[1] +95, person[0] - 15, person[1] + 110);
  line(person[0] - 15, person[1] +110, person[0] - 12, person[1] + 110);

  //leg2
  line(person[0]+15, person[1] + 70, person[0] + 18, person[1] + 90);
  line( person[0] + 18, person[1] + 90, person[0] - 10, person[1] +100);
  line(person[0] - 10, person[1] +100, person[0] -8, person[1] + 103);

  //arm1
  line(person[0] - 15, person[1] + 25, person[0] - 20, person[1] + 45);
  line(person[0] - 20, person[1] + 45, person[0] -5, person[1] + 55);
  strokeWeight(3);
  //arm2
  line(person[0] + 15, person[1] + 25, person[0] + 20, person[1] + 40);
  line(person[0] + 20, person[1] + 40, person[0] + 30, person[1] + 37);
}

function run4(x, y) {
  var person = [x, y];
  rectMode(CENTER);
  rect(person[0], person[1] + 40, 30, 70);
  ellipseMode(CENTER);
  ellipse(person[0] + 5, person[1], 40, 40);

  arc(person[0] + 13, person[1], 18, 20, 1, 90, 270);
  point(person[0] + 5, person[1] - 5);
  //leg1
  line(person[0]-15, person[1] + 70, person[0] - 18, person[1] +95);
  line(person[0] - 18, person[1] +95, person[0] - 23, person[1] + 110);
  line(person[0] - 23, person[1] +110, person[0] - 20, person[1] + 110);

  //leg2
  line(person[0]+15, person[1] + 70, person[0] + 28, person[1] + 90);
  line( person[0] + 28, person[1] + 90, person[0] + 12, person[1] +110);
  line(person[0] + 12, person[1] +110, person[0] + 15, person[1] + 113);

  //arm1
  line(person[0] - 15, person[1] + 25, person[0] - 28, person[1] + 45);
  line(person[0] - 28, person[1] + 45, person[0] -10, person[1] + 55);
  strokeWeight(3);
  //arm2
  line(person[0] + 15, person[1] + 25, person[0] + 25, person[1] + 40);
  line(person[0] + 25, person[1] + 40, person[0] + 30, person[1] + 20);
}
function run5(x, y) {
  var person = [x, y];
  rectMode(CENTER);
  rect(person[0], person[1] + 40, 30, 70);
  ellipseMode(CENTER);
  ellipse(person[0] + 5, person[1], 40, 40);

  arc(person[0] + 13, person[1], 18, 20, 1, 90, 270);
  point(person[0] + 5, person[1] - 5);
  //leg1
  line(person[0]-15, person[1] + 70, person[0] - 22, person[1] +95);
  line(person[0] - 22, person[1] +95, person[0] - 35, person[1] + 110);
  line(person[0] - 35, person[1] +110, person[0] - 31, person[1] + 110);

  //leg2
  line(person[0]+15, person[1] + 70, person[0] + 32, person[1] + 90);
  line( person[0] + 32, person[1] + 90, person[0] + 32, person[1] +110);
  line(person[0] + 32, person[1] +110, person[0] + 35, person[1] + 113);

  //arm1
  line(person[0] - 15, person[1] + 25, person[0] - 28, person[1] + 33);
  line(person[0] - 28, person[1] + 33, person[0] -25, person[1] + 50);
  strokeWeight(3);
  //arm2
  line(person[0] + 15, person[1] + 25, person[0] + 30, person[1] + 35);
  line(person[0] + 30, person[1] + 35, person[0] + 38, person[1] + 15);
}
function moon(x, y){
  fill(255, 255, 255);
  ellipseMode(CENTER);
  ellipse(x, y, 50, 50);
  ellipse(x + 10, y + 10, 5, 5);
  ellipse(x - 10, y + 5, 5, 5);
  ellipse(x + 2, y -20, 5, 5);
}
