import { Button, ConfigProvider } from '@taroify/core';
import { View } from '@tarojs/components';
import { Title } from 'src/components';
import { Router } from 'tarojs-router-next';
import './index.css';

export default function Index() {
  return (
    <ConfigProvider
      theme={{
        rateIconFullColor: '#07c160',
        sliderTrackHeight: '4px',
        sliderButtonWidth: '20px',
        sliderButtonHeight: '20px',
        sliderActiveBackgroundColor: '#07c160',
        buttonPrimaryBorderColor: '#07c160',
        buttonPrimaryBackgroundColor: '#07c160',
      }}
    >
      <View className='index'>
        <Title>Hello world!!!</Title>
        <Button
          color='primary'
          onClick={() => {
            Router.toDetail();
          }}
        >
          跳转到详情页
        </Button>
      </View>
    </ConfigProvider>
  );
}
