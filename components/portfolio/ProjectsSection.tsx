import { View, Linking, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { SectionWrapper } from './SectionWrapper';
import { PROJECTS } from '@/constants/portfolio';
import type { Project } from '@/types/portfolio';

const accentColors = [
  'border-indigo-500',
  'border-cyan-400',
  'border-emerald-400',
  'border-amber-400',
  'border-rose-400',
];

function ProjectCard({ project, accent }: { project: Project; accent: string }) {
  return (
    <View className={`bg-slate-800 rounded-2xl p-6 border-l-4 ${accent}`}>
      <View className="flex-row justify-between items-start mb-1">
        <ThemedText className="text-lg font-bold text-slate-50 flex-1">
          {project.title}
        </ThemedText>
        <ThemedText className="text-xs text-slate-500 ml-2">{project.period}</ThemedText>
      </View>
      <ThemedText className="text-xs text-indigo-400 mb-3">{project.role}</ThemedText>
      <ThemedText className="text-slate-400 text-sm leading-6 mb-4">
        {project.description}
      </ThemedText>

      {project.highlights.length > 0 && (
        <View className="mb-4 gap-1.5">
          {project.highlights.map((highlight, i) => (
            <ThemedText key={i} className="text-slate-300 text-xs leading-5">
              • {highlight}
            </ThemedText>
          ))}
        </View>
      )}

      <View className="flex-row flex-wrap gap-2 mb-3">
        {project.techStack.map((tech) => (
          <View key={tech} className="bg-slate-700/50 rounded-md px-3 py-1">
            <ThemedText className="text-xs text-slate-400">{tech}</ThemedText>
          </View>
        ))}
      </View>

      {project.links && project.links.length > 0 && (
        <View className="flex-row flex-wrap gap-2">
          {project.links.map((link) => (
            <Pressable
              key={link.url}
              onPress={() => Linking.openURL(link.url)}
              className="active:opacity-70"
            >
              <ThemedText className="text-indigo-400 text-xs font-medium underline">
                {link.label} →
              </ThemedText>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

export function ProjectsSection() {
  return (
    <SectionWrapper label="Projects" title="프로젝트">
      <View className="gap-4">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            accent={accentColors[index % accentColors.length]}
          />
        ))}
      </View>
    </SectionWrapper>
  );
}
