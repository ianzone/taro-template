import { Button, ConfigProvider } from '@taroify/core';
import { View } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import { navigateTo } from '@tarojs/taro';
import { Title } from 'src/components';
import './index.css';

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

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
        <Title>Hello world!</Title>
        <Button
          color='primary'
          onClick={() => {
            navigateTo({ url: '/pages/detail/index' });
          }}
        >
          跳转到详情页
        </Button>
      </View>
    </ConfigProvider>
  );
}
