function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { memo, useEffect, useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { SCROLLABLE_TYPE } from '../../constants';
import { useBottomSheetInternal } from '../../hooks';
import { print } from '../../utilities';
function BottomSheetViewComponent({
  focusHook: useFocusHook = useEffect,
  enableFooterMarginAdjustment = false,
  onLayout,
  style,
  children,
  ...rest
}) {
  //#region hooks
  const {
    animatedScrollableContentOffsetY,
    animatedScrollableType,
    animatedFooterHeight,
    enableDynamicSizing,
    animatedContentHeight
  } = useBottomSheetInternal();
  //#endregion

  //#region styles
  const flattenStyle = useMemo(() => StyleSheet.flatten(style), [style]);
  const containerStyle = useAnimatedStyle(() => {
    if (!enableFooterMarginAdjustment) {
      return flattenStyle ?? {};
    }
    const marginBottom = typeof flattenStyle?.marginBottom === 'number' ? flattenStyle.marginBottom : 0;
    return {
      ...(flattenStyle ?? {}),
      marginBottom: marginBottom + animatedFooterHeight.value
    };
  }, [flattenStyle, enableFooterMarginAdjustment, animatedFooterHeight]);
  //#endregion

  //#region callbacks
  const handleSettingScrollable = useCallback(() => {
    animatedScrollableContentOffsetY.value = 0;
    animatedScrollableType.value = SCROLLABLE_TYPE.VIEW;
  }, [animatedScrollableContentOffsetY, animatedScrollableType]);
  const handleLayout = useCallback(event => {
    if (enableDynamicSizing) {
      animatedContentHeight.value = event.nativeEvent.layout.height;
    }
    if (onLayout) {
      onLayout(event);
    }
    if (__DEV__) {
      print({
        component: BottomSheetView.displayName,
        method: 'handleLayout',
        category: 'layout',
        params: {
          height: event.nativeEvent.layout.height
        }
      });
    }
  }, [onLayout, animatedContentHeight, enableDynamicSizing]);
  //#endregion

  // effects
  useFocusHook(handleSettingScrollable);

  //render
  return /*#__PURE__*/React.createElement(Animated.View, _extends({}, rest, {
    onLayout: handleLayout,
    style: containerStyle
  }), children);
}
const BottomSheetView = /*#__PURE__*/memo(BottomSheetViewComponent);
BottomSheetView.displayName = 'BottomSheetView';
export default BottomSheetView;
//# sourceMappingURL=BottomSheetView.js.map