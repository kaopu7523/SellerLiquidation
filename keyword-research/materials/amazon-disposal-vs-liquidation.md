# amazon disposal vs liquidation

## Overview - Removals, Disposal & Liquidations（SoStocked 知识库，最核心的对比来源）
- 链接: https://help.sostocked.com/article/279-removals-disposal-liquidations
- 要点:
  - **Liquidation（清算）**
    - 运作方式：Amazon 帮你找清算商，清算商买断库存，Amazon 抽走一部分毛回收价 + 收取 processing fee。
    - 优点：通常能拿回一点现金；避免超额仓储费；不用自己操心库存怎么处理。
    - 缺点：清算商理论上可以**合法地拿你的清算商品去抢占你自己的 listing**；不是所有商品都符合资格；不一定能找到买家；有时**综合成本比回收价还高，等于倒贴**；清算后 **90 天内 Amazon 不允许该 ASIN 再新入库**。
    - 建议：如果只清算部分库存，建议保留约 **120 天**的库存作为缓冲，直到 90 天禁止入库期结束后再补货。
  - **Disposal（销毁/处置）**
    - 运作方式：Amazon 直接帮你处理掉库存。
    - 优点：避免超额仓储费；不用自己存货。
    - 缺点：**销毁费用往往比继续缴纳 aged fee 还贵**；美国境内销毁费用是固定价（不像欧盟因起止点不同而浮动）；**Amazon 不一定真的销毁**，处置后的商品有时也会像清算一样流出到市场上（等同承担和清算类似的"转卖风险"，只是风险等级更低）。
    - 建议：如果商品不符合清算资格，销毁可以作为备选；欧盟卖家由于移除费（removal）价格因起止点浮动大，有时销毁反而比移除更便宜。
  - **Removal（移除，退回卖家自己手上）**：
    - 需要自己承担收货、分拣、转售的人力成本。
    - 建议：做决策时把移除费、人工、退货运费等额外成本都算进去。
  - **Donation（捐赠，美国卖家专属）**：
    - FBA Donations 项目允许美国卖家把不想要的库存捐给指定慈善机构，参与后可获得**捐赠凭证（donation certificates）**用于报税抵扣，凭证上会写明捐赠商品的数量和描述。
    - 适用场景：退货商品、需要翻新/分级转售的商品、原本要走清算的商品都可以改走捐赠。
    - 默认已自动加入（Default Enrollment），需要手动去 Seller Central 设置里 opt-out 才能退出。
    - 缺点：如果商品能在别处以更高价卖掉，走捐赠等于放弃了这部分利润；不是所有商品都符合捐赠资格；**销毁费仍然照常收取**（捐赠不等于免费）。
    - 建议：认真评估捐赠的税务抵扣价值是否**超过清算能拿到的净回收价**，值得咨询税务顾问确认具体抵税规则和额度（这是文章里反复强调但没给出具体数字的一点，写文章时要么找到具体 IRS 规则来源，要么明确写"建议咨询税务顾问"，不要编造抵税比例）。
  - **共同风险提示（Reseller Risk）**：只要库存脱离了卖家自己的掌控（清算、捐赠转卖等），拿到你品牌商品的下游商家理论上就有权合法地在你自己的 Amazon listing 下面转卖，这是清算/捐赠/处置三条路径共有的隐性风险，值得在对比文章里统一提示一次。

## Should I Liquidate, Remove, or Dispose?（Revstep，真实案例对比）
- 链接: https://revstep.com/us/amazon-inventory-should-i-liquidate-remove-or-dispose
- 要点:（与"amazon liquidation program"素材文件重复引用，核心结论）
  - 移除费和处置费**成本相同**（"The cost for removal is the same cost as disposal"）。
  - 决策核心逻辑：低值/难以二次销售 → 优先考虑处置或清算；高值/可翻新转售 → 优先考虑移除后自行处理。
  - 没有统一答案，取决于品类、季节性、单价、库存量。

## How to Liquidate Amazon Inventory: 8 Proven Ways（Prime Retail Solution）
- 链接: https://primeretailsolution.com/how-to-liquidate-amazon-inventory-8-proven-ways
- 要点:
  - 把"要不要处置/清算"放进一个更大的决策框架里给出经验法则：
    1. **追求速度** → 用 Amazon 官方清算、拍卖式货盘清算、或批量买家渠道；
    2. **追求回收最大化** → 用折扣促销、多渠道分销、或翻新转售；
    3. **商品彻底不可售** → 才走捐赠或处置。
  - 处置/捐赠章节要点：财务回收为零，但捐赠可能有税务优惠（具体优惠幅度因司法辖区而异，文章没给具体数字，同样建议不编造）；这条路径应保留给"过期、淘汰、或已不可售"的商品，而不是还有转售价值的正常滞销库存。

---

## Amazon 官方帮助中心补充（此前该关键词没有官方页面来源，本轮重点补齐）

### 2026 FBA removal, disposal and liquidation order fee changes（Amazon Seller Central 官方页面，含完整费率表）
- 链接: https://sellercentral.amazon.com/help/hub/reference/external/GZ5Q2VW5WF4JWRGC
- 要点:
  - **这是全站最权威的费率数字来源，可以直接解决 `amazon-fba-storage-fees-calculator.md` 里 NovaData 那篇自相矛盾的大件费率问题**——以下数字均为官方原文：
  - **移除/处置费（Removal or disposal fee，2026年1月15日起新费率，标准尺寸档下调，其余不变）**：
    | 尺寸档 | 重量区间 | 2026-01-15前 | 2026-01-15起 |
    |---|---|---|---|
    | 标准尺寸 | 0-0.5 lb | $1.04 | **$0.84** |
    | 标准尺寸 | 0.5-1.0 lb | $1.53 | $1.53 |
    | 标准尺寸 | 1.0-2.0 lb | $2.27 | $2.27 |
    | 标准尺寸 | 2 lb 以上 | $2.89 + $1.06/lb | $2.89 + $1.06/lb |
    | 大件/超大/特殊处理 | 0-1.0 lb | $3.12 | $3.12 |
    | 大件/超大/特殊处理 | 1.0-2.0 lb | $4.30 | $4.30 |
    | 大件/超大/特殊处理 | 2.0-4.0 lb | $6.36 | $6.36 |
    | 大件/超大/特殊处理 | 4.0-10.0 lb | $10.04 | $10.04 |
    | 大件/超大/特殊处理 | 10 lb 以上 | $14.32 + $1.06/lb | $14.32 + $1.06/lb |
    - 特殊处理品类包括：服饰、鞋类、手表、珠宝、危险品。
    - 规则：费用按**下单时**的费率计算，2026-01-15前下的单即使发货在此日期之后，仍按旧费率收费。
  - **清算费用（Liquidation fee，本次更新维持不变）**：两项费用叠加——
    - **15% liquidations referral fee**（基于毛回收价 gross recovery value）；
    - **liquidations processing fee**（按尺寸重量分档，见下表，此前 Revstep 转述的"$0.25-$0.40+/$0.60-$1.90+"区间在此得到官方精确数字确认）：
    | 尺寸档 | 重量区间 | 清算处理费/件 |
    |---|---|---|
    | 标准尺寸 | 0-0.5 lb | $0.25 |
    | 标准尺寸 | 0.5-1.0 lb | $0.30 |
    | 标准尺寸 | 1.0-2.0 lb | $0.35 |
    | 标准尺寸 | 2 lb 以上 | $0.40 + $0.20/lb |
    | 大件/超大/特殊处理 | 0-1.0 lb | $0.60 |
    | 大件/超大/特殊处理 | 1.0-2.0 lb | $0.70 |
    | 大件/超大/特殊处理 | 2.0-4.0 lb | $0.90 |
    | 大件/超大/特殊处理 | 4.0-10.0 lb | $1.45 |
    | 大件/超大/特殊处理 | 10 lb 以上 | $1.90 + $0.20/lb |
  - **直接可用的对比结论**：以一件 1.5 lb 标准尺寸商品为例，走 removal/disposal 固定收 **$2.27/件**；走 liquidation 只收 **$0.35/件的处理费 + 15% referral fee**（referral fee 基数是毛回收价，不是零售价，通常远小于 $2.27）——这印证了 SPS Commerce 那篇"移除费大约是清算费两倍"的说法，而且是可以精确算出来的官方数字，适合直接做成对比表放进这篇文章。

### Automated fulfillable inventory removal（官方页面，控制"库存什么时候被自动移除/清算/处置"的规则引擎）
- 链接: https://sellercentral.amazon.com/help/hub/reference/external/GDAET8WDZBB2GFHY
- 要点:
  - 关键时间节点：**180天**开始计超龄附加费 → **270天**（未主动配置自动设置的账户）触发强制自动移除 → **365天**（无论是否配置）必定触发自动 return/liquidate/dispose；连续 6 个月零销量+入库超180天的 ASIN 也会被自动移除。
  - 默认是 **opted in**（自动开启），可在 Fulfillment by Amazon Settings 里手动关闭或调整 1-12 个月的自定义移除窗口。
  - **默认处置逻辑**：填了退货地址 → 默认退回卖家；没填地址且没选清算 → 默认捐赠/回收/处置。
  - 官方建议：与其被动等自动移除，不如主动用 **Amazon Outlet**（至少 20% 折扣的促销活动）先提升动销率。
  - 这篇官方页面直接把"disposal vs liquidation"放进了同一个决策框架（Return / Dispose / Liquidation 三选一），可以作为这篇文章的官方权威结构参考。

---

## YouTube 视频素材

### Amazon Unfulfillable Inventory Explained | Removal Orders, Disposal, Liquidation & FBA Management
- 链接: https://www.youtube.com/watch?v=qbPZLFGTjb4
- 发布日期: 2026-05-20
- 观看量: 69
- 整理内容:

**What "unfulfillable" actually means.** Unfulfillable (unsellable) inventory is stock Amazon has physically received, most often via customer returns, that Amazon has determined can no longer be sold as new. Common causes: the customer returned it damaged, missing parts or accessories, opened or used, with damaged packaging, or selected a return reason like defective or not working; occasionally Amazon itself damages a unit during warehouse handling. Importantly, unfulfillable does not always mean the physical product is ruined; sometimes it is just crushed packaging or an automatic reason code that pushed the unit into this bucket even though the item itself is fine.

**Where to find it in Seller Central.** Check Inventory, then the Inventory Dashboard for stranded and unsellable inventory indicators, or Manage FBA Inventory with an unsellable-units filter to see which ASINs are affected. For a full audit trail, the Inventory Adjustments report and Removal Order Detail report, both under FBA inventory reports, show exactly when a unit became unsellable, the reason code Amazon assigned, and what action was subsequently taken.

**The three options, side by side.** Removal order: Amazon ships the units back to a seller-specified address, which must be in the same country as the marketplace (a US address for Amazon.com sales); the seller can inspect, repackage, and resend as new inventory if it is still sellable, and Amazon charges a per-unit removal fee based on size and weight tier. Worked example from the video: an $8-to-make, $25-selling kitchen product gets marked unsellable over a slightly crushed box, and paying the small removal fee, repackaging, and resending recovers most of the product's value. Disposal: Amazon permanently destroys or discards the item, the seller never gets it back, and a fee (also based on size and weight) still applies; the rule of thumb given is that for cheap, heavily damaged, or unrealistically resellable items, paying disposal is often better than letting the unit rack up ongoing storage fees. Liquidation: Amazon routes the inventory to approved third-party liquidators who buy it in bulk, and the seller does not negotiate directly. Amazon calculates a net recovery value using historical sales data, average selling price, and the ASIN's sales history; sellers should expect to recover only roughly 5-10% of the product's original value, after Amazon deducts liquidation processing fees.

**Refurbishment and repackaging programs are largely gone.** Amazon historically offered a program to inspect, repackage, and return certain items to sellable status directly. Today this is limited and not available to all sellers; in most cases it is now on the seller to pull the inventory, personally inspect it, and resend it if it is still good.

**Automating the decision.** In Seller Central, go to the gear icon in the top right, then Fulfillment by Amazon, then scroll to Automated Unfulfillable Settings. This lets a seller pre-select return, disposal, or liquidation as the default action (with an address if return is chosen) and set how often Amazon processes these automatically, removing the need to manually create a removal order every time a unit goes unsellable.

**Reducing unfulfillable inventory at the source.** The video's four levers: stronger and more protective packaging to cut in-transit damage, more accurate listing images, descriptions, and dimensions to cut expectation-mismatch returns, tighter supplier quality control to cut defect-driven returns, and routinely checking the unsellable and removal reports to catch problems early before units sit for a long time. Unsellable inventory does not directly hit account health metrics in most cases, but large volumes of it indirectly drive up storage costs and can affect inventory performance.

### Amazon FBA Removal & Disposal Fees 2026 & Why Excess Inventory Can Cost You Big
- 链接: https://www.youtube.com/watch?v=V0Wa7hBafBc
- 发布日期: 2026-04-06
- 观看量: 247
- 整理内容:

**A real $50,000 cautionary example.** A brand selling a large, heavy product (a kids' table) sent in a batch of inventory that was selling well. A few weeks in, Amazon requested additional documentation and lab testing; the brand did not have it ready, the listing got blocked, and the inventory became stranded. Once stock is stranded too long, Amazon's system automatically generates a removal order that cannot simply be stopped; it triggered, and the brand was charged around $50,000 just to get that inventory removed, on top of still needing to complete testing and re-ship the inventory back in afterward. Their original inbound shipping cost for that same batch had been only $2,000 to $4,000, illustrating the video's core point: sending inventory into Amazon is cheap, sending it back out is expensive.

**Why removal gets so costly.** Once inventory sits six or more months in FBA, aged inventory surcharges kick in and increase sharply the longer it stays, priced per cubic foot, with the jumps designed deliberately steep because Amazon does not want FBA used as long-term storage. Removal and disposal fees are charged per unit based on size and weight; even though inbound shipments arrive in bulk cases at a low per-unit cost, outbound removals are processed and priced individually, which is why removing hundreds or thousands of units at once compounds fast, especially for larger or heavier products.

**Disposal costs exactly the same as removal.** Amazon charges the identical per-unit fee whether it ships the inventory back to the seller or simply disposes of it, so there is no cost saving from picking disposal over removal; the only difference is the outcome (seller gets the physical goods back versus Amazon destroys them). Getting it back does carry hidden secondary costs though: needing storage space, and a 3PL may separately charge to receive and process the returned inventory. Disposal tends to make more sense when inventory is expired, damaged, or clearly unsellable; return-to-self is more common for newer sellers who want to inspect, verify, or possibly resell before switching to disposal once they trust the process.

**A stalling tactic for stranded-inventory removal orders, not a permanent fix.** If Amazon auto-generates a removal order (for example, from a stranded listing), a seller can go to Orders, then View FBA Orders, then Non-Amazon (select country), and manually cancel it from the order detail page. Amazon will simply regenerate a new removal order the next day, so this has to be repeated daily, including weekends, to buy time while actively resolving the underlying issue; it does not cancel the situation, just delays it.

**How to check the actual fee before it happens.** In Manage All Inventory, the per-product fee preview shows referral plus fulfillment fee by default; clicking Calculate revenue opens a detailed breakdown including the exact removal fee and disposal fee per unit, which are always identical to each other. For products not yet listed, the Amazon Revenue Calculator (searchable on Google) lets a seller enter weight and dimensions under Define product to see projected removal and disposal fees before ever launching.

**Practical inventory-level guidance from the video.** When aged inventory surcharges start applying, compare the ongoing monthly cost of keeping stock in FBA against the one-time cost of removing it; as a rule of thumb, keep only what you expect to sell in the next one to two months and remove the rest above that. For consistently selling products, aim to hold roughly two to four months of inventory in FBA at a time to avoid ever triggering aged surcharges; for newer or unproven products, be more conservative (closer to one to two months, or just a few dozen units at a time), especially in categories that draw extra compliance scrutiny (kids' products, edibles, skin-contact items) where Amazon may request additional documentation mid-sale, as happened in the $50k example.
