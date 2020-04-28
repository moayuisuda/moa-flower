import { Triangle } from '../../src/shapes/triangle';
import { global, colors, effects } from '../variable';
import { randomIn, randomInDouble } from '../../src/util';

const getLength = randomIn(150, 400);
const getAngle = randomInDouble(Math.PI / 180 * 10, Math.PI / 180 * 20);
const getDuration = randomIn(5000, 15000);
function getColor() {
  return colors[randomIn(0, colors.length - 1)()];
}
function getEffect() {
  return effects.triangle[randomIn(0, effects.triangle.length - 1)()];
}


function generate() {
  const length = getLength();
  const topAngle = getAngle();
  const color = getColor();
  const start = performance.now();
  const duration = getDuration();
  const effect = getEffect();
  const height = 1/2 * length / Math.tan(1/2 * topAngle);

  const t1 = new Triangle({
    length,
    color,
    rotate: Math.PI / 180 * 90,
    distance: {
      y: - global.length - height,
      topAngle: - topAngle
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
      y: -global.length * Math.sqrt(2, 2) - height,
      topAngle: - topAngle
    },
    x: 0,
    y: height,
    rotate: Math.PI / 180 * 135,
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

  const t3 = new Triangle({
    length,
    color,
    rotate: Math.PI / 180 * 180,
    distance: {
      y: -global.length - height,
      topAngle: - topAngle
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

  return [t1, t2, t3];
}

  export default generate;