import { View } from '@tarojs/components';
import { useEffect, useState } from 'react';
import { Title } from 'src/components';
import { getTitles } from 'src/utils';

export function TitleList() {
  const [titles, setTitles] = useState<{ id: number; title: string }[]>([]);
  useEffect(() => {
    getTitles().then((titles) => {
      setTitles(titles);
    });
  }, []);
  return (
    <View>
      {titles.map((title) => (
        // @ts-ignore
        <Title key={title.id}>{title.title}</Title>
      ))}
    </View>
  );
}
