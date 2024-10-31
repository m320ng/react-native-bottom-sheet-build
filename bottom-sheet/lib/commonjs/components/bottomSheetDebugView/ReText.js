"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const AnimatedTextInput = _reactNativeReanimated.default.createAnimatedComponent(_reactNative.TextInput);
_reactNativeReanimated.default.addWhitelistedNativeProps({
  text: true
});
const ReText = props => {
  const {
    text,
    value: _providedValue,
    style
  } = {
    style: {},
    ...props
  };
  const providedValue = (0, _reactNativeReanimated.useDerivedValue)(() => typeof _providedValue === 'number' ? _providedValue : typeof _providedValue.value === 'number' ? _providedValue.value.toFixed(2) : _providedValue.value, [_providedValue]);
  const animatedProps = (0, _reactNativeReanimated.useAnimatedProps)(() => {
    return {
      text: `${text}: ${providedValue.value}`
    };
  }, [text, providedValue]);
  return /*#__PURE__*/_react.default.createElement(AnimatedTextInput, {
    underlineColorAndroid: "transparent",
    editable: false,
    value: `${text}: ${providedValue.value}`,
    style: style
    // @ts-ignore
    ,
    animatedProps: animatedProps
  });
};
var _default = exports.default = ReText;
//# sourceMappingURL=ReText.js.map