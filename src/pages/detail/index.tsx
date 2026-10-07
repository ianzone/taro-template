import { navigateTo } from 'virtual:taro/api';
import { Button, Text, View } from 'virtual:taro/components';
import { getData } from '../../services/api';
import './index.css';
import { useEffect, useState } from 'react';

export default function Index() {
  const [text, setText] = useState('text');
  useEffect(() => {
    getData().then((text) => {
      console.log(text);
      setText(text);
    });
  }, []);

  return (
    <View className='detail-page'>
      <Text>{text}</Text>
      <Button
        className='primary-action'
        onClick={() => {
          navigateTo({
            url: '/pages/index/index',
          });
        }}
      >
        跳转到首页
      </Button>
    </View>
  );
}
