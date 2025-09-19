const STEP = 80;
const BOUNDING_CIRC_D = 75

let circle_arr = [];

function create_circ_arr(i, j){
  let circ_x = i*STEP;
  let circ_y = j*STEP;
  circle_arr.push(new Object({x:circ_x, y:circ_y, d:15, original_x: circ_x, original_y: circ_y, color:color(random(0,256), random(0,256), random(0,256))}))
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-container");
  for (let i = 1; i < windowWidth/STEP; i++){
    for(let j = 1; j < windowHeight/STEP; j++){
      create_circ_arr(i, j);
    }
  }
}

function draw() {
  background(220);
  stroke(0);
  strokeWeight(2);

  for (let i = 0; i < circle_arr.length; i++) {
    let angle = Math.atan2(mouseY - circle_arr[i].y, mouseX - circle_arr[i].x);
    let lerp_x = (BOUNDING_CIRC_D/2)  * Math.cos(angle) + circle_arr[i].original_x;
    let lerp_y = (BOUNDING_CIRC_D/2)  * Math.sin(angle) + circle_arr[i].original_y;
    circle_arr[i].x = lerp(circle_arr[i].x, lerp_x, 0.05);
    circle_arr[i].y = lerp(circle_arr[i].y, lerp_y, 0.05);

    //circle(circle_arr[i].original_x, circle_arr[i].original_y, BOUNDING_CIRC_D);

    fill(circle_arr[i].color);
    circle(circle_arr[i].x, circle_arr[i].y, circle_arr[i].d);
  }
}
