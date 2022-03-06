// Assignment 3 Patterns and Transformation
// CMPM 169
// Shaina Mishra

function setup() { 
  createCanvas(700, 700);
} 

function draw() { 
  background('rgba(223,95,24,255)');
  stroke(0);
  strokeWeight(2);
  stroke(0);
  strokeWeight(2);
  
  // full row
  for (let y = 40; y < 800; y = y + 200) {
    for (let x = 33; x < 800; x = x + 120) {
      hexagon(x, y, 0.5);
    }
  }
  
  // cut row
  for (let y = -60; y < 800; y = y + 200) {
    for (let x = -27; x < 800; x = x + 120) {
      hexagon(x, y, 0.5);
    }
  }
}

function hexagon(transX, transY, s) {
  stroke(0);
  strokeWeight(40);
  fill('rgba(152,31,36,255)');
  push();
  translate(transX, transY);
  scale(s);
  beginShape();
    
	// top
	vertex(55, -30);
    // top right
	vertex(135, 20);
    // bottom right
	vertex(135, 105);
    // bottom
	vertex(55, 155);
    // bottom left
    vertex(-25, 105);
    // top left
	vertex(-25, 20);
  
	endShape(CLOSE); 
	pop();
}