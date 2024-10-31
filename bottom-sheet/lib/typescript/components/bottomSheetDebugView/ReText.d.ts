import React from 'react';
import { type TextProps as RNTextProps } from 'react-native';
import Animated from 'react-native-reanimated';
interface TextProps {
    text: string;
    value: Animated.SharedValue<number | boolean> | number;
    style?: Animated.AnimateProps<RNTextProps>['style'];
}
declare const ReText: (props: TextProps) => React.JSX.Element;
export default ReText;
//# sourceMappingURL=ReText.d.ts.map