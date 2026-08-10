# VFX Todo 落地页

VFX Todo 是一款基于 Tauri 的桌面待办应用,完成任务时触发 8 种 WebGL 视觉特效,让生产力工具也能赏心悦目。本仓库是该产品的官方落地页站点。

## 技术栈

- **框架**:Astro ^5.18.2(静态输出)
- **内容**:MDX(@astrojs/mdx ^4.3.14)
- **样式**:Tailwind CSS ^3.4.0(@astrojs/tailwind ^6.0.2,`applyBaseStyles: false`)
- **SEO**:@astrojs/sitemap ^3.7.3(hreflang 由 BaseLayout 手动输出)
- **类型检查**:TypeScript ^5.6.0 + @astrojs/check ^0.9.10
- **i18n**:中英双语,自研字典方案(`src/i18n/` 下的 `ui.ts`、`content.ts`、`utils.ts`、`jsonld.ts`);英文为根路径,中文使用 `/zh` 前缀(`prefixDefaultLocale: false`)

## 快速开始

包管理器为 npm(仓库包含 `package-lock.json`)。

```bash
npm install        # 安装依赖
npm run dev        # 启动开发服务器
npm run build      # 构建生产版本(输出到 dist/)
npm run preview    # 预览构建产物
npm run check      # astro check 类型检查
```

## 项目结构

```text
vfx-todo-landing/
├── public/                  # 静态资源(favicon、llms.txt、robots.txt、screenshots/)
├── src/
│   ├── components/          # 页面组件(Hero、FeatureGrid、EffectGrid、DownloadCards、FAQ 等)
│   ├── i18n/                # 中英字典、页面内容、路径工具与 JSON-LD
│   ├── layouts/             # BaseLayout(SEO meta、hreflang alternate)
│   ├── pages/               # 路由:英文根路径 + zh/ 中文镜像
│   └── styles/              # global.css(Tailwind)
├── astro.config.mjs         # Astro 配置(site、sitemap、mdx、tailwind、i18n)
├── tailwind.config.mjs      # Tailwind 主题(brand/ink 配色、darkMode: class)
├── tsconfig.json
└── package.json
```

## 路由说明

英文页面位于根路径,中文页面位于 `/zh` 前缀下,两者一一对应:

| 英文路径 | 中文路径 | 页面 |
|---------|---------|------|
| `/` | `/zh` | 首页 |
| `/features` | `/zh/features` | 功能特性 |
| `/download` | `/zh/download` | 下载 |
| `/faq` | `/zh/faq` | 常见问题 |
| `/about` | `/zh/about` | 关于 |
| `/privacy` | `/zh/privacy` | 隐私政策 |
| `/terms` | `/zh/terms` | 服务条款 |
| `/404` | — | 404 页面 |

## 部署

`astro.config.mjs` 中 `site` 配置为 `https://vfx-todo.pages.dev`,构建产物为纯静态文件(`dist/`),可直接部署到 Cloudflare Pages 或任意静态托管。
