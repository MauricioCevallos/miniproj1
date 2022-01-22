function setup() {
    createCanvas(windowWidth, windowHeight);
  }


  function subtractFifty(x) { //used for reducing the diameter of circle by 150
    return x-150
  }

  function draw() { //loops infinitely 
    background("white"); //(R, G, B) // 255 max value

    //starting circle diameter
    x = 1700;

    //The line around the circles
    strokeWeight(20);
    stroke(255,255,255,150);

    //the color of the inside of circle
    fill(0,0,0, 35);

    //drawing
    circle(windowWidth/2, windowHeight/2,x);

    x = subtractFifty(x);

    circle(windowWidth/2, windowHeight/2,x);

    x = subtractFifty(x);

    circle(windowWidth/2, windowHeight/2,x);

    x = subtractFifty(x);

    circle(windowWidth/2, windowHeight/2,x);

    x = subtractFifty(x);

    circle(windowWidth/2, windowHeight/2,x);

    x = subtractFifty(x);

    circle(windowWidth/2, windowHeight/2,x);

    x = subtractFifty(x);

    circle(windowWidth/2, windowHeight/2,x);

    x = subtractFifty(x);

    circle(windowWidth/2, windowHeight/2,x);

    x = subtractFifty(x);

    circle(windowWidth/2, windowHeight/2,x);

    x = subtractFifty(x);

    circle(windowWidth/2, windowHeight/2,x);

    x = subtractFifty(x);

    circle(windowWidth/2, windowHeight/2,x);

    x = subtractFifty(x);

    circle(windowWidth/2, windowHeight/2,x);

    x = subtractFifty(x);

  }