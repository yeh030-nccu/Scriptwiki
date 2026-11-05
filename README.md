# 劇本分析方法 Wiki

以繁體中文整理劇本分析方法的靜態 Wiki。網站內容採 Markdown，使用 Astro 產生 HTML，無需資料庫、登入或伺服器端 API。

## 本機開發

需要 Node.js 20.19 以上版本與 pnpm 11.25.0。

```sh
pnpm install
pnpm dev
```

## 建置靜態網站

```sh
pnpm build
```

輸出位於 `dist/`，可作為靜態網站部署。

若以 GitHub Pages 的「專案網站」方式部署（網址含 `/repository-name/`），建置時設定倉庫名稱作為子路徑：

```sh
BASE_PATH=/repository-name/ pnpm build
```

若是 `username.github.io` 個人／組織網站，或使用自訂網域從網域根目錄提供網站，則不需設定 `BASE_PATH`。`.github/workflows/deploy.yml` 會在 `main` 分支更新時自動建置並發布到 GitHub Pages；專案網站子路徑會依倉庫名稱設定。請在 GitHub 倉庫的 **Settings → Pages → Build and deployment → Source** 選擇 **GitHub Actions**。

## 新增或修改文章

文章放在 `src/content/articles/`，每篇使用一個 Markdown 檔案。檔案開頭需有以下欄位：

```yaml
---
title: 文章標題
slug: stable-url-slug
category: character-analysis
order: 4
summary: 一句話摘要。
---
```

`category` 使用 `character-analysis`（角色分析）或 `story-structure`（故事結構）；`slug` 決定穩定文章網址，建議使用小寫英文與連字號。文章正文以 Markdown 撰寫，可使用標題、段落、清單與參考連結。首頁、分類頁、文章頁及分類提示會依這些資料自動產生。新增文章時，也要同步更新 `public/manus-routes.json` 的路由清單。

## 專案結構

- `src/content/articles/`：六篇 Markdown 文章。
- `src/content.config.ts`：文章欄位及分類資料驗證。
- `src/data/categories.js`：分類名稱與簡介。
- `src/layouts/SiteLayout.astro`：全站導覽與共用頁面框架。
- `src/pages/`：首頁、分類頁及文章頁。
- `src/styles/global.css`：排版、色彩與響應式樣式。
- `public/manus-routes.json`：頁面路由清單。
