import { View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { SectionWrapper } from './SectionWrapper';
import { PROFILE, EXPERIENCES, PROJECTS, SKILLS } from '@/constants/portfolio';

const totalSkills = SKILLS.reduce((acc, cat) => acc + cat.skills.length, 0);

const stats = [
  { value: `${EXPERIENCES.length}`, label: '회사 경력' },
  { value: `${PROJECTS.length}`, label: '완료 프로젝트' },
  { value: `${totalSkills}+`, label: '기술 스택' },
];

export function AboutSection() {
  return (
    <SectionWrapper label="About" title="저를 소개합니다">
      {PROFILE.introduction.map((paragraph, index) => (
        <ThemedText key={index} className="leading-7 mb-6">
          {paragraph}
        </ThemedText>
      ))}

      <View className="flex-row gap-4 flex-wrap mt-4">
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
