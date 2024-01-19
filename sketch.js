const points = [];
let back;
let pd = 1;
let looping = true;

function preload() {
  back = loadImage('mog.png');
}

function setup() {
  const colors = [
    color(255), // white
    color('#FFBA49'), // orange
    color('#20A39E'), // sea green
    color('#EF5B5B'), // red
    color('#23001E'), // purple
  ];
  cnv = createCanvas(windowWidth, windowHeight);
  background(100);
  noStroke();
  for (let i = 0; i < height; i += 20) {
    const bot = constrain(map(i, 0, height-200, 255, 50), 80, 255);
    const top = constrain(map(i, 200, height, 50, 255), 80, 255);
    if (i > height/2)
      fill(bot);
    else
      fill(top);
    rect(0, i, width, 20);
  }
  const ratio = height / back.height * 1.2
  image(back, 0, -200, back.width * ratio, back.height * ratio);
  pd = pixelDensity();
  loadPixels();
  for (let i = 0; i < 500; i ++) {
    points.push(new Point(random(colors)));
  }
  background(255);
}

function getBrightness(x, y) {
  x = floor(x);
  y = floor(y);
  index = 4 * (y * pd * width * pd + x * pd);
  return (pixels[index] + pixels[index + 1] + pixels[index + 2]) / 3;
}

function draw() {
  // background(255, 10)
  for (const point of points) {
    point.update();
  }
}

function mouseClicked() {
  if (looping) {
    noLoop();
  } else {
    loop();
  }
  looping = !looping;
}