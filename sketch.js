function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  rectMode(CENTER)
  noFill()
  stroke(255)
  strokeWeight(2)
  for(var j =0; j<int(height/50);j++)
  for(var i =0; i<int(width/50);i=i+1)
  {
    ellipse(25+(i*50),25+(j*50),50+mouseX/10)
    stroke("#52796f")
    rect(0+(i*50),0,50)
    stroke("#0077b6")
    ellipse(50+(i*50),50+(j*50),25+mouseY/5)
    stroke("#ffe5d9")
  
  }
}