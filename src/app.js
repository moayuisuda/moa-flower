class App {
  constructor({ width, height, container, amount }) {
    this.width = width;
    this.height = height;
    this.container = container;
    this.amount = amount;
    this.shapes = [];
    this.canvas;
    this.startAt;
    this.angle;

    this.init();
  }

  init() {
    this.startAt = performance.now();
    this.angle = Math.PI * 2 / this.amount;
    this.initCanvas();
  }

  initCanvas() {
    const canvas = (this.canvas = document.createElement("canvas"));
    canvas.height = this.height;
    canvas.width = this.width;
    this.container.appendChild(canvas);
    this.ctx = this.canvas.getContext("2d");
    
    // clip
    const angle_side = (Math.PI - this.angle) / 2;
    const height = this.width / 2 * Math.tan(angle_side);
    const ctx = this.ctx;
    this.ctx.beginPath();
    if(height > this.height) {
      const halfLength = Math.tan(this.angle / 2) * this.height;
      ctx.moveTo(this.width / 2 - halfLength, 0);
      ctx.lineTo(this.width / 2 + halfLength, 0);
      ctx.lineTo(this.width / 2, this.height);
      ctx.closePath();
    } else {
      ctx.fillStyle = '#000000';
      ctx.moveTo(this.width / 2, this.height);
      ctx.lineTo(0, this.height - height);
      ctx.lineTo(0, 0);
      ctx.lineTo(this.width, 0);
      ctx.lineTo(this.width, this.height - height);
      ctx.fill();
      ctx.closePath();
    }
    debugger
    ctx.clip();
  }

  run() {
    const frame = t => {
      this.ctx.clearRect(0, 0, this.width, this.height);

      for (let i of this.shapes) {
        const time = t - this.startAt;
        const progresstion = (time - i.start) / i.duration;
        if(progresstion <= 1) {
          i.tick(progresstion);
        };

        this.draw(i);
      }

      requestAnimationFrame(frame);
    }

    frame(performance.now());
  }

  draw(shape) {
    this.ctx.beginPath();
    shape.render(this.ctx);
  }

  add(...shapes) {
    this.shapes.push(...shapes);
  }
}

export { App };
