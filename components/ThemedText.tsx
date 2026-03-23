import { Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'subtitle' | 'heading' | 'caption' | 'label';
};

const typeStyles: Record<NonNullable<ThemedTextProps['type']>, string> = {
  default: 'text-base text-slate-300 leading-relaxed',
  title: 'text-5xl font-bold text-slate-50 tracking-tight',
  subtitle: 'text-xl text-slate-400 leading-relaxed',
  heading: 'text-2xl font-bold text-slate-50',
  caption: 'text-sm text-slate-500',
  label: 'text-xs font-semibold uppercase tracking-widest text-indigo-400',
};

export function ThemedText({ type = 'default', className, ...rest }: ThemedTextProps) {
  return <Text className={`${typeStyles[type]} ${className ?? ''}`} {...rest} />;
}
