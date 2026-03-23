import { ScrollView, View } from 'react-native';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';

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
