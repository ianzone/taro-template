import { defineConfig, loadEnv } from 'vite';
import vpt, { type VptJsonObject, type VptTarget } from 'vite-plugin-taro';

const DEFAULT_WECHAT_APP_ID = 'wxf28f7739e124b40d';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_VPT_');
  const target = getTarget(env);
  const appId = getAppId(env, target);
  const isWx = target === 'wx';

  return {
    build: {
      outDir: `dist/${target}`,
    },
    plugins: [
      vpt({
        target,
        app: 'src/app.tsx',
        pages: [
          {
            path: 'pages/index/index',
            config: {
              navigationBarTitleText: '首页',
              ...(isWx ? { glassEaselWebview: true } : {}),
            },
          },
          {
            path: 'pages/detail/index',
            config: {
              navigationBarTitleText: '详情页',
              ...(isWx ? { glassEaselWebview: true } : {}),
            },
          },
        ],
        appJson: {
          ...(isWx ? { componentFramework: 'glass-easel', glassEaselWebview: true } : {}),
          window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'VPT',
            navigationBarTextStyle: 'black',
          },
        },
        projectConfigJson: createProjectConfigJson(target, appId),
        projectPrivateConfigJson: createProjectPrivateConfigJson(target),
        hmr: {
          mode: isWx ? 'devtools' : 'interpreter',
        },
      }),
    ],
  };
});

function getTarget(env: Record<string, string>): VptTarget {
  const target = env.VITE_VPT_TARGET || 'wx';

  if (target === 'wx' || target === 'zfb' || target === 'tt' || target === 'h5') {
    return target;
  }

  throw new Error('VITE_VPT_TARGET must be "wx", "zfb", "tt", or "h5".');
}

function getAppId(env: Record<string, string>, target: VptTarget): string | undefined {
  switch (target) {
    case 'wx':
      return env.VITE_VPT_WECHAT_APP_ID || DEFAULT_WECHAT_APP_ID;
    case 'zfb':
      return env.VITE_VPT_ALIPAY_APP_ID;
    case 'tt':
      return env.VITE_VPT_TIKTOK_APP_ID;
    default:
      return undefined;
  }
}

function createProjectConfigJson(target: VptTarget, appId: string | undefined): VptJsonObject {
  switch (target) {
    case 'wx':
      return {
        appid: appId ?? '',
        projectname: 'vpt-template',
        compileType: 'miniprogram',
        setting: {
          compileHotReLoad: true,
          urlCheck: false,
        },
      };
    case 'zfb':
      return {
        appid: appId ?? '',
        miniprogramRoot: './',
        format: 2,
        compileOptions: {
          component2: true,
        },
      };
    case 'tt':
      return {
        appid: appId ?? '',
        projectname: 'vpt-template',
        miniprogramRoot: './',
        compileHotReload: true,
        setting: {
          urlCheck: false,
          autoCompile: true,
        },
      };
    default:
      return {};
  }
}

function createProjectPrivateConfigJson(target: VptTarget): VptJsonObject {
  switch (target) {
    case 'wx':
    case 'tt':
      return {
        setting: {
          urlCheck: false,
        },
      };
    case 'zfb':
      return {
        ignoreHttpDomainCheck: true,
        ignoreCertificateDomainCheck: true,
        ignoreWebViewDomainCheck: true,
      };
    default:
      return {};
  }
}
