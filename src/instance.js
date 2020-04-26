import { App, Shape, Triangle, Circle } from "./index.js";

const app = new App({
  width: 200,
  height: 400,
  container: document.querySelector('#container'),
  amount: 6
});

const shape0 = new Shape({
  data: {
    origin: {
      x: 0,
      y: 0,
    },
    x: 0,
    y: 0,
    distance: {
      y: 500,
    },
  },
  render(ctx) {
    ctx.fillStyle = "#1E6FFF";
    ctx.fillRect(this.x, this.y, 200, 100);
  },
  tick(p) {
    const value = Math.pow(p, 2);
    this.y = this.origin.y + this.distance.y * value;
  },
  start: 0,
  duration: 1000,
});


const shape1 = new Circle({
  radius: 100,
  color: '#339933',
  distance: {
    y: 500,
  },
  x: 100,
  y: 0,
  tick(p) {
    const value = Math.pow(p, 2);
    this.y = this.origin.y + this.distance.y * value;
  },
  start: 0,
  duration: 2000,
});

app.add(shape0, shape1);
app.run();
