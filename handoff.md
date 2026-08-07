# Handoff — vfx-todo-landing

更新时间：2026-08-08

## 项目概况
VfxTodo 产品落地页。Astro 7 + Tailwind CSS v4 静态站点，中英双语，
部署于 Cloudflare Pages（站点：https://vfx-todo.pages.dev）。
通过页头/页脚链接回 hub 站 bayjf.com，不与其他落地页直接互链。

## 已完成（本地未推送，分支 dev）
- `db7f7d6` build: upgrade to Astro 7 and Tailwind CSS v4
- `e750014` feat(legal): add privacy, terms and 404 pages
- `61ac14d` docs: add README with project overview

Tailwind v4 迁移要点：改用 @tailwindcss/vite；global.css 用 @theme 定义
--color-brand (#7c3aed) 等设计令牌；删除了旧的 tailwind.config.mjs。

## 注意点
- ⚠️ 缺少 OG 社交分享图（public/ 下无 og 图），分享时不会显示预览图。
- robots.txt、sitemap 已就位；构建通过；提交仅在本地。

## 下一步
1. 生成 1200×630 PNG OG 图（中英两版），更新布局中的 og:image 引用。
2. `git push`（dev 分支，推送前可先 `git pull --rebase`）。
3. 部署后验证 og:image、robots.txt、sitemap、法务页面。
