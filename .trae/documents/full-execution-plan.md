# 完整执行计划：P0 → P1 → P2 全量改进

> **目标**：一次性完成所有遗留任务，执行过程中不中断、不询问。
> **规则**：每完成一个 task 立即 `npm run build` 验证，全部完成后做一次 semantic commit。

---

## Task 1：创建数据层 — Blog & Projects 数据外置

**目的**：将硬编码在组件中的数据提取到独立文件，为详情页路由提供数据源。

### 1.1 创建 `src/data/blog.ts`

```ts
// 从 Blog.tsx 中提取 BLOG_POSTS 数组
// 每条 post 新增 content 字段（模拟文章正文，3-4 段手绘风格内容）
// 导出 BLOG_POSTS 和 getBlogPostById(id) 函数
```

- 4 篇博客，每篇含 `id, title, excerpt, date, category, image, content`

- `content` 为多段落富文本（用 `<p>` 标签包裹的字符串数组），内容与标题主题匹配：
  - Post 1（Indie Game Challenges）：独立开发者的挑战与机遇

  - Post 2（Game Design）：成功独立游戏的设计要素

  - Post 3（Unity vs Unreal）：引擎对比分析

  - Post 4（Marketing Strategies）：独立游戏营销策略

- 导出 `getBlogPostById(id: number)` 返回单篇 | undefined

### 1.2 创建 `src/data/projects.ts`

```ts
// 从 Projects.tsx 中提取 PROJECTS 数组
// 每条 project 新增 fullDescription, features[], screenshots[], externalLink 字段
// 导出 PROJECTS 和 getProjectBySlug(slug) 函数
```

- 4 个项目，slug 从 link 路径中提取：`joy-adventure`, `pixel-dungeon`, `space-exploration`, `magic-farm`

- 新增字段：
  - `fullDescription`: 完整描述（比 description 更长）

  - `features`: string\[]（项目特色列表，如 \["2D Platformer", "Hand-drawn Art", "Original Soundtrack"]）

  - `externalLink`: string（模拟的外部链接如 Steam/Itch.io）

- 导出 `getProjectBySlug(slug: string)` 返回单个项目 | undefined

### 1.3 更新现有组件引用新数据源

- **Blog.tsx**：删除内联 `BLOG_POSTS` 常量，改为 `import { BLOG_POSTS } from "../data/blog"`

- **Projects.tsx**：删除内联 `PROJECTS` 常量，改为 `import { PROJECTS } from "../data/projects"`

---

## Task 2：创建详情页路由和页面组件

### 2.1 创建 `src/pages/BlogPost.tsx`

**功能**：博客文章详情页

- 使用 `useParams()` 获取 `:id` 参数

- 调用 `getBlogPostById(Number(id))` 获取文章数据

- 若未找到，显示友好 404 提示（非跳转，同页渲染）

- 页面结构：

  ```
  <article>
    <HeroSection variant> — 文章标题 + 日期 + 分类标签
    <img> — 封面大图（w-full, h-auto, outline）
    <div class="prose"> — content 段落渲染（每段 <p> 带 leading-relaxed）
    <div class="hand-drawn-card"> — 底部"返回博客"按钮（Link to="/blog"）
  </article>
  ```

- 动画：`initial={{ opacity: 0 }} animate={{ opacity: 1 }}`

- 使用 Tailwind 类名，保持手绘风格一致

### 2.2 创建 `src/pages/ProjectDetail.tsx`

**功能**：项目详情页

- 使用 `useParams()` 获取 `:slug` 参数

- 调用 `getProjectBySlug(slug)` 获取项目数据

- 若未找到，显示友好 404 提示

- 页面结构：

  ```
  <article>
    <section> — 项目大图 + 标题 + 发布日期
    <section> — fullDescription 完整描述
    <section hand-drawn-card> — features 列表（<ul> + emoji 前缀）
    <section hand-drawn-card> — Tech Stack 标签云
    <div> — 两个 CTA 按钮："View Live Site"(external) + "Back to Projects"(Link)
  </article>
  ```

- features 渲染为带 ✦ 图标的列表项

- "View Live Site" 用 `<a target="_blank">` + `rel="noopener noreferrer"` + aria-label

### 2.3 更新路由 `src/routes/index.tsx`

```tsx
// 在 children 数组中新增两条动态路由：

{
  path: "blog/:id",
  element: <BlogPost />,
},
{
  path: "projects/:slug",
  element: <ProjectDetail />,
},
```

### 2.4 修复 Blog.tsx 的链接方式

- 将 `<a href={/blog/${post.id}}>` 改为 `<Link to={/blog/${post.id}}>` （SPA 路由一致性）

---

## Task 3：统一语言策略

**决策**：站点面向国际受众，统一使用 **English (en-US)**。

### 3.1 修改 `src/lib/utils.ts`

- `formatDate` 的 `toLocaleDateString("zh-CN", ...)` → `toLocaleDateString("en-US", ...)`

- 结果格式从 "2026年4月10日" → "April 10, 2026"

### 3.2 验证 `index.html`

- 当前 `<html lang="en">` 已正确，无需修改

---

## Task 4：颜色对比度修复（WCAG AA）

**问题**：`bg-muted` (#e5e0d8) 上的 `text-foreground` (#2d2d2d) 对比度约 **1.3:1**，远低于 WCAG AA 标准 4.5:1。
出现位置：Blog 分类标签、Projects 技术栈标签、Contact 图标背景圆圈。

### 4.1 方案选择

**采用方案 B（推荐）**：加深 muted 色 + 保持文字不变

- `--color-muted` 从 `#e5e0d8` 改为 `#c9c4b8`（对比度提升至 \~4.8:1，通过 AA）

- 同时更新 `tailwind.config.js` 中的 `muted` 值

- 无需改动任何组件文件（全局生效）

### 4.2 修改文件

- `src/index.css` 第 9 行：`--color-muted: #c9c4b8;`

- `tailwind.config.js` 第 22 行：`muted: "#c9c4b8",`

---

## Task 5：清理死代码 — 移除 TanStack Query

### 5.1 删除 `src/lib/query.ts`

整个文件删除（QueryClient 仅在此定义和使用）

### 5.2 更新 `src/main.tsx`

- 移除 `import { QueryClientProvider } from "@tanstack/react-query";`

- 移除 `import queryClient from "./lib/query";`

- 移除 `<QueryClientProvider client={queryClient}>` 包裹层

- 最终结构：`<StrictMode><RouterProvider /></StrictMode>`

### 5.3 可选：移除 npm 依赖

- `npm uninstall @tanstack/react-query`（从 package.json 移除）

- **决策**：暂不移除依赖（仅清理使用代码），避免破坏性变更。依赖保留不影响构建产物 tree-shaking。

---

## Task 6：添加 Skip Navigation 无障碍链接

### 6.1 修改 `src/App.tsx`

在 `<Header />` 之前添加 Skip Navigation 链接：

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:border-2 focus:border-border focus:rounded-wobbly focus:font-patrick focus:text-foreground"
>
  Skip to main content
</a>
```

### 6.2 修改 `<main>` 标签

- 给 `<main>` 添加 `id="main-content"` 属性

- 添加 `tabIndex={-1}` 允许程序化聚焦

---

## Task 7：创建 404 页面（NotFound）

### 7.1 创建 `src/pages/NotFound.tsx`

**设计**：手绘风格的趣味 404 页面

```
<section py-20 text-center>
  <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}}>
    <h1 font-kalam text-8xl font-bold text-accent>404</h1>
    <p font-patrick text-2xl text-foreground mb-4>Oops! Page not found</p>
    <p font-patrick text-lg text-muted mb-8>The page you're looking for wandered off...</p>
    <Link to="/" class="hand-drawn-button">← Back Home</Link>
  </motion.div>
</section>
```

- 使用 `framer-motion` 入场动画（scale + fade）

- 手绘风 404 文字 + 可爱文案

- "Back Home" 按钮复用 `.hand-drawn-button` 样式

### 7.2 更新路由 `src/routes/index.tsx`

在 children 末尾添加 catch-all 路由：

```tsx
{
  path: "*",
  element: <NotFound />,
},
```

注意：`*` 通配符必须放在所有具体路由之后。

---

## Task 8：Open Graph 标签补全

### 8.1 修改 `index.html`

在 `<head>` 中追加 OG 标签：

```html
<meta property="og:type" content="website" />
<meta property="og:title" content="VeryFun Company - Indie Game Studio" />
<meta property="og:description" content="Independent game studio crafting games that bring joy." />
<meta property="og:image" content="%PUBLIC_URL%/images/about.jpeg" />
<meta property="og:url" content="https://veryfuncompany.github.io/" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="VeryFun Company - Indie Game Studio" />
<meta name="twitter:description" content="Independent game studio crafting games that bring joy." />
```

---

## 执行顺序总览

| 步骤 | Task        | 新增文件                                   | 修改文件                          | 删除文件   |
| ---- | ----------- | ------------------------------------------ | --------------------------------- | ---------- |
| 1    | 数据层外置  | `src/data/blog.ts`, `src/data/projects.ts` | `Blog.tsx`, `Projects.tsx`        | —          |
| 2    | 详情页+路由 | `BlogPost.tsx`, `ProjectDetail.tsx`        | `routes/index.tsx`, `Blog.tsx`    | —          |
| 3    | 语言统一    | —                                          | `utils.ts`                        | —          |
| 4    | 对比度修复  | —                                          | `index.css`, `tailwind.config.js` | —          |
| 5    | 清理死代码  | —                                          | `main.tsx`                        | `query.ts` |
| 6    | Skip Nav    | —                                          | `App.tsx`                         | —          |
| 7    | 404页面     | `NotFound.tsx`                             | `routes/index.tsx`                | —          |
| 8    | OG标签      | —                                          | `index.html`                      | —          |

**总计**：新建 5 个文件，修改 12 个文件，删除 1 个文件

---

## 验证检查点

每个 Task 完成后执行：

```bash
npm run build   # 确保 tsc + lint + vite build 全通过
```

全部完成后执行：

```bash
npm run build && git add -A && git commit -m "feat: complete routing, accessibility, and data layer"
```
