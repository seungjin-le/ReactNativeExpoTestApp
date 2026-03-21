import { View, Linking, Pressable } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { SectionWrapper } from './section-wrapper';

type ContactItem = {
  label: string;
  value: string;
  url: string;
};

const contacts: ContactItem[] = [
  { label: 'Email', value: 'hello@example.com', url: 'mailto:hello@example.com' },
  { label: 'GitHub', value: 'github.com/username', url: 'https://github.com/username' },
  { label: 'LinkedIn', value: 'linkedin.com/in/username', url: 'https://linkedin.com/in/username' },
];

export function ContactSection() {
  return (
    <SectionWrapper label="Contact" title="연락처">
      <ThemedText className="mb-8 leading-7">
        새로운 기회나 협업에 항상 열려있습니다.{'\n'}
        아래 채널을 통해 편하게 연락주세요.
      </ThemedText>

      <View className="gap-3">
        {contacts.map((contact) => (
          <Pressable
            key={contact.label}
            onPress={() => Linking.openURL(contact.url)}
            className="bg-slate-800 rounded-xl p-5 flex-row items-center justify-between active:opacity-70"
          >
            <View>
              <ThemedText type="caption" className="mb-1">{contact.label}</ThemedText>
              <ThemedText className="text-indigo-400 font-medium">{contact.value}</ThemedText>
            </View>
            <ThemedText className="text-slate-500 text-lg">→</ThemedText>
          </Pressable>
        ))}
      </View>
    </SectionWrapper>
  );
}
