import { Shape } from "./base";

class Triangle extends Shape {
  constructor({ length, color, x, y, duration }) {
    this.length = length;
    this.data = {
      origin: {
        x,
        y,
        color,
        length,
      },
      x,
      y,
      color,
      length,
    };

    this.initRender();
  }

  initRender() {
    this.render = (ctx) => {
      ctx.fillStyle = color;
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x + this.length, this.y);
      ctx.lineTo(
        this.x + (this.x * 1) / 2,
        this.y + (this.y * Math.pow(3, 2)) / 2
      );
      ctx.fill();
    };
  }
}

export { Triangle };
