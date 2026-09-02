# amazon aged inventory surcharge

## Aged inventory surcharge report（Amazon Seller Central 官方页面）
- 链接: https://sellercentral.amazon.com/help/hub/reference/external/200725880?locale=en-US
- 要点:
  - 超龄库存附加费（aged inventory surcharge）按"在 Amazon 仓库中存放超过180天的库存总体积（立方英尺）"计费。
  - 计算公式：单SKU收费金额 = 附加费率（rate-surcharge）× 收费数量（qty-charged）；rate-surcharge = 单位体积（per-unit-volume）× 对应年龄档位的附加费率。
  - 附加费率按"超龄档位"（surcharge-age-tier）分档，具体档位见下方"2026新费率"来源。
  - 报表字段包括：评估日期（snapshot-date，例：2023-04-15）、SKU、FNSKU、ASIN、商品名、新旧状态、收费数量、单位体积、收费金额、体积单位、国家、超龄档位、附加费率。
  - 可下载报表，将 amount-charged 列求和得到该周期总超龄附加费。

## ⚠️ AVOID Costly Fees: Aging Inventory Action Plan（Amazon Seller Forums，2026年2月帖，最新费率）
- 链接: https://sellercentral.amazon.com/seller-forums/discussions/t/85f60e98-f93c-48fe-bee7-07917616f827
- 要点:
  - **2026年1月16日起生效的最新费率结构**（按立方英尺计，服装/鞋类/箱包/珠宝/手表除外）：
    - 181-210天：$0.50/立方英尺
    - 211-240天：$1.00/立方英尺
    - 241-270天：$1.50/立方英尺
    - 271-300天：$5.45/立方英尺
    - 301-330天：$5.70/立方英尺
    - 331-365天：$5.90/立方英尺
    - 366-455天：$6.90/立方英尺 或 $0.30/件（取较高者）
    - 456天以上：$7.90/立方英尺 或 $0.35/件（取较高者）
  - 每月15日做库存快照评估，18-22日之间实际扣费，**在常规月度仓储费之外额外收取**。
  - 超龄库存会拖累 IPI 分数，进而影响可发往FBA的库存容量上限（storage limits）。
  - **应对策略**：
    1. 通过 Amazon Outlet 促销清库存（要求至少20%折扣）
    2. 在每月"清库存截止日"（inventory cleanup date）前提交移除/处置订单，可避免该批次被计入超龄附加费（即使实物尚未搬离仓库，只要订单已提交即可豁免）
    3. 可用 FBA Inventory 工具筛选"未来60天内即将触发181天超龄线"的ASIN，提前规划
    4. 可设置"自动移除"（automated removal）：入口 Settings → Fulfillment by Amazon → Automated fulfillable settings → Edit → 选择 Return 或 Dispose，需提供邮箱（退货还需收货地址）
    5. 自动移除条件示例：可售库存存放超365天，或连续6个月以上未动销且已存放超180天
  - 帖子中有卖家真实吐槽：Amazon 出库不遵循"先进先出"（旧库存优先发货），导致明明有库存在动销、新货也在不断入库，但最老批次（366-455天档）库存仍滞留仓库持续产生附加费，卖家认为自己无法控制Amazon的发货逻辑却要为此买单——这是一个很有共鸣的痛点素材，可用于内页/FAQ里回应"为什么明明在卖但还是被扣超龄费"。

## Amazon Aged Inventory: Overview for Sellers（SellerApp）
- 链接: https://www.sellerapp.com/blog/amazon-aged-inventory-what-you-need-to-know
- 要点:
  - "库存老化/超龄库存"（inventory aging）曾被称为"长期仓储费"（long-term storage fee）。
  - 超龄库存除了产生附加费，还会拖累销售排名（sales rank）和 IPI 分数。
  - 收费时间：每月固定在**18日-22日之间**扣款（基于每月15日的快照）。
  - 提交移除/处置订单的**截止时间是每月14日23:59（太平洋时间）**——在此之前提交即可避免当期被计入超龄附加费，即使货物尚未实际搬离仓库。
  - 文中给出了**两版费率表**（存在版本差异，注意甄别）：
    - 较旧版本（可能是2025年中前费率）：271-300天 $3.80/立方英尺，301-330天 $4.00，331-365天 $4.20，365天以上 $6.90/立方英尺 或 $0.15/件取高者
    - 较新版本（与上方2026年论坛帖一致）：271-300天 $5.45，301-330天 $5.70，331-365天 $5.90，365天以上同样 $6.90/立方英尺 或 $0.15/件取高者（注：此处每件金额与论坛帖$0.30/件不同，两个信源在"每件"数值上有出入，写正式内容前建议以当前 Seller Central 实时页面为准核实）
    - 181-210天 $0.50，211-240天 $1.00，241-270天 $1.50（两版一致）
  - **6个减少库存老化的策略**（标题列出但正文未完全展开，仅供选题参考）：文章结构包含"6 Effective Strategies to Fix Inventory Aging on Amazon"一节，说明库存老化会同时影响IPI评分和利润，需要持续管理补货节奏（受生产周期、运输时长、仓库处理时间等因素制约，动态平衡较难）。

## How to Check for Aged Inventory Surcharge Fees on Amazon（betterworldproducts.org）
- 链接: https://www.betterworldproducts.org/check-aged-inventory-surcharge-fees
- 要点:
  - 该费用最早于2023年初推出，2024年上调，此前称为"长期仓储费"。
  - **计费逻辑是全网先进先出（FIFO）**：不管实际发出的是哪个具体批次的货，系统都按"库存中最老的批次"来扣减和计费——哪怕刚到仓的新货被拣选发出，扣减的仍是账面上最老的库存记录。这个FIFO细节是理解"为什么感觉在卖新货却还在扣老库存的钱"的关键机制，值得写进攻略里。
  - 费用基于每月15日的库存快照评估，在常规月度仓储费之外**另行收取**。
  - **在 Seller Central 查看步骤（方式一，仪表盘）**：汉堡菜单 → Inventory → Dashboard → 下滑找到 "Estimated Aged Inventory Surcharge" 板块，可查看超龄件数及存放天数；点击 "Reduce estimated aged inventory surcharge" 跳转到 FBA inventory 页查看逐商品的预估费用明细。
  - **查看步骤（方式二，报表）**：汉堡菜单 → Reports → Fulfillment → Payment 区域 → Show more → Aged Inventory Surcharge Report → 可在线查看或下载指定月份的Excel报表。

---

## YouTube 视频素材

### Amazon FBA Storage Fees, Aged Inventory Surcharges, Inbound Shipping, & Placement Fees Explained
- 链接: https://www.youtube.com/watch?v=J02GSwuIf2k
- 发布日期: 2026-03-30
- 观看量: 151
- 整理内容:

**开篇真实案例：为什么理解这些费用很重要。** 作者讲了一个真实客户案例：某品牌为新品上市备了大量货发进 Amazon 仓库，结果产品上架后发现根本不适合 Amazon 这个渠道，销量始终没起来，大部分库存就一直滞留在仓库里。一开始只是按月付常规仓储费，但随着时间推移库存超过 6 个月大关，开始被加收超龄库存附加费（aged inventory surcharge，也就是俗称的 long-term storage fee）。到最后这个品牌陷入两难：要么继续留在 Amazon 承受不断攀升的仓储费，要么申请移除库存——算下来移除库存反而是"更便宜的选项"，但即便如此，光是把这批货从 Amazon 仓库移出就花了约 **$100,000**。作者由此总结 FBA 的一个核心规律：把货发进 Amazon 很便宜，但把货退出来、或者让它在仓库躺超过 6 个月，代价极其高昂。

**入库运费（inbound shipping cost）。** 与"配送给顾客"的 fulfillment fee 不同，这是"把库存从供应商/自己仓库运进 Amazon 仓库"产生的运费，受商品尺寸重量、单次发货数量、装箱方式、目标仓库位置、运输方式等因素影响，每次发货成本都会有所不同。可选 small parcel（UPS 等快递按箱发）或 LTL（零担卡车运输，货物打托后走货运）。小批量通常 small parcel 更便宜，批量大了以后改用 LTL 托盘运输更划算。多数小件产品的入库运费大致在每件 **$0.10-$0.50** 区间，越大越重的产品成本越高。

**入库分仓费（inbound placement fees）。** 创建发货计划时，Amazon 会决定把库存拆分到其网络中的哪些仓库，这个费用就是 Amazon 为"帮你把库存重新分布到全国网络"收取的成本，其存在意义是让库存更靠近买家（这对搜索排名和配送速度都有好处）。规则很直接：**发货拆分到 4 个及以上仓库 = 不收 placement fee；拆到 2-3 个仓库 = 收部分费用（拆 2 个仓库比拆 3 个仓库的单件费率更高）；全部发到 1 个仓库 = 收取全额 placement fee**。费用高低还取决于商品尺寸重量、以及目标仓库地理位置（发往西部仓库通常比东部仓库贵）。小批量发货时 Amazon 可能给不出"拆 4 仓以上"的选项，导致 placement fee 难以完全规避；发货规模变大、多个 SKU 合并发货后，可选方案变多，规避这笔费用也就容易得多。

**仓储费（storage fees）与超龄库存附加费的完整费率表。** 常规仓储费按商品占用的立方英尺空间、以及在仓库中停留的月份平均值来计费，与重量无关。当前费率：标准尺寸商品 **$0.78/立方英尺**，超大件（oversized）**$0.56/立方英尺**；这个费率在 Q4（10-12月）会**涨到三倍**，因为节日季仓库需求暴增（不过 Q4 通常销量也更高，一定程度上能抵消）。超龄库存附加费方面，视频给出的费率梯度为：**181-270天：$0.50/立方英尺；271-days 后跳到 $1.00，再到 $1.50；271天（9个月）处有一次巨大跳涨，从 $1.50 直接跳到 $5.45/立方英尺；此后持续上涨，15个月时封顶在 $7.90/立方英尺**（注：这组数字与本文件中官方/论坛信源的费率表在具体天数分档上略有出入，尤其"271天跳涨到$5.45"与官方"271-300天$5.45"一致，但更早期的分档描述不完全对齐，写作时建议以 Seller Central 官方费率表为准，此处仅作为"跳涨幅度极大"的佐证）。

**给卖家的实操建议：** ① 只发未来 3-4 个月内能实际卖完的库存量，宁可发少也不要发多；②如果库存量判断不准，"发少了"是更容易纠正的错误（可以随时补发），"发多了"则会一路承受不断攀升的附加费；③可以考虑把大部分库存放在费率更友好的第三方仓（3PL）或海外仓，只在 Amazon FBA 里保持 2-4 个月的周转库存，按需小批量、高频次地往 Amazon 补货；④ Amazon 自己也有一个针对长期仓储场景的替代方案叫 **Amazon AWD**，可以作为备选。

### Where to Find Aged Inventory in Amazon Seller Central | How to avoid Amazon Aged Inventory Surcharge
- 链接: https://www.youtube.com/watch?v=Yr4_JCq27Bg
- 发布日期: 2025-08-29
- 观看量: 301
- 整理内容:

**基本机制。** 超龄库存附加费（此前叫 long-term storage fee）是在常规月度仓储费之外，针对"在 FBA 仓库停留超过特定天数"的库存**额外**加收的月度费用，目的是逼卖家保持库存周转、不要把 Amazon 仓库当长期仓储空间用。起算门槛是 **180 天**：超过 180 天后，除了正常仓储费还要额外交这笔附加费。视频给出的费率区间：**180-270 天**档位通常在 **$0.50-$0.69/立方英尺，或 $0.15/件（取两者中较高的一个）**；超过 **271 天**费率开始上升，到 **365 天以上**费率显著更高；超过 **730 天（2年）**，最高可能要付到 **$15/立方英尺/月**，直到卖出或移除为止。**例外类目**：服装、鞋类、珠宝、手表这几个类目不收超龄库存附加费；电子产品、家居用品、厨具、玩具等大多数类目都适用。

**举例计算。** 假设 120 件商品占用 15 立方英尺仓储空间，若适用费率为 $6/立方英尺，则该月附加费约为 **$90**；若改用"每件 $0.15"计算则是 **$18**——因为 Amazon 取两者中较高值，所以最终按 **$90** 收取。

**如何在 Seller Central 查询：** 方式一，进入 Inventory → FBA Inventory Dashboard，页面会显示各库存按"停留天数区间"（如 181-210天、365天以上等）分组的件数，以及每组对应的预估超龄附加费金额，还可以按天数区间筛选（如单独筛出 181-330 天或 365天以上的 ASIN）。视频示例中某 ASIN 有 90 件落在超龄区间，对应预估费用 **$39.76**。方式二，进入 Reports → Fulfillment → Payment 分类下的 "Aged Inventory Surcharge" 报表，可选择月份（示例选了 2025年7月），生成后可在线查看或下载 CSV，通常 2-3 分钟生成完毕。

**规避建议：** ①定期（建议按月）检查库存库龄报表，标记出接近 180 天的 SKU，不要等 Amazon 已经扣费才处理；②对滞销库存可尝试限时降价、发优惠券、或用 Prime 专属折扣提升搜索排名和转化；③使用 Amazon 的 **Outlet Deals** 项目，把滞销库存以折扣价卖给专门找折扣的顾客群；④把滞销品和畅销品打包成组合装一起卖；⑤如果确定卖不完了，可以提交移除订单（removal order，退回给自己或直接销毁）——虽然移除有成本，但通常比持续付几个月附加费划算；⑥Amazon 也提供**清算服务（liquidation）**，能拿回商品价值的一小部分，虽不如直接卖给顾客划算，但通常好过持续被扣附加费。

**常见问题解答：** 超龄附加费是否替代常规仓储费？不是，是在常规仓储费之上**额外**收取。移除/处置订单能否立刻停止扣费？能，Amazon 处理完移除后当月即不再计费。超龄费能否退款？一般不能，除非是 Amazon 自己计费出错。

**小案例：** 某卖家有 300+ 件季节性商品滞留 210 天，每月被收约 **$420** 超龄附加费；通过打 PPC 广告配合 20% 折扣和优惠券标签，3 周内清空库存，不仅省下了后续的附加费，还额外回收了本该"卡在费用里"的资金。

---

## Amazon 官方帮助中心补充

### 交叉验证：15个月以上档位费率
- 链接: https://sellercentral.amazon.com/help/hub/reference/external/G201411300
- 要点: 该官方页面（"2026 US Referral and FBA fee changes summary"）的 Google 搜索摘要片段确认："Items aged over 15 months will incur monthly aged inventory fees of $0.35 per unit or $7.90 per cubic feet, whichever is greater."——与本文件已记录的"456天以上：$7.90/立方英尺 或 $0.35/件（取较高者）"完全一致，可作为官方交叉验证，之前论坛帖来源里出现的$0.30/件属于不同信源的出入数字，此处以官方页面$0.35/件为准。本次尝试完整抓取该页面正文被登录壳层挡住，只拿到搜索摘要，未获取更多细节。

### 其他相关官方页面（本次仅拿到标题/摘要，正文被登录壳层挡住，未采用具体内容）
- Fee and Economics Preview report（G Q N V D V 4 6 U 9 J Q 2 5 H Y）：摘要确认"Aged inventory surcharge (previously known as the long-term storage fee) is charged on inventory units stored in Amazon fulfillment network for 181 days and..."——与本文件已有的"曾用名 long-term storage fee"说法一致。
- FBA Inventory report（GKT9YKCHXMSDVJKB）：摘要确认"The estimated aged inventory surcharge amount for units that have been in fulfillment centers for 181 to 210 days on the next charge date."——与本文件181-210天档位说法一致。
- Automated fulfillable inventory removal（GDAET8WDZBB2GFHY）：摘要提示"Inventory that has been in a fulfillment center for 181 to 365 days will still be subject to the 181-365 day aged inventory surcharge. To avoid this..."——补充了一个细节：即使设置了自动移除，181-365天区间的库存在移除生效前仍会先被计入一次附加费，写作时可以提醒卖家不要误以为"设置了自动移除就完全免疫"。

## 未深入抓取但可作为补充信源
- I am so confused with Amazon inventory surcharges（Reddit）：https://www.reddit.com/r/FulfillmentByAmazon/comments/1lg92j1/i_am_so_confused_with_amazon_inventory_surcharges — 抓取被 Reddit 反爬虫验证拦截，未获取真实评论。搜索结果摘要显示核心答案是"附加费从180+天起算，不是90天，随时间推移逐级涨价"，与官方费率表一致，暂不需要额外抓取。
- Amazon Implements Surcharge on Aged Inventory Starting May 15th（spscommerce.com）：https://www.spscommerce.com/community/articles/amz-implements-surcharge-on-aged-inventory-starting-may-15th — 内容偏历史时效性（某次费率变更公告），未抓取正文，如需引用建议核实是否为最新版本。
- Amazon Aged Inventory Surcharge Killing Sellers Silently（nivoads.com）：https://nivoads.com/blog/amazon-aged-inventory-surcharge — 未抓取，属于营销博客型内容，可作为标题/角度参考（"附加费在悄悄侵蚀卖家利润"这个切入角度可以借鉴）。
- Amazon Aged-Inventory Surcharge 2026, Explained（inventoryhero.ai）：https://www.inventoryhero.ai/guides/amazon-aged-inventory-surcharge-2026 — 未抓取，标题显示是2026版解读，可作为费率交叉验证的备选信源。
