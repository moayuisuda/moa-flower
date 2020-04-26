import { App, Shape, Triangle, Circle } from "./index.js";

const app = new App({
  width: 1500,
  height: 1000,
  container: document.querySelector('#container'),
});

const shape0 = new Shape({
  data: {
    origin: {
      x: 100,
      y: 0,
    },
    x: 100,
    y: 0,
    distance: {
      x: 100,
    },
  },
  render(ctx) {
    ctx.fillStyle = "#1E6FFF";
    ctx.fillRect(this.x, this.y, 400, 400);
  },
  tick(p) {
    const value = Math.pow(p, 2);
    this.x = this.origin.x + this.distance.x * value;
  },
  start: 0,
  duration: 1000,
});


const distance = {
  x: 200
},

const shape1 = new Circle({
  x: 0,
  y: 0,
  radius: 100,
  color: '#339933',
  tick(p) {
    const value = Math.pow(p, 2);
    this.x = this.origin.x + distance.x * value;
  },
  start: 0,
  duration: 2000,
});

app.add(shape0, shape1);
app.run();
