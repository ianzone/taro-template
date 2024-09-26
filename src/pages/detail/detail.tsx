import { View } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import { AtButton } from 'taro-ui';

export default function Detail() {
  return (
    <View className='index'>
      <AtButton
        type='primary'
        circle
        onClick={() => {
          navigateTo({ url: '/pages/index/index' });
        }}
      >
        跳转到首页
      </AtButton>
    </View>
  );
}
