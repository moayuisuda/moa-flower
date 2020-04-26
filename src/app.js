class App {
  constructor({ width, height, container }) {
    this.width = width;
    this.height = height;
    this.container = container;
    this.shapes = [];
    this.canvas;
    this.startAt;

    this.init();
  }

  init() {
    this.initCanvas();
    this.startAt = performance.now();
  }

  initCanvas() {
    const canvas = (this.canvas = document.createElement("canvas"));
    canvas.height = this.height;
    canvas.width = this.width;
    this.container.appendChild(canvas);
    this.ctx = this.canvas.getContext("2d");
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
