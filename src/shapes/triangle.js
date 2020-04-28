import { Shape } from "./base";

class Triangle extends Shape {
  constructor({ x, y, tick, start, duration, color, distance, effect, topAngle, length, rotate }) {
    super({
      data: {
        origin: {
          x,
          y,
          color,
          topAngle
        },
        x,
        y,
        color,
        distance,
        topAngle
      },
      start,
      duration,
      effect,
      tick,
      rotate
    });

    this.origin.length = length;
    this.length = length;

    this.initRender();
  }

  initRender() {
    this.render = (ctx) => {
      ctx.fillStyle = this.color;
      ctx.moveTo(this.x - this.length / 2, this.y);
      ctx.lineTo(this.x + this.length / 2, this.y);
      ctx.lineTo(
        this.x,
        this.y - this.length / 2 / Math.tan(this.topAngle / 2)
      );
      ctx.fill();
    };
  }
}

export { Triangle };
