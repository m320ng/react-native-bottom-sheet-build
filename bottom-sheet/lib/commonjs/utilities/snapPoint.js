"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.snapPoint = void 0;
var _constants = require("../constants");
const snapPoint = (value, velocity, points) => {
  'worklet';

  const point = value + _constants.SNAP_POINT_THREASHOLD * velocity;
  const deltas = points.map(p => Math.abs(point - p));
  const minDelta = Math.min.apply(null, deltas);
  return points.filter(p => Math.abs(point - p) === minDelta)[0];
};
exports.snapPoint = snapPoint;
//# sourceMappingURL=snapPoint.js.map