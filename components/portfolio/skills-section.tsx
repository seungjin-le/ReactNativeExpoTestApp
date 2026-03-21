import { View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { SectionWrapper } from './section-wrapper';

type SkillCategory = {
  title: string;
  color: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    color: 'bg-indigo-500',
    skills: ['React', 'Next.js', 'TypeScript', 'React Native', 'TailwindCSS'],
  },
  {
    title: 'Backend',
    color: 'bg-cyan-400',
    skills: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'DevOps & Tools',
    color: 'bg-emerald-400',
    skills: ['Docker', 'AWS', 'GitHub Actions', 'Nginx', 'Jenkins'],
  },
];

function SkillTag({ name }: { name: string }) {
  return (
    <View className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2">
      <ThemedText className="text-slate-300 text-sm">{name}</ThemedText>
    </View>
  );
}

export function SkillsSection() {
  return (
    <SectionWrapper label="Skills" title="기술 스택">
      <View className="gap-8">
        {skillCategories.map((category) => (
          <View key={category.title}>
            <View className="flex-row items-center gap-2 mb-4">
              <View className={`w-2 h-2 rounded-full ${category.color}`} />
              <ThemedText className="text-slate-100 font-semibold text-base">
                {category.title}
              </ThemedText>
            </View>
            <View className="flex-row flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillTag key={skill} name={skill} />
              ))}
            </View>
          </View>
        ))}
      </View>
    </SectionWrapper>
  );
}
