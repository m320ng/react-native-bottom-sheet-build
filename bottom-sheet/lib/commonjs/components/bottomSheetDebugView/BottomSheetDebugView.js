"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ReText = _interopRequireDefault(require("./ReText"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const BottomSheetDebugView = ({
  values
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    pointerEvents: "none",
    style: _styles.styles.container
  }, Object.keys(values).map(key => /*#__PURE__*/_react.default.createElement(_ReText.default, {
    key: `item-${key}`,
    value: values[key],
    style: _styles.styles.text,
    text: key
  })));
};
var _default = exports.default = BottomSheetDebugView;
//# sourceMappingURL=BottomSheetDebugView.js.map