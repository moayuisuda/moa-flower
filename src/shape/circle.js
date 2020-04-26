import { Shape } from "./base";

class Circle extends Shape {
  constructor({ x, y, radius, tick, start, duration, color, distance }) {
    super({
      data: {
        origin: {
          x,
          y,
          radius,
          color
        },
        x,
        y,
        color,
        radius,
        distance
      },
      start,
      duration,
      tick,
    });

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
