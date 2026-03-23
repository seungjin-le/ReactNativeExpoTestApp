import { View, type ViewProps } from 'react-native';

export function ThemedView({ className, ...otherProps }: ViewProps) {
  return <View className={`bg-slate-900 ${className ?? ''}`} {...otherProps} />;
}

