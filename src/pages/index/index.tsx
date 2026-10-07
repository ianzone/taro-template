import { Button, View } from 'virtual:taro/components';
import { Title } from '../../components';
import './index.css';
import { navigateTo } from 'virtual:taro/api';

export default function Index() {
  return (
    <View className='home-page'>
      <Title>Hello world!!!</Title>
      <Button
        className='primary-action'
        onClick={() => {
          navigateTo({
            url: '/pages/detail/index',
          });
        }}
      >
        跳转到详情页
      </Button>
    </View>
  );
}
