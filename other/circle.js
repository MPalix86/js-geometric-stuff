// Calculate the coordinates of the opposite point in a circle having center
const getCircleOppositePoint = function (point, center) {
  console.log(point);
  const [x0, y0] = center;
  const [x1, y1] = point;
  dx = x1 - x0;
  dy = y1 - y0;

  x2 = x0 - dx;
  y2 = y0 - dy;

  const newPoint = [x2, y2];
  console.log(newPoint);
  return newPoint;
};

//  getting reflex point of the circle,

const getCircleReflexesPoints = function (point, center) {
  const [x0, y0] = center;
  const [x1, y1] = point;
  x2 = 2 * x0 - x1;
  y2 = y1;

  x3 = x1;
  y3 = 2 * y0 - y1;

  return [
    [x2, y2],
    [x3, y3],
  ];
};

//  calculating PI radiant circumference
const getCircle = function (center, theta, r, drawCenter = true) {
  const [x0, y0] = center;
  const circle = new Set();
  if (drawCenter) {
    ctx.fillRect(x0, y0, 1, 1);
    ctx.fillRect(x0, y0 + 1, 1, 1);
    ctx.fillRect(x0, y0 - 1, 1, 1);
    ctx.fillRect(x0 - 1, y0, 1, 1);
    ctx.fillRect(x0 + 1, y0, 1, 1);
  }

  for (let t = 0; t < theta; t += 1 / r) {
    let x = r * Math.cos(t) + x0;
    let y = r * Math.sin(t) + y0;
    circle.add([Math.round(x), Math.round(y)]);
  }

  return circle;
};
