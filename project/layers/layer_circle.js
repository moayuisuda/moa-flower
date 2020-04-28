import { Circle } from "../../src/shapes/circle";
import { global, colors, effects } from "../variable";
import { randomIn } from "../../src/util";

const getRadius = randomIn(800, 1500);
const getDuration = randomIn(5000, 15000);
function getColor() {
  return colors[randomIn(0, colors.length - 1)()];
}
function getEffect() {
  const index = randomIn(0, effects.circle.length - 1)();
  return effects.circle[index];
}

function generate() {
  const radius = getRadius();
  const color = getColor();
  const start = performance.now();
  const duration = getDuration();
  const effect = getEffect();

  const t1 = new Circle({
    radius,
    color,
    effect,
    distance: {
      y: global.length + radius * 2,
    },
    x: 0,
    y: -radius,
    tick(p) {
      const value = Math.pow(p, 2);
      this.y = this.origin.y + this.distance.y * value;
    },
    start,
    duration,
  });

  const t2 = new Circle({
    radius,
    color,
    effect,
    distance: {
      x: global.length + radius * 2,
      y: global.length + radius * 2,
    },
    x: -radius,
    y: -radius,
    tick(p) {
      const value = Math.pow(p, 2);
      this.x = this.origin.x + this.distance.x * value;
      this.y = this.origin.y + this.distance.y * value;
    },
    start,
    duration,
  });

  const t3 = new Circle({
    radius,
    color,
    effect,
    distance: {
      x: global.length + radius * 2,
    },
    x: -radius,
    y: 0,
    tick(p) {
      const value = Math.pow(p, 2);
      this.x = this.origin.x + this.distance.x * value;
    },
    start,
    duration,
  });

  return [t1, t2, t3];
}

export default generate;
