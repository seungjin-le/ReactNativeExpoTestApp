import { View, type ViewProps } from 'react-native';
import { ThemedText } from '@/components/themed-text';

type SectionWrapperProps = ViewProps & {
  label?: string;
  title?: string;
};

export function SectionWrapper({ label, title, children, className, ...props }: SectionWrapperProps) {
  return (
    <View className={`px-6 py-16 max-w-[800px] w-full self-center ${className ?? ''}`} {...props}>
      {label && <ThemedText type="label" className="mb-2">{label}</ThemedText>}
      {title && <ThemedText type="heading" className="mb-8">{title}</ThemedText>}
      {children}
    </View>
  );
}
