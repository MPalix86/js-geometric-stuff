const getpointsDistance = function (a, b) {
  const [x1, y1] = a;
  const [x2, y2] = b;
  const d = Math.sqrt((x2 - x1) ^ (2 + (y2 - y1)) ^ 2);
  return d;
};
