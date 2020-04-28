import { Triangle } from "../../src/shapes/triangle";
import { global, colors, effects } from "../variable";
import { randomIn, randomInDouble } from "../../src/util";

const getLength = randomIn(150, 400);
const getAngle = randomInDouble((Math.PI / 180) * 10, (Math.PI / 180) * 20);
const getDuration = randomIn(5000, 15000);
function getColor() {
  return colors[randomIn(0, colors.length - 1)()];
}
function getEffect() {
  return effects.triangle[randomIn(0, effects.triangle.length - 1)()];
}

function generate() {
  // const length = getLength();
  const length = 500;
  const topAngle = (Math.PI / 180) * 120;
  const color = getColor();
  const start = performance.now();
  // const duration = getDuration();
  const duration = 19000;
  const effect = 'source-over';
  const height = ((1 / 2) * length) / Math.tan((1 / 2) * topAngle);

  const t1 = new Triangle({
    length,
    color,
    rotate: (Math.PI / 180) * 112.5,
    distance: {
      y: -global.length / Math.cos(Math.PI / 180 * 22.5) - height,
      topAngle: -topAngle,
    },
    x: 0,
    y: height,
    topAngle,
    effect,
    tick(p) {
      const value = Math.sqrt(p, 2);
      this.y = this.origin.y + this.distance.y * value;
      this.topAngle = this.origin.topAngle + this.distance.topAngle * value;
    },
    start,
    duration,
  });

  const t2 = new Triangle({
    length,
    color,
    distance: {
      y: -global.length / Math.cos(Math.PI / 180 * 22.5) - height,
      topAngle: -topAngle,
    },
    x: 0,
    y: height,
    rotate: (Math.PI / 180) * 157.5,
    topAngle,
    effect,
    tick(p) {
      const value = Math.sqrt(p, 2);
      this.y = this.origin.y + this.distance.y * value;
      this.topAngle = this.origin.topAngle + this.distance.topAngle * value;
    },
    start,
    duration,
  });

  return [t1, t2];
}

export default generate;
