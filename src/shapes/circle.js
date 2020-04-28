import { Shape } from "./base";

class Circle extends Shape {
  constructor({ x, y, radius, tick, start, duration, color, distance, effect, rotate }) {
    super({
      data: {
        origin: {
          x,
          y,
          color
        },
        x,
        y,
        color,
        distance
      },
      start,
      duration,
      effect,
      tick,
      rotate
    });

    this.origin.radius = radius;
    this.radius = radius;
    this.initRender();
  }

  initRender() {
    this.render = (ctx) => {
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
    };
  }
}

export { Circle };
