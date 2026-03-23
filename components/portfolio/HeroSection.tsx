import { View, Linking, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { PROFILE } from '@/constants/portfolio';

export function HeroSection() {
  return (
    <View className="px-6 pt-24 pb-20 max-w-[800px] w-full self-center min-h-[480px] justify-center">
      <ThemedText type="label" className="mb-4">
        안녕하세요, 저는
      </ThemedText>
      <ThemedText type="title" className="mb-4">
        {PROFILE.name}
      </ThemedText>
      <ThemedText type="subtitle" className="mb-8 max-w-[560px]">
        {PROFILE.summary}
      </ThemedText>
      <View className="flex-row gap-3 flex-wrap">
        <Pressable
          className="bg-indigo-500 rounded-full px-6 py-3 active:opacity-70"
          onPress={() => Linking.openURL(PROFILE.github)}
        >
          <ThemedText className="text-white font-semibold text-sm">프로젝트 보기</ThemedText>
        </Pressable>
        <Pressable
          className="border border-slate-500 rounded-full px-6 py-3 active:opacity-70"
          onPress={() => Linking.openURL(`mailto:${PROFILE.email}`)}
        >
          <ThemedText className="text-slate-300 font-semibold text-sm">연락하기</ThemedText>
        </Pressable>
      </View>
    </View>
  );
}
