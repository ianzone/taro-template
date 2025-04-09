import { View } from '@tarojs/components';
import type { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  return <View className='at-article__h2'>{children}</View>;
}
