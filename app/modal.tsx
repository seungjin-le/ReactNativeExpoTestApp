import { Link } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  return (
    <ThemedView className="flex-1 items-center justify-center">
      <ThemedText type="title">This is a modal</ThemedText>
      <Link href="/" dismissTo  className="mt-4 py-3">
        <ThemedText type="link">Go to home screenasdfasdf</ThemedText>
      </Link>
    </ThemedView>
  );
}

