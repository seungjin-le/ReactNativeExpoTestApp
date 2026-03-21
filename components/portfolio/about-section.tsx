import { View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { SectionWrapper } from './section-wrapper';

const stats = [
  { value: '3+', label: '년 경력' },
  { value: '20+', label: '완료 프로젝트' },
  { value: '10+', label: '기술 스택' },
];

export function AboutSection() {
  return (
    <SectionWrapper label="About" title="저를 소개합니다">
      <ThemedText className="leading-7 mb-6">
        웹과 모바일 플랫폼에서 사용자 중심의 서비스를 만드는 것을 좋아합니다.
        TypeScript와 React 생태계에 깊은 이해를 가지고 있으며,
        클린 코드와 성능 최적화에 관심이 많습니다.
      </ThemedText>
      <ThemedText className="leading-7 mb-10">
        문제를 정의하고 해결하는 과정에서 가장 큰 보람을 느끼며,
        팀과의 협업을 통해 더 나은 결과물을 만들어내는 것을 지향합니다.
      </ThemedText>

      <View className="flex-row gap-4 flex-wrap">
        {stats.map((stat) => (
          <View
            key={stat.label}
            className="flex-1 min-w-[140px] bg-slate-800 rounded-2xl p-5 items-center"
          >
            <ThemedText className="text-3xl font-bold text-indigo-400 mb-1">
              {stat.value}
            </ThemedText>
            <ThemedText type="caption">{stat.label}</ThemedText>
          </View>
        ))}
      </View>
    </SectionWrapper>
  );
}
