import { View } from 'virtual:taro/components';
import type { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  return <View className='title'>{children}</View>;
}
