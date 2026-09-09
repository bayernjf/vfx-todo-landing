# 部署 — vfx-todo-landing

更新时间：2026-09-09

## 站点信息
- `astro.config.mjs` 中 `site`：`https://vfx-todo.pages.dev`
- 技术栈：Astro（SSG 静态输出）+ `@bay/landing-ui`
- 包管理器：npm

## 构建
```bash
npm install
npm run build     # astro build && node scripts/shot.mjs
npm run preview
```
构建产物为纯静态文件，输出目录 `dist`。

## 部署
可直接部署到 Cloudflare Pages 或任意静态托管（README 说明）。

| 配置项 | 值 |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |

## 发布后验证
1. 中英双语首页可访问，语言切换正常。
2. `robots.txt`、`sitemap.xml` 可访问且域名一致。
3. OG 图（构建时由 `scripts/shot.mjs` 截出）可访问。

## 改域名时的同步点
- `astro.config.mjs` 的 `site`
- `public/robots.txt` 的 Sitemap 行
- 页面 / 组件里引用站点 URL 的常量
