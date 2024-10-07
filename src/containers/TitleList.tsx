import { View } from '@tarojs/components';
import { useEffect, useState } from 'react';
import { Title } from 'src/components';
import { getTitles } from 'src/utils';
import { AtDivider } from 'taro-ui';

export function TitleList() {
  const [titles, setTitles] = useState<{ id: string; title: string }[]>([]);
  useEffect(() => {
    getTitles().then((titles) => {
      setTitles(titles);
    });
  }, []);
  return (
    <View>
      {titles.map((title) => (
        <>
          <Title key={title.id}>{title.title}</Title>
          <AtDivider key={title.id} />
        </>
      ))}
    </View>
  );
}
