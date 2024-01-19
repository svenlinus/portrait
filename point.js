class Point {
  constructor(color) {
    this.x = 445;//445 + random(-500, 500);
    this.y = height-100 + random(-100, 100);
    this.speed = 5;
    this.color = color;
    this.direction = random(-PI, 0);
    this.off = random();
  }

  update() {
    stroke(this.color);
    const b = getBrightness(this.x, this.y)
    const d = min(255 - getBrightness(this.x, this.y), 255);
    this.speed = pow(b, 1.5) * 0.005;
    const f = 4;
    const sw = map(pow(d, f), 0, pow(255, f), 0, 20);
    strokeWeight(sw);
    point(this.x, this.y);
    const frequency = 0.01;
    const amplitude = max(map(sw, 0, 10, 0.1, 0), 0);
    this.direction += map(noise(frameCount * frequency + this.off), 0, 1, -1, 1) * amplitude;
    this.x += cos(this.direction) * this.speed;
    this.y += sin(this.direction) * this.speed;
    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = width;
    if (this.y > height) this.y = 0;
    if (this.y < 0) this.y = height;
  }
}