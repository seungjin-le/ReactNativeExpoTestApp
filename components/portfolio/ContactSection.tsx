import { View, Linking, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { SectionWrapper } from './SectionWrapper';
import { PROFILE } from '@/constants/portfolio';

type ContactItem = {
  label: string;
  value: string;
  url: string;
};

const contacts: ContactItem[] = [
  { label: 'Email', value: PROFILE.email, url: `mailto:${PROFILE.email}` },
  { label: 'Phone', value: PROFILE.phone, url: `tel:${PROFILE.phone}` },
  { label: 'GitHub', value: PROFILE.github.replace('https://', ''), url: PROFILE.github },
  { label: 'Blog', value: PROFILE.blog.replace('https://', ''), url: PROFILE.blog },
  { label: 'Location', value: PROFILE.location, url: '' },
];

export function ContactSection() {
  return (
    <SectionWrapper label="Contact" title="연락처">
      <ThemedText className="mb-8 leading-7">
        새로운 기회나 협업에 항상 열려있습니다.{'\n'}
        아래 채널을 통해 편하게 연락주세요.
      </ThemedText>

      <View className="gap-3">
        {contacts.map((contact) => {
          const isLink = contact.url.length > 0;
          return (
            <Pressable
              key={contact.label}
              onPress={isLink ? () => Linking.openURL(contact.url) : undefined}
              disabled={!isLink}
              className="bg-slate-800 rounded-xl p-5 flex-row items-center justify-between active:opacity-70"
            >
              <View>
                <ThemedText type="caption" className="mb-1">{contact.label}</ThemedText>
                <ThemedText className="text-indigo-400 font-medium">{contact.value}</ThemedText>
              </View>
              {isLink && <ThemedText className="text-slate-500 text-lg">→</ThemedText>}
            </Pressable>
          );
        })}
      </View>
    </SectionWrapper>
  );
}
