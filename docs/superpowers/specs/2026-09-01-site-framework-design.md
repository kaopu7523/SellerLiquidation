# 内容站前端框架 — SPEC

状态：已通过 brainstorming 评审，待用户最终确认
最后更新：2026-09-01
依赖：本文档是对 [2026-08-28-fba-liquidation-site-design.md](./2026-08-28-fba-liquidation-site-design.md) 中"网站信息架构"待细化项的落地，仅覆盖该 SPEC 中的**内容站部分**（首页/导航/攻略详情页），不含发布墙/账号体系/BaaS 后端 —— 那部分留待下一阶段单独设计。

## Problem Statement

上一份 SPEC 已经定好产品方向和首页文案（`keyword-research/homepage-copy.md`），但还没有落到具体的页面信息架构、路由结构和技术实现方式上。同时用户希望站点的整体页面框架（首页/导航/内页布局）参照已验证过内容策略、信息架构成熟的游戏攻略站 [howtofishgame.wiki](https://howtofishgame.wiki/) 复刻，而不是自行设计——该站是专注单一游戏的 SEO 攻略 wiki，页面区块类型（Hero 诊断卡片、信任摘要块、分类卡片墙、聚合页卡片网格、文章页 Quick-answer + Sources 引用块）经过实战验证，结构上可以直接复用到"亚马逊卖家清库存攻略站"这个同样以长尾关键词内容为主导的场景。

## Proposed Solution

### 信息架构 / 路由

三个关键词分类（对应 `keyword-research/keywords.json`）各自形成一个聚合页（Hub），Hub 下挂对应文章详情页，URL 带分类前缀（比照目标站 `/guides/x`、`/troubleshooting/x` 的模式）：

```
/                          首页（用 homepage-copy.md 现成文案）
/storage-fees              Hub：费用板块
/storage-fees/fba-storage-fees
/storage-fees/aged-inventory-surcharge
/storage-fees/ipi-score
/storage-fees/calculator          ← 交互式计算器，非纯文章
/clearing-methods          Hub：方法板块
/clearing-methods/liquidation-program
/clearing-methods/disposal-vs-liquidation
/clearing-methods/donations
/clearing-methods/return-pallets
/channels                  Hub：渠道板块
/channels/liquidation-auctions
/channels/liquidation-pallets
/channels/bulk-liquidations
/channels/liquidation-warehouse
/channels/direct-liquidation
/about /contact /privacy   Footer 静态页
```

`keyword-research/materials/*.md` 中已有的 13 篇研究素材，与上述 13 篇文章页一一对应，作为撰写正文的内容底稿。

### 技术栈

- **Next.js 15 App Router** + pnpm（遵循 CLAUDE.md 依赖规范：禁 npm install，统一 pnpm；禁 require()，统一 ESM import）
- **多语言**：`next-intl`。`locales: ['en']`（数组形式，架构上可扩展，用户明确后续可能加中文）；`localePrefix: 'as-needed'`，默认语言 en 不带前缀，URL 与目标站一样干净（`/storage-fees/...`），以后加中文才出现 `/zh/...` 前缀。UI 文案（导航/按钮/页脚）走 next-intl messages JSON，内容页走 MDX——两套文案体系分离，加语言时互不干扰。
- **MDX 内容**：`gray-matter` 解析 frontmatter + `next-mdx-remote/rsc` 编译渲染。内容文件放 `content/en/<category>/<slug>.mdx`，天然可扩展成 `content/zh/...`。不引入 Contentlayer 等重框架，保持简单可控（KISS）。
- **样式**：Tailwind CSS。UI **布局结构**（区块顺序、卡片构成、Quick-answer 框、Sources 引用块等信息架构）照目标站复刻；**视觉皮肤**（配色/字体等具体设计资产）不照搬目标站，使用本站独立的中性配色——复刻信息架构不等于照抄对方的专有视觉设计。

### 页面模板（组件）

- `Header`（Logo + 三个分类导航 + About）/ `Footer`（免责声明 + 内容更新时间戳 + About/Contact/Privacy 链接）
- `HomePage`：Hero + 诊断卡片 → TL;DR 信任块 → 三个板块卡片网格（费用/方法/渠道）→ Scope & Sourcing 区 → 计算器引导 Banner
- `HubPage`（3 个聚合页复用同一模板）：更新时间徽标 + 引导语 + 该分类下文章卡片网格
- `ArticlePage`（13 篇文章复用同一模板）：Quick-answer 摘要框 + MDX 正文 + Sources 引用列表
- `CalculatorPage`：独立客户端组件，费用估算表单 + 结果面板。本次先出 UI 骨架和基础计算逻辑，具体 Amazon 官方费率表数值后续在内容阶段补全

### 内容迁移

首页直接用 `homepage-copy.md` 转成组件文案；13 篇 `materials/*.md` 逐篇整理成对应路径的 `.mdx` 文件，补上 frontmatter（title / description / category / sources）和 Quick-answer 摘要段。

## Technical Constraints

- 遵循用户全局 CLAUDE.md 规范：pnpm 而非 npm；ESM import 而非 require()；单文件不超过 200 行，超过则拆分；不留 TODO 注释；提交需带语义化 message。
- 本次交付范围内不引入认证、数据库、BaaS（那些属于 [2026-08-28 SPEC](./2026-08-28-fba-liquidation-site-design.md) 的发布墙功能，留待下一阶段）。

## Non-goals（本次不做）

- 发布墙 / 账号体系 / BaaS 后端（下一阶段单独设计）
- 中文内容（架构预留扩展位，但本次只填英文内容）
- 完整精确的 Amazon 官方费率数据库（计算器先出骨架和基础逻辑）
- 照搬目标站的具体视觉设计资产（配色/字体等）——只复刻信息架构和页面区块结构

## Success Criteria

- `pnpm dev` 可正常启动，首页 / 3 个 Hub 页 / 13 个文章页 / 计算器页均可访问且结构完整（区块顺序、组件构成与本设计一致）
- 页面路由、导航、Footer 链接全部可点击互通，无 404
- 站点在浏览器中实际渲染核对：布局区块与目标站的区块类型一一对应（非逐像素复刻，是信息架构层面对应）

## Open Items（留待实施阶段细化，非阻塞）

- 计算器具体费率数值来源与更新机制
- 13 篇 MDX 正文的最终措辞（本设计只定结构，不定文案）
