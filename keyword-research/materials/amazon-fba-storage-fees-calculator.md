# amazon fba storage fees calculator

## Amazon FBA Storage Fees 2026（NovaData，含费率与计算示例）
- 链接: https://novadata.io/resources/blog/fba-storage-fees-calculator
- 要点:
  - 切入角度很抓人："5000件库存放9个月，可能吃掉$123,470仓储费"——这种"具体金额吓一跳"的开头方式可以借鉴，但数字需要按自己站的场景重新验证，不要照抄。
  - **核心认知**：仓储费不像履约费是按件收，而是"按空间×时间"收费（立方英尺计），Q4旺季费率翻2-3倍，超过271天触发长期仓储附加费，IPI分数低还会叠加额外处罚。
  - **2026年费率**（与官方页面一致）：标准尺寸非旺季（1-9月）$0.78/立方英尺，旺季（10-12月）$2.40/立方英尺；大件非旺季$1.40/立方英尺（注：此处与官方页面"大件非旺季$0.56"存在出入，另一处文中又写"大件非旺季$0.60，旺季$0.74"，三个数字互相矛盾，说明该博客内部数据不完全一致，写正式内容前必须以 Seller Central 官方页面为准，不要直接引用此文的大件费率）。
  - **计算步骤示例（标准尺寸商品，12"×10"×8"）**：
    1. 立方英尺 = 12×10×8 = 960立方英寸 ÷ 1728 = 0.556立方英尺/件
    2. 100件库存 × 0.556 = 55.6立方英尺总体积
    3. 1月费率：55.6 × $0.78 = $433.70/月
  - **月度仓储费公式**：月度仓储费 = 日均体积（立方英尺）× 月费率；日均体积 = （总体积×存放天数）÷ 当月天数
  - **长期仓储附加费阈值**：存放超过271天（约9个月）触发；271-365天 $5.45/立方英尺，365天以上 $6.90/立方英尺，**在常规月度仓储费之外额外收取**（示例：100立方英尺存280天=$5,450长期附加费+常规月费；100立方英尺存400天=$6,900+常规月费）。
  - **案例**：一家中型厨房电器卖家通过"90天库存周转策略"把月仓储费从$21,000降到$7,800（降幅63%）——可作为攻略里"清库存的紧迫性"部分的说服力素材（具体品牌信息未披露，属于匿名案例，引用时需注明"据该博客披露的匿名案例"）。
  - 文章提到6种降低仓储费20-40%的策略（标题提及但未展开细节）以及第三方工具Nova自身的"库存周转天数追踪/271天预警"功能，工具功能本身不需要照搬，但"临近271天预警"这个功能点子可以作为攻略里"如何自查快到期库存"小节的思路来源。

## FBA Revenue Calculator（Amazon 官方计算器工具，Seller Central）
- 链接: https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index?lang=en_US
- 要点:
  - 这是Amazon官方免费工具，需登录Seller Central使用（抓取时因需要登录未获取到工具内详细字段说明），只能确认其存在且是官方唯一权威计算入口。
  - 内页可以直接引导用户"用官方计算器核对最终数字"，但攻略正文的计算逻辑（公式、费率表）建议参考上面的官方帮助页与本关键词的费率明细，不需要依赖此工具页面本身的文案。

## Storage fee calculation（Amazon Seller Forums 讨论帖，真实卖家账单异常案例）
- 链接: https://sellercentral.amazon.com/seller-forums/discussions/t/29e2a997-d2e8-4d60-865b-c9ecbca6a187
- 要点:
  - 帖子里一位卖家反映：2026年7月被收取约 **$68,748.77** 的FBA月度仓储费，而正常情况下该卖家的月仓储费通常只有约$1,xxx（原文数字被截断，具体对比数值未完全获取）——反映出"仓储费账单异常暴涨"是真实存在的卖家痛点/投诉类型，可以作为攻略里"如何核对账单、发现异常及时申诉"这类内容的引子和真实性佐证。
  - 建议：如果要在攻略中引用这个案例的完整细节（比如异常原因是什么、后续是否得到解决），需要人工访问原帖翻页查看完整讨论串，本次抓取只拿到了首楼摘要。

## Amazon FBA Fee Calculator For Accurate Profit And ROI Insights（Yotpo）
- 链接: https://www.yotpo.com/tools/amazon-fba-calculator
- 要点:
  - 也是"仓储费按季节浮动"的费率复用：非旺季1-9月 $0.78/立方英尺，旺季10-12月 $2.40/立方英尺（与官方一致，可交叉验证）。
  - 计算器的完整输入维度可以作为"自建计算器该收集哪些字段"的参考清单：售价、产品成本、发往Amazon的运费、产品类目（决定推荐费百分比）、包装后尺寸重量（决定履约费+仓储费）、仓储月份/季节、销售税（可选）、预处理费（Prep Fee，注：Amazon已于**2026年1月1日起停止自营FBA预处理服务**，这是个值得在攻略里提一句的时效性信息点）、其他杂费（可选）。
  - 示例输出结构：售价$25 → 扣除产品成本$5、发货$1、推荐费15%即$3.75、履约费（Large Standard档）$4.51、月仓储费$0.04、净利润$10.70、利润率42.79%、ROI 178.28%——这个"从售价到净利润逐项扣减"的展示结构，可以直接作为自建计算器结果页面的UI/数据结构参考。

## Amazon FBA Fees: Full List & FREE Calculator（Jungle Scout）
- 链接: https://www.junglescout.com/resources/articles/amazon-fba-fees
- 要点: 与"amazon fba storage fees"关键词素材文件中的记录重叠（费率变更历史、附加费机制），此处不重复摘录，需要时直接查阅 `amazon-fba-storage-fees.md`。

---

## YouTube 视频素材

### How to Use Amazon FBA Profit Calculator | Every Fee Every Cost Explained 2026 | AMZ Prep
- 链接: https://www.youtube.com/watch?v=jeqFx9ZiOhg
- 发布日期: 2026-04-15
- 观看量: 429
- 整理内容:

这是 AMZ Prep 官方出品的计算器实操演示视频（对应本文件"未深入抓取"清单里提到的 amzprep.com/amazon-fba-profit-margin-calculator 工具），特点是免费、无需注册、覆盖 14 个 Amazon 站点（美国、加拿大、英国、德国、日本、澳大利亚、阿联酋等），并明确标注基于"2026年最新费率结构"。

**计算器的三段式输入结构：** ① Marketplace setup（选择站点及品类——品类会直接决定 referral fee 百分比，演示中选择 Health 类目，referral fee 即时显示为 15%）；② Pricing and costs（售价、采购成本、入库运费、广告花费、预处理费——即"卖出一件之前口袋里流出去的每一块钱"）；③ Product specifics（尺寸重量、月销量、库存周转月数）。

**2026年费率结构的两个值得写进攻略的新信息点：**
1. **新的价格分档规则**：Amazon 在 2026 年引入了三档定价分层——**低于 $10 / $10-$50 / 高于 $50**，不同价格档位对应不同的 FBA fulfillment 费率，计算器会根据输入的售价自动判断分档（演示商品定价 $34.99，落入 $10-$50 档）。
2. **计费按"体积重量"（dimensional weight）而非实际秤重**：示例商品实际重量 1.2 磅，但根据长宽高算出的体积重量是 **1.38 磅**，由于体积重量更高，Amazon 按体积重量计费而非实际重量——计算器会自动识别取较高值，卖家自己核算时容易忽略这一步。

**完整算例（Health 类目，售价 $34.99）：** 产品成本 $8.50/件、入库运费 $1.50/件、广告预算 $2.00/件、预处理费 $0.40/件；尺寸 8×6×4 英寸判定为 large standard 档；月销量 150 件、仓储周期 2 个月、非旺季（未勾选 peak season）。计算结果：**referral fee 全月 $787.27（15%）；FBA fulfillment fee 全月 $813（合每件 $5.42，对应 $10-50 价格档的 large standard 费率）；仓储费全月仅 $26（因为周转快，2个月周期几乎不产生仓储成本）；aged inventory fee = $0（周转速度远未触及超龄门槛）；低价折扣（low price discount）= $0（该商品售价不在 $10 以下的低价档，不适用低价惩罚费）；Amazon 费用总计 $1,626.28/月**。最终net profit $1,762/月，利润率 33.58%（作者认为 20% 以上算健康），ROI 138.21%（即每投入$1成本，净赚约$1.38）。

**信息点：** 视频演示的图表把营收拆成四块——红色（产品成本+预处理费）、蓝色（Amazon各项费用）、黄色（运费+广告费）、绿色（利润）——这个"四色拆分"的可视化结构，可以作为将来自建计算器结果页 UI 的参考。

### Lower these 3 Amazon Costs to SAVE Your Profit Margins!
- 链接: https://www.youtube.com/watch?v=Aqt-7GO4qws
- 发布日期: 2023-05-11
- 观看量: 16926
- 整理内容:

Jungle Scout 出品，聚焦"如何主动降低三项最大头的 Amazon 费用"（fulfillment fee、referral fee、storage fee），示例商品每次卖出大约产生 $7 fulfillment fee、$5 referral fee，以及平均每件 $0.55 的仓储成本。

**降低 Fulfillment Fee 的核心技巧：体积重量优化。** 在 Seller Central 的 Manage Inventory 里点开 FBA Fee 图标可以看到具体计算依据，费率由"产品尺寸档位"和"发货重量（shipping weight）"共同决定，而 shipping weight 取的是"实际单位重量"与"体积重量（dimensional weight）"两者中**较大**的一个（体积重量 = 长×宽×高 ÷ 139）。视频演示：某商品体积重量 3.21 磅，超过其实际单位重量，因此按 3.21 磅计费，落在 large standard 3磅以上档位，被收取 $7.17 + 超出3磅部分每半磅加收 $0.16。**关键发现：只要通过收纳配件合并装箱、减少包装内部空隙（换更薄的填充材料、优化折叠方式、甚至尝试真空压缩包装）、或与供应商沟通缩小外包装尺寸，把体积重量压低到 3 磅以内的下一个费率档位，履约费就能直接从 $7.33 降到 $6.39（省下近 $1/件，且每一单都能省，长期非常可观）**。

**Amazon 计量误差也是一笔隐藏的钱：** Amazon 会定期用 cubic scan 系统重新扫描商品尺寸，如果扫描时激光被遮挡或包装略有变形，测出的尺寸可能偏大，Amazon 会据此上调履约费，且**不会主动通知卖家**。作者提到自己的账户几周前刚因为"用了错误的测量数据"被 Amazon 退回约 **$1,000** 的多收费用。建议做法：定期（如每月）用自己产品的真实尺寸和 Amazon 系统里记录的尺寸做交叉核对，发现不一致可以①开 Seller Support case，走"Fulfillment by Amazon → investigate other FBA issues → confirm or request reimbursement"路径申请退款；②或在搜索栏直接搜"cubic scan"，走系统推荐的"申请重新扫描"流程。

**降低 Referral Fee 的技巧：Brand Referral Bonus Program。** 大多数类目 referral fee 是售价的 15%，但通过站外引流（比如用 Google Ads 把流量导向自己的 Amazon listing，走 Amazon 的 attribution link），成交后 referral fee 可降到 **5%**（作者原话是"降低10%"，即从15%减免10个百分点变成5%），这个折扣同时适用于该顾客在**随后两周内**产生的其他购买。作者提到 Jungle Scout 自己内部测试中，Google 广告引流的营销活动利润率明显高于站内广告——虽然站内广告带来的总销量仍然是站外的至少5倍，但就单次转化的费用效率而言站外引流+该项目更划算。

**降低 Storage Fee 的核心公式：合理控制补货节奏。** 建议只保持能覆盖未来 **60-90 天** 销量的库存水位；计算方法是"过去至少90天的平均每日销量 × 想要维持的天数"，为避免用近期短期波动误导决策，作者建议取样周期不要短于90天。同时给出了"再订货点"（reorder point）计算公式：**re-order point = 当前可用库存天数（=可用件数÷日均销量） − 供应商生产+运输到Amazon仓库的总提前期（lead time）**，一旦低于这个点就要立刻下单，否则会出现断货。作者建议用库存管理软件（如 Jungle Scout Inventory Manager）自动化这套计算，尤其在业务规模变大后靠人工每周手动算容易出错。

---

## Amazon 官方帮助中心补充

### Inline Revenue Calculator（官方页面，正文被登录壳层挡住）
- 链接: https://sellercentral.amazon.com/help/hub/reference/external/G6LN22JJC5USQC32
- 要点: Google 搜索摘要显示这是官方另一个计算器工具（区别于本文件已记录的 FBA Revenue Calculator），摘要原文："Provide your inputs to generate more accurate net proceeds and net profit estimates that include costs such as estimated storage fees, FBA inbound placement..."——说明它是一个"输入商品信息即估算含仓储费+入库分仓费在内的净收益"的工具，具体覆盖字段和使用方式本次未能抓取到（页面正文两次尝试均被登录壳层挡住）。可以在攻略里提一句"Amazon 官方除了 FBA Revenue Calculator，还有一个 Inline Revenue Calculator 工具"，但不建议展开细节，因为没有核实到的正文支撑。
- 已确认现状：Amazon 官方目前没有专门针对"仓储费计算器"这个关键词的独立说明文章（搜索 `site:sellercentral.amazon.com/help` 只能找到工具入口页和费率说明页，没有"计算器怎么用"的专门文档），所以本关键词最扎实的官方信源仍是已有的 Monthly inventory storage fees 费率页（费率数字见 amazon-fba-storage-fees.md），不需要再勉强找新东西凑数。

## 未深入抓取但可作为补充信源
- FBA Fee Calculator（hopstack.io）：https://www.hopstack.io/calculators/fba-fee-calculator — 未抓取，同类第三方计算器工具页，功能定位与Yotpo/AMZPrep类似，非必须去重复看。
- Amazon FBA Calculator 2026: FREE Profit Margin Tool（amzprep.com）：https://amzprep.com/amazon-fba-profit-margin-calculator — 未抓取，同类工具页，标题提及"帮助规避高额仓储费"的计算维度，可作为字段清单的备选交叉验证。
- Estimate fees and costs（Amazon官方 sell.amazon.com/pricing/estimate）：https://sell.amazon.com/pricing/estimate — 未深入抓取，是Amazon官方面向"考虑入驻"新卖家的费用预估工具入口页，非在售卖家专用的详细计算器，仅作为官方信源背书用途。
