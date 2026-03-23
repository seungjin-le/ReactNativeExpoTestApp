import { View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { PROFILE } from '@/constants/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <View className="px-6 py-10 items-center border-t border-slate-800">
      <ThemedText type="caption">
        © {year} {PROFILE.name}. All rights reserved.
      </ThemedText>
    </View>
  );
}
