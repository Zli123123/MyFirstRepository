function setup() {
  createCanvas(5500, 600);
  // since the rubric asks for comments, fine, this wasted ten minutes of time to do
}

function draw() {
  background(0, 40, 220);
  fill(250, 250, 0);
  ellipse(50, 50, 80, 80);
  // the sun
  strokeWeight(5);
  stroke(0, 0, 0);
  text("This Very Dumb Village",300,50,500,70); //rather 2D and with no residents
  //it is quite dumb
  fill(0, 255, 0);
  rect(0, 550, 5600, 100);
  neighbourhood(400, 400);
  // I only have three houses because I'm too lazy to output four
  noLoop();
  // or things will happen twice or thrice
}

function house(x, y, w, h, col1, col2) { // parameters are x and y cordinates which represent the center of the house and w being width, h being height
  fill(col1);
  rectMode(CENTER);
  rect(x, y, w, h);
  //door
  fill(255, 0, 255);
  rectMode(CORNERS);
  rect(x-w/10, y + h/2, x + w/10, y + h/3.3); //don't question how I chose 3.3
  point(x + w/10 - w/25, y + h/2.5); // the doorknob for extra points (notice the pun)

  fill(41, 19, 19);

  quad(x + w/3, y - h/2, x + w/2.5, y - h/2, x + w/2.5, y -h/1.2, x + w/3, y - h/1.1); //chimney
  fill(col2);
  triangle(x - w/2, y - h/2, x + w/2, y - h/2, x, y - h); //the roof
  if (h < 150 && w < 150){ //so if the house is small and fat

    fill(255, 0, 0);
    var c1 = x //center 1 and 2 are the centers of the windows. I could of done a foor loop but I never used java before which sucks, cuz Python's way better
    var c2 = y // var c1 to c8 are the x and ys, took a long and tedious time to write them out, could of done an array
    rectMode(CENTER);
    fill(255, 255, 255);
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
      fill(255, 255, 255);
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
function block(x, y){
  var xcord = x;
  var ycord = y;
  var type = 100;
  var randomtree = 0
  var heights = [100, 200, 300]
  for (let i = 0; i < 4; i ++){

    type = random(heights);
    if (type === 100){
      ycord = ycord + 100;
    }
    if (type === 200){
      ycord = ycord + 50;
    }
    if (type === 300){
      ycord = ycord;
    }
    let colora = (random(1, 255), random(1, 255), random(1, 255));
    let colorb = (floor(random(255)), floor(random(255)), floor(random(255)));
    house(xcord, ycord, 100, type, colora, colorb);

    xcord += 125;
    ycord = y;
    if (i === 3){
      randomtree = random(0, 2);
      if (floor(randomtree) === 0){
        xcord = xcord + 100
        tree(xcord, ycord + 100);
        xcord = xcord + 100
      }
      if (floor(randomtree) === 1){
        xcord = xcord + 100
        tree2(xcord, ycord + 75);
        xcord = xcord + 100
      }
    }

  }

}

function neighbourhood(x, y){
  var xcord = x;
  var ycord = y;
  for (let i = 0; i < 6; i ++){
    block(xcord, ycord);
    xcord = xcord + 800;
  }
}
function tree(x, y){
  strokeWeight(0);
  rectMode(CENTER);
  fill(160,82,45);
  rect(x, y, 15, 160);
  fill(0, 255, 0);
  ellipseMode(CENTER);
  ellipse(x, y - 110, 100, 100);
  ellipse (x - 45, y -120, 40, 40);
  ellipse (x + 35, y -140, 40, 40);
  fill(160,82,45);
  strokeWeight(3);
  stroke(160,82,45);
  strokeWeight(5);
  stroke(0 ,0,0);
}
function tree2(x, y){
  strokeWeight(0);
  rectMode(CENTER);
  fill(160,82,45);
  rect(x, y + 80, 40, 30);
  fill(0, 100, 0);
  triangle(x + 60, y + 80, x - 60, y + 80, x, y + 10);
  triangle(x + 50, y + 40, x - 50, y + 40, x, y - 10);
  triangle(x + 40, y + 10, x - 40, y + 10, x, y - 20);
  strokeWeight(5);
}
