import { ScrollView, View } from 'react-native';
import { HeroSection } from '@/components/portfolio/hero-section';
import { AboutSection } from '@/components/portfolio/about-section';
import { SkillsSection } from '@/components/portfolio/skills-section';
import { ProjectsSection } from '@/components/portfolio/projects-section';
import { ContactSection } from '@/components/portfolio/contact-section';
import { Footer } from '@/components/portfolio/footer';

export default function PortfolioScreen() {
  return (
    <ScrollView className="flex-1 bg-slate-900" showsVerticalScrollIndicator={false}>
      <View className="items-center">
        <HeroSection />
        <View className="w-full h-px bg-slate-800" />
        <AboutSection />
        <View className="w-full h-px bg-slate-800" />
        <SkillsSection />
        <View className="w-full h-px bg-slate-800" />
        <ProjectsSection />
        <View className="w-full h-px bg-slate-800" />
        <ContactSection />
        <Footer />
      </View>
    </ScrollView>
  );
}
