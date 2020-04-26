class Shape {
  constructor({ data, render, tick, start, duration }) {
    this.data = data;
    this.render = render;
    this.tick = tick;
    this.start = start;
    this.duration = duration;

    this.init();
  }

  init() {
    this.proxy(this, this.data);
  }

  proxy(target, data) {
    Object.keys(data).forEach((key) => {
      Object.defineProperty(target, key, {
        get() {
          return data[key];
        },
        set(val) {
          data[key] = val;
        },
      });
    });
  }
}

export { Shape };
