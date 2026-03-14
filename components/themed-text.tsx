import { Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

const fontSizes = {
  default: 'text-[16px]',
  title: 'text-[32px]',
  defaultSemiBold: 'text-[16px]',
  subtitle: 'text-[20px]',
  link: 'text-[16px]',
}


export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');



  return (
    <Text
    className={fontSizes[type]}   
        
      {...rest}
    />
  );
}


