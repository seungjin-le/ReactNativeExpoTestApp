import { View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { SectionWrapper } from './SectionWrapper';
import { SKILLS } from '@/constants/portfolio';

const categoryColors = [
  'bg-indigo-500',
  'bg-cyan-400',
  'bg-emerald-400',
  'bg-amber-400',
  'bg-rose-400',
];

function SkillTag({ name, level }: { name: string; level: number }) {
  return (
    <View className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 flex-row items-center gap-2">
      <ThemedText className="text-slate-300 text-sm">{name}</ThemedText>
      <View className="flex-row gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <View
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${i < level ? 'bg-indigo-400' : 'bg-slate-600'}`}
          />
        ))}
      </View>
    </View>
  );
}

export function SkillsSection() {
  return (
    <SectionWrapper label="Skills" title="기술 스택">
      <View className="gap-8">
        {SKILLS.map((category, index) => (
          <View key={category.category}>
            <View className="flex-row items-center gap-2 mb-4">
              <View className={`w-2 h-2 rounded-full ${categoryColors[index % categoryColors.length]}`} />
              <ThemedText className="text-slate-100 font-semibold text-base">
                {category.category}
              </ThemedText>
            </View>
            <View className="flex-row flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillTag key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </View>
          </View>
        ))}
      </View>
    </SectionWrapper>
  );
}
