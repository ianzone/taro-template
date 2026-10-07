# VPT Template

微信、支付宝、抖音小程序与 Web 共用的 React 项目，使用 Vite 和 VPT 构建。

- [VPT 文档](https://vpt.js.org)
- [文档索引](https://vpt.js.org/llms.txt)

## 开始使用

需要 Node.js 24 或更高版本。

```sh
bun install
```

微信构建默认沿用模板原有 App ID。微信开发者工具可以直接打开仓库根目录（根目录项目配置会将小程序目录指向 `dist/wx`），也可以直接导入 `dist/wx`。如果使用自己的小程序，请复制 `.env.example` 为 `.env.local` 并填写对应平台的 App ID；`.env.local` 已加入 Git 忽略。

```dotenv
VITE_VPT_WECHAT_APP_ID=wx1234567890abcdef
VITE_VPT_ALIPAY_APP_ID=2021000000000000
VITE_VPT_TIKTOK_APP_ID=testAppId
```

启动开发模式：

```sh
bun run dev:wx
bun run dev:zfb
bun run dev:tt
bun run dev:h5
```

微信、支付宝和抖音开发者工具分别导入 `dist/wx`、`dist/zfb` 和 `dist/tt`。Web 项目可通过 Vite 输出的本地地址访问。

## 构建和检查

```sh
bun run build:wx
bun run build:zfb
bun run build:tt
bun run build:h5
bun run typecheck
```

每次命令构建一个目标。完整的目标配置、页面清单和原生项目配置位于 `vite.config.ts`。

## 项目结构

- `src/app.tsx`：共享 React App 与全局样式入口。
- `src/pages/`：应用页面。
- `src/services/`：应用服务，使用 `virtual:taro/api` 调用 Taro API。
- `vite.config.ts`：VPT 构建目标、页面和项目配置。

页面与 Taro 组件/API 使用 VPT 虚拟模块（`virtual:taro/components`、`virtual:taro/api`），不要在项目源码中直接导入 `@tarojs/*`。
