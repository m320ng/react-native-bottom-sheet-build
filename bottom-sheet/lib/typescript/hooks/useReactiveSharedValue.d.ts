import type Animated from 'react-native-reanimated';
import type { Primitive } from '../types';
export declare const useReactiveSharedValue: <T>(value: T) => T extends Primitive ? Animated.SharedValue<T> : T;
//# sourceMappingURL=useReactiveSharedValue.d.ts.map