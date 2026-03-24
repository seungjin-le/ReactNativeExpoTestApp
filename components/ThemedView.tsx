import { View, type ViewProps } from "react-native";

export const ThemedView = ({ className, ...otherProps }: ViewProps) => <View className={`bg-slate-900 ${className ?? ""}`} {...otherProps} />;
