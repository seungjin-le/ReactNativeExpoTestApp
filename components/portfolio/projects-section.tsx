import { View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { SectionWrapper } from './section-wrapper';

type Project = {
  title: string;
  description: string;
  techs: string[];
  accent: string;
};

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'Next.js App Router 기반의 풀스택 이커머스 플랫폼. SSR과 ISR을 활용한 SEO 최적화 및 Stripe 결제 연동.',
    techs: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    accent: 'border-indigo-500',
  },
  {
    title: 'Real-time Chat App',
    description:
      'WebSocket 기반 실시간 채팅 애플리케이션. 1:1 채팅, 그룹 채팅, 파일 공유 기능 구현.',
    techs: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    accent: 'border-cyan-400',
  },
  {
    title: 'Task Management Tool',
    description:
      '드래그 앤 드롭 기반 칸반 보드. React DnD를 활용한 직관적인 태스크 관리 도구.',
    techs: ['React', 'NestJS', 'Docker', 'AWS'],
    accent: 'border-emerald-400',
  },
  {
    title: 'Portfolio Mobile App',
    description:
      'React Native + Expo로 개발한 크로스 플랫폼 포트폴리오 앱. NativeWind 스타일링 적용.',
    techs: ['React Native', 'Expo', 'NativeWind', 'TypeScript'],
    accent: 'border-amber-400',
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <View className={`bg-slate-800 rounded-2xl p-6 border-l-4 ${project.accent}`}>
      <ThemedText className="text-lg font-bold text-slate-50 mb-2">
        {project.title}
      </ThemedText>
      <ThemedText className="text-slate-400 text-sm leading-6 mb-4">
        {project.description}
      </ThemedText>
      <View className="flex-row flex-wrap gap-2">
        {project.techs.map((tech) => (
          <View key={tech} className="bg-slate-700/50 rounded-md px-3 py-1">
            <ThemedText className="text-xs text-slate-400">{tech}</ThemedText>
          </View>
        ))}
      </View>
    </View>
  );
}

export function ProjectsSection() {
  return (
    <SectionWrapper label="Projects" title="프로젝트">
      <View className="gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </View>
    </SectionWrapper>
  );
}
