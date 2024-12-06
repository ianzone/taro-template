import { Button } from '@taroify/core';
import { Text, View } from '@tarojs/components';
import { getData } from 'src/services/api';
import { Router } from 'tarojs-router-next';
import './index.css';
import { useEffect, useState } from 'react';

export default function Index() {
  const [title, setTitle] = useState('');
  useEffect(() => {
    getData().then((title) => {
      setTitle(title);
    });
  }, []);

  return (
    <View className='index'>
      <Text>{title}</Text>
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
