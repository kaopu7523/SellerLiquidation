# amazon liquidation program

## FBA Liquidations（官方帮助中心）
- 链接: https://sellercentral.amazon.com/help/hub/reference/external/GYVCG5Q3BEJ6MLMF?locale=en-US
- 要点:
  - 卖家提交清算订单后，Amazon 会尝试撮合一个"清算商"（liquidator）来收购这批库存；清算商是 Amazon 签约的第三方，负责把库存转卖给电商或线下零售等其他渠道——**不能转回给卖家，也不能直接放回 Amazon 上重新销售**（受合同限制）。
  - **毛回收价（gross recovery value）通常是产品价值的 5%~10%**。提交订单前无法预览具体回收金额。
  - Amazon 收到清算商付款后（约提交订单后 60-90 天），净回收价（net recovery value）会显示在卖家 Payments 页面。
  - 提交清算订单后库存状态变为 Pending，一旦状态变化（进入清算流程）就不再计入仓储量，对 **IPI 分数**是利好（滞销库存本身会拖累 IPI，清算掉能改善）。
  - 提交清算订单和库存变为 reserved 状态之间有一个短暂窗口期，这期间如果该库存被用来履行了正常客户订单，卖家拿到的是**正常销售收入**而不是清算款（即：不会重复扣）。
  - 清算掉的 ASIN 不受"自行退回库存后重新入库"的某些限制（清算库存的限制规则和卖家自己退货入库不是一回事）。
  - 除清算项目外，卖家还可以把滞销/退货库存放进 **Amazon Outlet** 来获取回收价值（另一个变现选项，值得单独查证做成一篇内页）。

## FBA Liquidations program terms and conditions（官方条款页）
- 链接: https://sellercentral.amazon.com/gp/help/external/G201507460
- 要点:
  - 参与需 Amazon 批准，且 Amazon 可随时调整准入资格标准。
  - 只有"Eligible Items"（符合资格的商品）能提交清算，且**提交后不可取消**，同一件商品不能重复提交清算请求。
  - Amazon 会在提交后 **30 天内（"Liquidation Facilitation Period"）**尝试撮合买家；
    - 找到买家：买家付款后 **60 天内**打款给卖家账户；
    - 没找到买家：库存会退回卖家库存，卖家可以选择付费让 Amazon 处置（disposal）或付费把货退回自己手上。
  - Amazon 在此项目中只是"撮合方"，**既不是买方也不是卖方**，也不保证一定能卖出去、也不保证卖出价格。
  - 卖家需支付清算服务费（见帮助页费用表）。
  - **仓储费影响**：提交清算请求当天起，该商品的月度仓储费和 aged-inventory 附加费**立即停止计算**；但如果 30 天内没找到买家、库存被退回，仓储费会**重新开始累积**，直到该库存被处置或卖家自行移出仓库。

## FBA Liquidations 具体费率（来自 Amazon Seller Forums 官方帖 + Revstep 转述）
- 链接: https://sellercentral.amazon.com/seller-forums/discussions/t/7baf9138523e2e98ec8eb5f91875dd80
- 要点:
  - 毛回收价 = 约 **5%-10% 的产品平均售价（ASP）**，回收率是基于美国市场签约清算商费率的估算值，是"扣费前"的毛值。
  - 适用范围广：overstock（超额库存）和 customer-returned（客户退货）库存都可以，包括被判定为 "Unsellable" 的商品，以及闲置在 Return Centers / Outbound Fulfillment Centers 的库存都符合资格。
  - **不符合资格**：危险品（hazardous items）、假货（counterfeit）。
  - 具体两项费用：
    - **Processing fee**：按商品尺寸重量计，标准尺寸约 **$0.25–$0.40+**，超大/特殊处理约 **$0.60–$1.90+**；
    - **Referral fee**：**毛回收价的 15%**（Revstep 文章提到区间是 15%-17%，可能因品类/时间有浮动，写文章时建议以官方帮助页最新数据为准）。
  - 净回收价约在提交后 **60-90 天**内到账。
  - 开启方式：在 Seller Central 的 Automated removal settings 里把清算设为首选移除方式，可随时修改。
  - **风险提示（来自卖家真实讨论）**：清算商买到货后，理论上可以合法地拿你的品牌商品去"抢"你自己的 listing——如果买家是转售商，可能不在乎商品是否有瑕疵，容易带来差评风险。这是清算项目一个常被忽略的隐性成本，值得单独在文章里提醒。

## 2025 政策变化 — FBA Liquidations 变为默认选项（My Amazon Guy）
- 链接: https://myamazonguy.com/news/fba-liquidations-and-donations
- 要点:
  - **2025 年 9 月 30 日**生效：如果卖家没有主动配置 Automated unfulfillable settings，账户会被**自动加入 Liquidations 项目**（之前需要手动开启）。
  - 卖家仍可以通过主动设置其他选项（比如让库存退回自己手上）来避免被自动加入清算。
  - 同批政策还包含 **FBA Donations 项目变为强制**（不再允许卖家退出捐赠项目，此前退出过的账户也会被重新强制加入）——这一点和"amazon liquidation program"关键词关系较弱，但和"donations"关键词强相关，两篇文章可以互相引用这个 2025-09-30 的时间节点。
  - 两个项目的费用结构本身没有变化，变的是"默认是否参与"。
  - 文章判断：这本质是"Amazon 把可持续发展目标的成本转嫁给卖家"，对卖家来说是现金流和控制权的损失。

## 5 Best Options to Quickly Liquidate Amazon Inventory（SPS Commerce）
- 链接: https://www.spscommerce.com/community/articles/liquidate-amazon-inventory
- 要点:
  - 除官方清算项目外还提到 **Back-Track、Returns Worldwide** 等第三方清算项目名称（可作为"渠道"类关键词页面的延伸调研线索）。
  - 明确指出走 Amazon 官方 FBA Liquidations 的成本构成：**referral fee 15% + 按重量/尺寸计的 processing fee**，跟前面官方数据一致，可交叉验证。
  - 对比提到：走 **Removal Order（移除库存）比走 FBA Liquidations 项目贵约两倍**（"fees are typically twice as high to remove a product than to liquidate"）——这是一个很好的"为什么选清算而不是移除"的量化论据。
  - 建议卖家在决定前先算清楚 liquidation / Amazon Outlet / removal 三条路径的成本对比。

## Should I Liquidate, Remove, or Dispose?（Revstep 博客，含真实案例）
- 链接: https://revstep.com/us/amazon-inventory-should-i-liquidate-remove-or-dispose
- 要点:
  - 真实案例：卖家 2000 件低价、多尺码颜色的服装库存，移除/处置成本约 **$600**，而如果走清算，至少能拿回一部分净回收价而不是净支出——用真实数字对比了三条路径的现金流差异，适合做成案例引用。
  - 另一个真实案例：40 pallets 的季节性电风扇（单 SKU），移除后等到春天再入库反而**扣除移除费后仍然盈利**——说明"要不要清算"没有统一答案，取决于品类季节性和单价。
  - Net recovery value 计算依据：卖家销售历史、该 ASIN 在 FBA 上的平均售价、该 ASIN 的销售历史。
  - **重要限制**：Amazon 对可参与清算的商品设有**最低 ASP（平均售价）门槛**，目的是保证扣完费用后清算对卖家仍是正收益——这意味着极低客单价的商品可能根本没资格走清算，这是文章里容易被忽略但很实用的一点。

---
未成功读取（记录以免重复调研）：LinkedIn 上关于强制捐赠政策的帖子（`linkedin.com/posts/ravijaipaul...`）搜索到但未抓取，内容与 My Amazon Guy 文章高度重叠，暂判断非必需来源。

---

## Amazon 官方帮助中心补充

### Value-recovery services（Amazon Seller Central 官方页面）
- 链接: https://sellercentral.amazon.com/help/hub/reference/external/GBEP5S4XFH4RPZLF
- 要点:
  - 官方原文明确把 **FBA Liquidations 定位为多个"价值回收服务"之一**，同一体系里还有三个平行选项，写"清算值不值"这篇文章时应该一起提及做对比，而不是只讲清算：
    1. **Amazon Outlet**：把清算之外的另一条回收路径——把商品做成 Outlet 折扣活动（在 FBA Inventory 工具里可以看到 Outlet 推荐），可以提升动销率、改善现金流、降低总仓储费。
    2. **Refurbishment（翻新服务）**：针对"包装损坏但商品本身可售"的退货，Amazon 提供重新打胶带/贴标/装箱服务；鞋服类还包括蒸汽除味除渍。翻新是可选服务，可在 Automated unfulfillable settings 里开关。
    3. **FBA Grade and Resell**：允许把不可售库存以"**Used**"身份重新上架销售（卖家仍是 seller of record，自己定价管理），Amazon 负责验货分级，分为四个成色等级：**Used–Like New / Used–Very Good / Used–Good / Used–Acceptable**。重新上架时收取一次性 processing fee，若被判定为"Unsellable"则不收费。支持电子产品、手表、珠宝、行李箱、鞋服等品类。**不保证每件退货都能进入该项目**，需符合品类、成色、商品类型、最低价格门槛等资格条件，不符合的走常规不可售库存流程（清算/捐赠/移除/退回）。
  - **FBA Liquidations 官方原话确认回收率**："gross recovery value, which is about 5% to 10% of its average selling price (ASP)"——与之前多个信源交叉验证一致。

### Automated fulfillable inventory removal（Amazon Seller Central 官方页面，解释库存何时被自动扫入清算/处置流程）
- 链接: https://sellercentral.amazon.com/help/hub/reference/external/GDAET8WDZBB2GFHY
- 要点:
  - **三个关键时间节点**（写文章时非常适合做成时间轴图）：
    - **180 天**：开始计超龄库存附加费（aged inventory surcharge）。
    - **270 天**：如果卖家没有主动配置 Automated fulfillable inventory settings（或已禁用），Amazon 会**强制**对超过 270 天的可售库存执行自动移除（return/liquidate/dispose 三选一，取决于卖家设置）。
    - **365 天**：无论是否配置了自动设置，超过 365 天的可售库存**必定**会被 Amazon 自动 return/liquidate/dispose。另外，连续 6 个月以上零销量、且入库超过 180 天的 ASIN 也会被自动移除。
  - 卖家可以自定义移除时间窗口（1-12 个月），在超龄附加费产生之前主动处理。
  - **默认是"opted in"**（自动加入该服务），可在 Fulfillment by Amazon Settings → Automated fulfillable inventory settings → Edit 里禁用，也可以分别单独关闭两项自动移除服务中的一项。
  - 自动移除的默认处置方式：**如果卖家填了退货地址，默认退回卖家**；如果没配置清算或选择退出，且没填退货地址，则**默认捐赠/回收/处置**。
  - 官方 FAQ 明确一条实用技巧：想避免超龄附加费或强制移除，可以用 **Amazon Outlet** 设置至少 **20% 折扣**的促销活动来提升动销率，而不是被动等着被自动清算/移除。

## 该文件其余内容判断
现有内容（FBA Liquidations 官方页/条款页/费率/2025 政策变化/第三方对比文章）已经比较完整地覆盖了清算项目的运作机制、费率、时间节点和风险提示，本轮只做官方信息补充，未发现需要替换或纠正的内容。

---

## YouTube 视频素材

### How To Liquidate Amazon FBA Inventory and Recover CASH
- 链接: https://www.youtube.com/watch?v=XikkCRaVo_Y
- 发布日期: 2024-08-04
- 观看量: 3744
- 整理内容:

**What liquidation actually is, and why sellers use it.** Liquidation means selling off inventory at a reduced price to recover some of the original investment — it is not a profit strategy, and in most cases it won't even cover the manufacturing cost. Sellers typically turn to it for one of five reasons: overstock that isn't moving fast enough, inventory approaching long-term storage fees (LTSF), seasonal products past their selling window, consistently poor sales performance on a SKU, or a shift in consumer demand that killed a previously-good seller. Holding onto dead stock instead of liquidating ties up capital and risks the much higher long-term storage fee tier, which can erase whatever margin was left.

**Finding what needs to go.** The most useful report for this is the Aged Inventory Surcharge report under Fulfillment reports — it lists every SKU with a snapshot date, quantity charged, amount charged, and the specific age-tier rate. As a worked example from a real seller account: one SKU had 449 units sitting in the 181–210 day tier, costing about $6/month in LTSF; another SKU had only 117 units but they'd aged past 300 days, costing $62/month on that one SKU alone. Across the whole account, total long-term storage fees added up to roughly $260/month. The Inventory Health dashboard and standard Business/Sales/Storage-fee reports cover similar ground but the Aged Inventory Surcharge report is the fastest way to see exactly which SKUs are bleeding money and for how long they've been sitting.

**How to actually liquidate through Amazon.** Create a removal order and choose "Liquidations" as the removal method (the other options being "Return to address" or "Dispose"). Sellers can also set Automatic Removal Settings so inventory past a chosen age threshold (e.g., 300 days) gets auto-liquidated, auto-returned, or auto-disposed without manual review each time. Amazon's liquidation partner buys eligible inventory for roughly **5–10% of average selling price**, and payment lands in the seller's account **60–90 days** after the order is submitted. Two fees apply on top of the liquidator's payout: a **liquidations referral fee of 15%** of the gross recovery value, and a **liquidations processing fee** based on the item's size/weight tier.

**Worked fee example from the video.** A $20 iPad case with a contracted liquidator rate of 7.5% produces a gross recovery value of $1.50. Amazon takes a 15% referral fee (≈$0.23) plus a processing fee (≈$0.25), leaving the seller with about **$1.02 net per unit** — so liquidating 100 units nets roughly $100–102, against however much those units originally cost to manufacture.

**Alternatives beyond Amazon's own program.** Third-party liquidation marketplaces like Liquidation.com and B-Stock exist, but they generally require bulk quantities (hundreds/thousands of units) to be worth using — not practical for liquidating 20–50 units. Another route is a plain removal order back to the seller's own address, then reselling through eBay, Facebook Marketplace, local trade shows, popup shops, or garage sales; the video's host specifically calls out renting booths at local trade shows as a way to recover meaningfully more than Amazon's own liquidation payout. Donating the inventory for a tax write-off is mentioned as a further alternative to outright liquidation.

### Enrollment changes for Amazon FBA Liquidations and Donations programs
- 链接: https://www.youtube.com/watch?v=awR2KO7cRTY
- 发布日期: 2026-02-14
- 观看量: 47
- 整理内容:

**Donations became mandatory — no more opt-out.** As of **September 30, 2025**, Amazon made the FBA Donations program mandatory for eligible unsellable, returned, or overstock inventory: sellers can no longer opt out, and anyone who had previously opted out was automatically re-enrolled. Practically, this means inventory that used to be disposed of (recycled/destroyed) by default is now donated instead — the seller effectively gives away the product (and, the video argues, some of its associated intellectual property) rather than having it destroyed.

**Who receives the donations, and what sellers get back.** Eligible product goes to charities selected through Amazon's US donation program partner, **Good 360**, which decides final placement — the video's host notes there's limited visibility into exactly where products end up beyond that. In exchange, sellers become eligible to receive **donation certificates, issued annually by February 1st** via the nonprofit partners, which can potentially be used as a tax write-off. Products that are **not** eligible for donation — counterfeit or hazardous items — are still disposed of (or potentially routed to liquidation) rather than donated.

**Liquidations is now the default removal option, not just an available one.** Separately from the donation change, Amazon has made **FBA Liquidations the default setting** for unsold/excess inventory — it's not framed as strictly mandatory, but sellers now have to actively dig into their removal-order settings to turn it off if they don't want inventory auto-liquidated. Under this default, unsold inventory gets automatically routed into liquidation and the seller recovers some cash back (per the standard 5–10%-style liquidation payout), rather than having it returned or disposed by default.

**Where liquidated inventory resurfaces.** The liquidated stock gets resold to third parties who then resell it again — the video points to Amazon's own bulk-liquidations contact channel as one place buyers can inquire about purchasing these lots, and shows examples of liquidated listings (including a damaged pet-product pallet listed for roughly $4,000) to illustrate how wide the pricing and item-condition range can be on these lots. The host's practical takeaway: go into FBA settings now and decide deliberately whether to keep the new defaults (mandatory donation + default-on liquidation) or adjust removal-order settings, rather than being auto-enrolled into both without realizing it.
