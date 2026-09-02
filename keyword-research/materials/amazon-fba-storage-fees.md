# amazon fba storage fees

## Monthly inventory storage fees（Amazon Seller Central 官方页面）
- 链接: https://sellercentral.amazon.com/help/hub/reference/external/G3EDYEF6KUCFQTNM
- 要点:
  - 月度仓储费按"日均库存体积（立方英尺）"计算，包装好、可直接发货状态下的尺寸为准。
  - 费用由两部分组成：① 基础月度仓储费（按尺寸档位+季节定），② 仓储利用率附加费（storage utilization surcharge，仅对符合资格的卖家收取，附加于基础费之上）。
  - 危险品（dangerous goods）适用不同费率，需查 Dangerous Goods Identification Guide。
  - **基础费率（标准尺寸 standard-size / 大件 oversize，按立方英尺）**：
    - 非旺季（1-9月）：标准尺寸 $0.78/立方英尺；大件 $0.56/立方英尺
    - 旺季（10-12月）：标准尺寸 $2.40/立方英尺；大件 $1.40/立方英尺
  - **仓储利用率附加费（按 storage utilization ratio 周数分档，非旺季费率示例，标准尺寸）**：
    - <22周：无附加费
    - 22-28周：+$0.44/立方英尺（合计 $1.22）
    - 28-36周：+$0.76（合计 $1.54）
    - 36-44周：+$1.16（合计 $1.94）
    - 44-52周：+$1.58（合计 $2.36）
    - 52周以上：+$1.88（合计 $2.66）
    - 新卖家、个体卖家、或日均体积≤25立方英尺的卖家不适用附加费
  - 大件（oversize）旺季对应附加费档位合计可达 $4.28/立方英尺（52周以上）。
  - **计算公式**：单品费用 = 日均单位数 × 单位体积（立方英尺）× 适用费率
  - 官方计算示例：100件/天 × 0.05立方英尺/件 × $0.78 = $3.90（未触发附加费情形）；若周转率达25周档位，则额外+$0.22，合计$4.12。
  - **降低附加费的方法**：降低库存周转率（storage utilization ratio）——提升动销率（sell-through rate）、申请清仓订单（liquidation order）、或提交移除/处置订单（removal order）。

## Amazon FBA Fees: Full List & FREE Calculator（Jungle Scout）
- 链接: https://www.junglescout.com/resources/articles/amazon-fba-fees
- 要点:
  - 仓储费分两类：月度仓储费（monthly）和长期仓储费/超龄库存附加费（long-term / aged inventory surcharge）。
  - 2024年4月1日起，非旺季（1-9月）标准尺寸商品月度仓储费下调 $0.09/立方英尺（首次体现在2024年5月账单）；大件/旺季费率无变化。
  - 仓储利用率附加费自2023年4月1日起引入，基于"日均库存体积/近13周日均发货量"的比值（storage utilization ratio），每月最后一天计算一次。
  - 2024年4月1日起附加费分档更细，且排除0-30天库存不计入附加费。
  - FBA 费用除仓储费外还包括：推荐费（referral fee，按品类抽成）、履约费（fulfillment fee，按尺寸重量分档）、高数量商品刊登费（listed products超10万个才收，$0.005/ASIN/月）、图书租赁服务费（$5/本）等。

## Amazon FBA Storage Fees for 2025（goaura.com）
- 链接: https://goaura.com/blog/amazon-fba-storage-fees
- 要点:
  - 提到超大件（oversized non-apparel）仓储费区间举例：从 $9.73+$0.42/磅 到 $158.49+$0.83/磅（未展开细节，仅作为"超大件费率差异很大"的佐证，具体数字建议以官方页面为准）。

---

## YouTube 视频素材

### How Much Amazon Charge For Storage | How To Calculate Amazon FBA Storage Fee Properly
- 链接: https://www.youtube.com/watch?v=h3cqh9JCw40
- 发布日期: 2023-01-22
- 观看量: 9116
- 整理内容:

卖家在 Amazon 上销售会被收取三类主要费用：referral fee（推荐费）、FBA fulfillment fee（履约/配送费）、以及 storage fee（仓储费）。视频作者观察到大多数卖家清楚前两类费用，却经常漏算仓储费——原因是 Amazon 在账户初期通常不会立刻收取仓储费，等库存开始积累后才逐渐产生费用，容易被忽视，最终导致利润核算出现偏差，甚至"算完所有成本却发现没有利润"。

要查到某个 SKU 的真实仓储费，需要按以下路径操作：Seller Central 左侧菜单 → Inventory → Manage Inventory，找到目标 listing 并展开其变体（variation），点击对应 SKU 进入详情页。在这个页面右上角能看到"estimated fee per unit sold"，这是 referral fee 与 FBA fulfillment fee 的合计（示例中为 $19.92，其中 FBA fee 部分是 $13.23）——但这个数字**不包含仓储费**，容易让卖家误以为这就是全部费用。

真正的仓储费需要点进详情页里的 Inventory 分栏往下滚动查看：示例商品过去 30 天的月度仓储总费用为 $22.97，除以对应库存件数后得到单件仓储费约 $1.15/月。作者据此演示了一个完整的利润拆解案例：某商品售价 $49，需要依次扣除仓储费 $1.15、referral fee $6.02、FBA fulfillment fee $11.91、以及广告费（sponsored product / PPC）$3.37，扣完这些之后才是真实到手利润。核心提醒：仓储费必须单独去 SKU 详情页查，Amazon 默认展示的"预估费用"面板不会自动包含它，这是很多新卖家利润表算错的主要原因之一。

### Amazon FBA Fees Explained
- 链接: https://www.youtube.com/watch?v=8wfFXYR0EHI
- 发布日期: 2025-03-22
- 观看量: 9339
- 整理内容:

**三大主要费用与真实案例。** 视频作者以自家新品 carnivore electrolytes 过去 9 个月的真实数据为例：销售额约 $159,160，其中 referral fee 共 $15,708、FBA Pick and Pack fee 共 $21,000+、inbound transport（入库运费）$3,644、月度仓储费 $84.98、退款处理费 $41.56，采购成本（COGS）约 $119,986，最终 9 个月净利润约 $98,000。作者建议一个粗略的三三分法：产品成本约占售价的 33%，Amazon 各项费用约占 33%，剩下 33% 是利润。

**账户计划费用。** 个人计划（Individual）免月租，但每笔订单收 $0.99/件；专业计划（Professional）月租 $39.99，不再按件收费。经验法则：月销量若预计超过 40 件，专业计划更划算。

**仓储费计算细节。** 非旺季（1-9月）标准尺寸商品仓储费为 $0.78/立方英尺，旺季（10-12月）跳涨到 $2.40/立方英尺（约 3 倍），原因是 Q4 仓库需求暴增。计算方法：商品尺寸（长×宽×高，单位英寸）算出体积，除以 1,728 立方英寸（=1立方英尺）得到占用的立方英尺数，再乘以对应费率。示例商品 3×4×5 英寸（=60 立方英寸）÷ 1,728 × $0.78 ≈ $0.026，即约每件每月 $2.6（注：原视频口播数字为约"2.6美分"级别，实际按其演示公式换算约合每件每月几美分到几美元不等，需结合具体尺寸核实）。

**长期仓储费（超过365天）。** 库存在仓库超过 365 天（1年），Amazon 按 $6.90/立方英尺 或 $0.15/件（取较高者）收取长期仓储附加费。关键点：这个费用只在"整批库存"持续超过 1 年未清空时触发——如果分批发货、旧批次先卖完，"计时器"会随之重置，不会累积计入超期。避坑技巧：定期监控库存周转，滞销库存接近 1 年大限时可申请 Amazon 退回，重新包装后再发，从而避免触发长期仓储费。

**Referral fee 优惠技巧。** 标准 referral fee 为售价的 15%（低于 $15 的服装类目降至 5%）。通过注册 Amazon Brand Referral Bonus Program，用专属追踪链接把站外流量导流到自己的 Listing，一旦通过该链接成交，referral fee 可以从 15% 降到 5%。

**FBA Pick and Pack fee 与尺寸分级。** Small standard：最长边 ≤15 英寸，中等边 ≤12 英寸，最短边 ≤0.75 英寸，重量 <1 磅；Large standard：最长边 ≤18 英寸，中等边 ≤14 英寸，最短边 ≤8 英寸，重量 <20 磅。服装类目额外加收 $0.30-0.40/件。

**其他容易被忽略的隐藏费用：** ① 退货处理费（客户 30 天内退货，按尺寸重量计费，若 Amazon 判定商品不宜复入库存则代为处置约收 $0.50/件）；② 贴标/预处理费（未提前贴好 FNSKU 条码，Amazon 代贴收 $0.30/件；其他预处理服务 $0.50-$2/件）；③ 低库存水位费（low inventory level fee）——当库存持续低于"未来 28 天预期销量"对应水平时触发，标准尺寸商品按 $0.32-$0.97/件不等，需靠维持至少 28 天库存量来规避。此外还提到 Amazon FBA Small and Light 项目可以把低价轻小商品的 Pick and Pack 费从约 $2.70/件降到 $2.16/件（约省 $0.64/件），长期累积可观。

### YouTube 素材备注
- 原候选 fJpywFJS5iE（"How Much Does It REALLY Cost To Start Amazon FBA?"，2026-02-17，61051 观看）虽然新且观看量最高，但内容实际讲的是"启动 Amazon 生意的整体成本"（账户月租、选品软件、LLC、批发/铺货起始资金等），完全没有涉及仓储费这个主题，与关键词不匹配，已弃用并替换为 h3cqh9JCw40。

---

## Amazon 官方帮助中心补充

### ✅ 费率疑点已解决 — $0.99/$3.63 是危险品专属费率，非标准商品费率更新
- 链接: https://sellercentral.amazon.com/help/hub/reference/external/G3EDYEF6KUCFQTNM
- 说明: 之前用 WebFetch 抓这个页面只能拿到登录壳层，误以为 Google 摘要里出现的 $0.99/$3.63 是标准费率的更新版本。改用 `mcp__jina__read_url` 后成功拿到完整正文（jina 能绕开这个登录壳层限制，WebFetch 不行——后续抓 sellercentral.amazon.com 页面应优先用这个工具），确认页面里其实是**三张并列的费率表**：
  1. **非危险品·非旺季（1-9月）**：标准尺寸 base $0.78/立方英尺，大件 base $0.56/立方英尺（与本文件原记录一致，**采信**）
  2. **非危险品·旺季（10-12月）**：标准尺寸 base $2.40/立方英尺，大件 base $1.40/立方英尺（与本文件原记录一致，**采信**）
  3. **危险品专属费率（Dangerous goods products）**：1-9月 标准尺寸 $0.99、大件 $0.78；10-12月 标准尺寸 $3.63、大件 $2.43 —— 这就是之前 Google 摘要片段里那组"神秘数字"的真实来源，跟主文案要用的标准商品费率无关，除非要单独写危险品仓储费的内容才需要用这组。
  - **结论：本文件原有的 $0.78/$2.40（标准商品）可以放心采用，不需要再人工登录核实。**

### Monthly inventory storage fees 官方页面补充细节（jina read_url 抓到完整正文后新增）
- 链接: 同上
- 要点:
  - **仓储利用率附加费（storage utilization surcharge）的完整资格条件（4条全部满足才收）**：① 是 Professional 卖家账户；② 首次发货到美国 Amazon 仓库超过365天；③ 该尺寸档位的日均库存体积 ≥ 25立方英尺；④ 该尺寸档位的库存周转周数 > 22周。新卖家（首次发货未满365天）、Individual 账户、日均体积 ≤25立方英尺的卖家**不适用**附加费，只收 base 费率。
  - **收费时间**：每月账单通常在次月 7-15 号之间出账（即当月费用下月中旬前后扣）。
  - **AWD 自动补货附加费豁免**：2024年6月1日起，如果某个商品过去13周内 ≥70% 的 FBA 库存是通过 Amazon Warehousing and Distribution (AWD) 自动补货的（Auto-Replenishment Ratio ARR），可以豁免仓储利用率附加费，可用 "FBA Surcharge Waiver Status report" 查具体豁免状态。
  - **FBA New Selection 项目**：符合条件的新品可享受免费月度仓储、免费清算、免费退货处理（限时），这部分库存不计入 base 仓储费和附加费的计算。
  - **体积计算单位**：按每 10cm×10cm×10cm（1立方分米）计费，用"Monthly Storage Fees report"可查历史体积/周转率/费用明细。
  - **降低附加费的官方建议**（原文列出）：提升 sell-through rate、申请 liquidation order、或通过 removal order 申请退回/销毁。

### 2026 US Referral and FBA fee changes summary（交叉验证来源，与本文件数字一致）
- 链接: https://sellercentral.amazon.com/help/hub/reference/external/G201411300
- 要点: 该页面标题显示专门汇总 2026 年费用变更，Google 摘要片段确认了一条数字："Items aged over 15 months will incur monthly aged inventory fees of $0.35 per unit or $7.90 per cubic feet, whichever is greater."——与本文件及 aged-inventory-surcharge 文件里记录的"456天以上 $7.90/立方英尺 或 $0.35/件"完全一致，可作为交叉验证。页面正文本次同样被登录壳层挡住，未能获取更多细节。

## 未深入抓取但可作为补充信源
- Amazon FBA Storage Fees Explained [Complete Breakdown]（getida.com）：https://getida.com/resources/blog/fba-reimbursements/amazon-fba-storage-fees — 抓取时被反爬虫挑战页拦截（Cloudflare/机器人验证），未获取到正文内容，如需引用需人工访问。
- Reddit "Amazon storage fees is it worth it?"：https://www.reddit.com/r/FulfillmentByAmazon/comments/1gjuw5p/amazon_storage_fees_is_it_worth_it — 抓取被 Reddit 反爬虫验证拦截（"Prove your humanity"），未获取真实评论内容。帖子标题显示有卖家反映"每月付2万美元仓储费"，讨论"如何应对"，如需卖家真实经验建议后续用浏览器手动访问或换渠道抓取。
- 2024 FBA monthly inventory storage fee and aged...（sellercentral 官方 2024 更新说明）：https://sellercentral.amazon.com/help/hub/reference/external/GJ9NNG7RK4TU6E3Z — 与上面 aged-inventory 关键词素材文件重叠，费率数字已在该文件中记录，此处不重复展开。
