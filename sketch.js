function setup() {
    createCanvas(400, 400);
    background(138, 194, 253);
  }
  
  function draw() {
  
    stroke("black");
    fill("purple ");
  
    // console.log(mouselsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 15, 25);
    }
  }