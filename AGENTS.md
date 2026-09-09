# AGENTS.md — vfx-todo-landing

供 AI coding agents（Claude Code / Codex / Cursor / Copilot 等）在本仓库工作时自动读取。

## 项目概览
vfx-todo 落地页：带视觉特效的桌面 Todo 应用（见 `vfx-todo` 主仓库，React + Tauri v2）官方站点。

## 技术栈
| 类别 | 方案 |
|------|------|
| 框架 | Astro（SSG 静态输出） |
| 共享包 | `@bay/landing-ui` |
| 站点地址 | `https://vfx-todo.pages.dev`（`astro.config.mjs` 的 `site`） |
| 包管理 | npm |

## 常用命令
```bash
npm install
npm run dev
npm run build     # astro build && node scripts/shot.mjs
npm run preview
```

## 约定
- 预览 / OG 图由 `scripts/shot.mjs` 在构建时截出，属于构建产物，不要提交。
- 站点 URL 集中在 `astro.config.mjs` 的 `site`，改域名时同步 `public/robots.txt` 的 Sitemap 行。
- 部署细节见 `docs/DEPLOYMENT.md`（Cloudflare Pages 或任意静态托管，输出 `dist`）。

## 不要做的事
- 不要提交构建产物与 `.env`。
- 不要只改一个语言的文案（站点为中英双语）。
- 不要跳过 `git pull --rebase` 直接 push。
