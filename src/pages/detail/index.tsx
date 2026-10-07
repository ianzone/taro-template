import { Button } from '@taroify/core';
import { Text, View } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import { getData } from 'src/services/api';
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
    <View className='index'>
      <Text>{text}</Text>
      <Button
        color='primary'
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
