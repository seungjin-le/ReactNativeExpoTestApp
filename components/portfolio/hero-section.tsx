import { View } from 'react-native';
import { ThemedText } from '@/components/themed-text';

export function HeroSection() {
  return (
    <View className="px-6 pt-24 pb-20 max-w-[800px] w-full self-center min-h-[480px] justify-center">
      <ThemedText type="label" className="mb-4">
        안녕하세요, 저는
      </ThemedText>
      <ThemedText type="title" className="mb-4">
        홍길동
      </ThemedText>
      <ThemedText type="subtitle" className="mb-8 max-w-[560px]">
        사용자 경험을 최우선으로 생각하는{'\n'}
        풀스택 개발자입니다.
      </ThemedText>
      <View className="flex-row gap-3 flex-wrap">
        <View className="bg-indigo-500 rounded-full px-6 py-3">
          <ThemedText className="text-white font-semibold text-sm">프로젝트 보기</ThemedText>
        </View>
        <View className="border border-slate-500 rounded-full px-6 py-3">
          <ThemedText className="text-slate-300 font-semibold text-sm">연락하기</ThemedText>
        </View>
      </View>
    </View>
  );
}
