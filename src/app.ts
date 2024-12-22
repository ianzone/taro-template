import { useLaunch } from '@tarojs/taro';
import type { PropsWithChildren } from 'react';

import './app.css';

// NOTE: App 不能是 tsx 文件
function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.');
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
