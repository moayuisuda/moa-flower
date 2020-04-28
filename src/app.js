class App {
  constructor({ length, container, remain = false, loop = false }) {
    this.length = length;
    this.container = container;
    this.remain = remain;
    this.loop = loop;
    this.shapes = [];
    // full pic
    this.intactCanvas;
    this.intactCtx;
    // single element
    this.canvas;
    this.ctx;
    this.copies;
    this.startPoint;

    this.init();
  }

  init() {
    this.initCanvas();
    this.initIntactCanvas();
  }

  initIntactCanvas() {
    const intactCanvas = (this.intactCanvas = document.createElement("canvas"));
    intactCanvas.style.backgroundColor = "#0e0d51";
    this.container.appendChild(intactCanvas);
    this.intactCanvas.width = this.length * 2;
    this.intactCanvas.height = this.length * 2;
    this.ctxIntact = intactCanvas.getContext("2d");
  }

  initCanvas() {
    const canvas = (this.canvas = document.createElement("canvas"));
    canvas.height = this.length;
    canvas.width = this.length;
    this.container.appendChild(canvas);
    this.ctx = this.canvas.getContext("2d");
  }

  run() {
    const frame = (t) => {
      if (!this.remain) {
        this.ctx.clearRect(0, 0, this.length, this.length);
      }

      this.ctxIntact.clearRect(0, 0, this.intactCanvas.width, this.intactCanvas.height);

      for (let i of this.shapes) {
        // caculate time
        const progresstion = (t - i.start) / i.duration;
        if (progresstion <= 1) {
          i.tick(progresstion);
        } else {
          // this.shapes.splice(this.shapes.indexOf(i), 1);
        }

        this.draw(i);
      }
      
      this.drawIntact();
      requestAnimationFrame(frame);
    };

    frame(performance.now());
  }

  drawIntact() {
    this.ctxIntact.drawImage(this.canvas, this.length, this.length);

    for (let i = 0; i < 3; i++) {
      this.ctxIntact.translate(this.length, this.length);
      this.ctxIntact.rotate((Math.PI * 1) / 2);
      this.ctxIntact.translate(-this.length, -this.length);

      this.ctxIntact.drawImage(this.canvas, this.length, this.length);
    }

    this.ctxIntact.translate(this.length, this.length);
    this.ctxIntact.rotate((Math.PI * 1) / 2);
    this.ctxIntact.translate(-this.length, -this.length);
  }

  draw(shape) {
    this.ctx.beginPath();
    this.ctx.globalCompositeOperation = shape.effect
      ? shape.effect
      : "source-over";

    if (shape.rotate) {
      this.ctx.rotate(shape.rotate);
    }
    shape.render(this.ctx);

    if (shape.rotate) this.ctx.rotate(-shape.rotate);
  }

  add(...shapes) {
    this.shapes.push(...shapes);
  }
}

export { App };
