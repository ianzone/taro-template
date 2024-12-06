import { Button } from '@taroify/core';
import { Text, View } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import { Router } from 'tarojs-router-next';
import './index.css';

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button
        color='primary'
        onClick={() => {
          Router.toIndex();
        }}
      >
        跳转到index
      </Button>
    </View>
  );
}
