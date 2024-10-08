import { View } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import { TitleList } from 'src/containers';
import { AtButton } from 'taro-ui';

export default function Index() {
  return (
    <View>
      <TitleList />
      <AtButton
        type='primary'
        circle
        onClick={() => {
          navigateTo({ url: '/pages/detail/detail' });
        }}
      >
        跳转到详情页
      </AtButton>
    </View>
  );
}
