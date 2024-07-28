import { useLoad } from '@tarojs/taro';
import { Box } from '../../components';

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return <Box />;
}
