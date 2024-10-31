"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const AnimatedTextInput = _reactNativeReanimated.default.createAnimatedComponent(_reactNative.TextInput);
const ReText = props => {
  const {
    text,
    value: _providedValue,
    style
  } = {
    style: {},
    ...props
  };
  const textRef = (0, _react.useRef)(null);
  const providedValue = (0, _reactNativeReanimated.useDerivedValue)(() => {
    const value = typeof _providedValue === 'number' ? _providedValue : typeof _providedValue.value === 'number' ? _providedValue.value.toFixed(2) : _providedValue.value;
    return `${text}: ${value}`;
  }, [_providedValue, text]);

  //region effects
  (0, _reactNativeReanimated.useAnimatedReaction)(() => providedValue.value, result => {
    textRef.current?.setNativeProps({
      text: result
    });
  }, []);
  //endregion

  return /*#__PURE__*/_react.default.createElement(AnimatedTextInput, {
    ref: textRef,
    underlineColorAndroid: "transparent",
    editable: false,
    value: providedValue.value,
    style: style
  });
};
var _default = exports.default = ReText;
//# sourceMappingURL=ReText.webx.js.map