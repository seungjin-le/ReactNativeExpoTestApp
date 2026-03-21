import { View } from 'react-native';
import { ThemedText } from '@/components/themed-text';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <View className="px-6 py-10 items-center border-t border-slate-800">
      <ThemedText type="caption">
        © {year} 홍길동. All rights reserved.
      </ThemedText>
    </View>
  );
}
