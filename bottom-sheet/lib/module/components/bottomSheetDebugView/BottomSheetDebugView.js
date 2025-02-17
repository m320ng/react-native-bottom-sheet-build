import React from 'react';
import { View } from 'react-native';
import ReText from './ReText';
import { styles } from './styles';
const BottomSheetDebugView = ({
  values
}) => {
  return /*#__PURE__*/React.createElement(View, {
    pointerEvents: "none",
    style: styles.container
  }, Object.keys(values).map(key => /*#__PURE__*/React.createElement(ReText, {
    key: `item-${key}`,
    value: values[key],
    style: styles.text,
    text: key
  })));
};
export default BottomSheetDebugView;
//# sourceMappingURL=BottomSheetDebugView.js.map