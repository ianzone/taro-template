import { Button } from '@taroify/core';
import { Text, View } from '@tarojs/components';
import { getData } from 'src/services/api';
import { Router } from 'tarojs-router-next';
import './index.css';
import { useEffect, useState } from 'react';

export default function Index() {
  const [text, setText] = useState('');
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
          Router.toIndex();
        }}
      >
        跳转到首页
      </Button>
    </View>
  );
}
