function setup() {
  createCanvas(400, 400);
}
  let point1 = false
  let point2 = false
  let point3 = false

function mouseClicked () {
  if (point1 == true){
    point2 = true
    point3 = true
  }
  point1 = true
}

function draw() { 
  background(220);
  rect(0,0,400,400)
  fill("green")
  textSize(40)
  text("Know Your Rights",10,50)
  text("Against ICE",10,100)
  rect(0,125,400,300)
  fill("red")
  textSize(17)
  if (point1 == true){
  text("You have your right to remain silent", 5, 150)}
  if (point2 == true){
  text("Without a warrant, they can't search your property", 5,190)}
  textSize(14)
  if (point3 == true){
  text("This warrant must be signed by a judge, not another ICE officer", 5, 210)}
  fill("white")
}