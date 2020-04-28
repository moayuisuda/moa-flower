import { App } from "../src/index.js";
import { global } from "./variable";
import triangleGenerator from "./layers/layer_triangle";
import triangleGenerator2 from "./layers/layer_triangle2";
import circleGenerator from "./layers/layer_circle";

const app = new App({
  length: global.length,
  // remain: true,
  container: document.querySelector("#container"),
});

// if you want to every loop haw the same behavior, make sure the attrubute "duration" and "start" of different shapes have the same value
setInterval(() => {}, 2000);

setInterval(() => {
  app.add(...triangleGenerator());
  app.add(...triangleGenerator2());
  app.add(...circleGenerator());
}, 500);

app.run();
