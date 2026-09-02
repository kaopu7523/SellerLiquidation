# YouTube 字幕素材 — 待补齐清单

截至目前，以下 6 个关键词的 YouTube 视频字幕素材还没抓成功（YouTube 对本机 IP 限流导致），需要稍后单独补：

## 完全没处理（连候选视频都没选）
1. `liquidate-or-take-donations-of-excess-fba-inventory` — 对应文件 `liquidate-or-take-donations-of-excess-fba-inventory.md`
2. `liquidation-pallets-amazon-returns` — 对应文件 `liquidation-pallets-amazon-returns.md`

## 已选好候选视频，但字幕抓取失败（IpBlocked/429）
3. `amazon liquidation pallets` — 对应文件 `amazon-liquidation-pallets.md`（候选视频已写入文件末尾）
4. `amazon bulk liquidations` — 对应文件 `amazon-bulk-liquidations.md`（候选视频：PC Parts Deal Hunting at a 2.5 STAR Amazon Liquidation Store / I Bought a GIANT Amazon Returns Pallet for $150，已写入文件末尾）
5. `amazon liquidation warehouse` — 对应文件 `amazon-liquidation-warehouse.md`（候选视频已写入文件末尾）
6. `direct liquidation amazon` — 对应文件 `direct-liquidation-amazon.md`（候选视频已写入文件末尾；且实测近期该平台专属视频很少，多是2016-2019年老内容）

## 已完成（不需要再处理）
- amazon fba storage fees / amazon aged inventory surcharge / amazon ipi score / amazon fba storage fees calculator
- amazon liquidation program / amazon disposal vs liquidation
- amazon liquidation auctions

## 备注
- IP 限流即使等了 5 分钟冷却 + 间隔重试仍未解除，说明封锁时间比预期长。
- **已确认不是工具接口限流，是 IP 级别封锁**：用户手动用 Chrome 插件"YouTube Transcript Generator"在浏览器里试也看不到字幕，说明连浏览器手动访问字幕功能都被挡了，不只是 yt-dlp/youtube-transcript-api 这两个工具的问题。换插件/换工具都绕不开，本质是这台机器/这个网络环境的出口 IP 被 YouTube 封了。
- 下次重试前**必须等足够长时间**（大概率不止半小时，具体多久未知），或者换网络环境/代理才可能解决，短暂冷却重试大概率无效，不建议反复尝试浪费时间。
