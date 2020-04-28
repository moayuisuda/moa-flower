import { App } from "../src/index.js";
import { global } from './variable';
import triangleGenerator from './layers/layer_triangle';
import circleGenerator from './layers/layer_circle';

const app = new App({
  length: global.length,
  // remain: true,
  container: document.querySelector('#container'),
});

// if you want to every loop haw the same behavior, make sure the attrubute "duration" and "start" of different shapes have the same value
setInterval(() => {
  app.add(...circleGenerator(), ...triangleGenerator());
}, 2000);

app.run();