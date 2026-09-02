# amazon ipi score

## Inventory performance（Amazon Seller Central 官方页面）
- 链接: https://sellercentral.amazon.com/help/hub/reference/external/G202174810?locale=en-US
- 要点:
  - IPI（Inventory Performance Index）是衡量卖家"库存管理效率"的指标。
  - **影响IPI分数最重要的四类卖家行为**：
    1. 维持"已售库存"与"仓内库存"的平衡，避免超额（excess）和超龄（aged）库存
    2. 避免产生长期仓储费
    3. 修复listing问题（避免搁浅库存）
    4. 在合理水平上保持热销品有货，满足客户需求
  - **官方定义的四大影响类别（Inventory Performance dashboard 四项评分条）**：
    1. 超额库存占比（Excess inventory percentage）——供应>90天预测销量的商品视为超额；建议维持30-60天的库存覆盖水平
    2. 90天滚动动销率（sell-through rate）
    3. 搁浅库存占比（Stranded inventory percentage）——有可售库存但listing失效导致无法售卖
    4. 热销品有货率（in-stock rate，权重按近30天内、按近60天销量加权计算）
  - "超额库存"相关的三个衍生指标：超额件数（excess units，指"放着不管+付仓储费"比"降价或移除"更贵的那部分库存）、预估三年仓储总成本（若放任不处理）、以及"Reduce excess inventory"按钮可直达处理页面。
  - 新建ASIN前90天不影响IPI分数。
  - 一旦提交移除订单或清仓请求，该库存立刻不再计入IPI分数（但分数体现有滞后性）。

## IPI frequently asked questions（Amazon Seller Central 官方FAQ）
- 链接: https://sellercentral.amazon.com/help/hub/reference/external/GZJF4DY2W6MERBAL?locale=en-US
- 要点:
  - IPI分数和 Inventory Performance dashboard **仅面向 Professional 卖家计划**开放。
  - IPI分数同时参考近期和长期表现，设计上会"熨平"短期波动/季节性干扰，因此改进行动需要一定时间才能反映到分数上。
  - **IPI分数如何影响容量上限（capacity limits）**：Professional账户会基于IPI分数+其他因素（ASIN销售预测、发货周期、仓库容量）获得FBA容量限制；分数越高，容量上限越高。
  - 新ASIN前90天不计入IPI。
  - 移除订单或清仓请求一旦提交，对应库存立即不再计入IPI分数计算（但生效需时间）。
  - 搁浅库存（stranded inventory：有可售库存但没有active listing，无法产生销售却仍产生费用）会拉低IPI分数，需尽快修复listing问题。
  - Sell-through率计算示例：平均可用库存 = (50+40+150+80)/4 = 80件；Sell-through率 = 120/80 = 1.5。

---

## Amazon 官方帮助中心补充

### FBA New Selection 项目要求 IPI ≥ 300（新的具体门槛数字）
- 链接: https://sellercentral.amazon.com/help/hub/reference/external/GWHQRT98SAZC29VQ
- 要点: Google 搜索摘要确认原文："If you've been assigned an Inventory Performance Index (IPI) score, you must have a score of 300 or higher to qualify for the program."——这是一个具体项目（FBA New Selection，一个新品测试/清算相关的项目）对 IPI 分数的准入门槛，跟之前笔记里提到的"保持在400以上"是不同场景（那个更可能是避免storage limits的经验建议，不是官方硬性门槛数字），两个数字都可以写进攻略但要分清楚各自对应什么场景。本次尝试完整抓取该页面正文被登录壳层挡住，只拿到这条摘要。

### 已核实：现有 2 个官方来源已比较完整
本关键词已有的两个官方页面（G202174810 主页面 + GZJF4DY2W6MERBAL FAQ）覆盖了 IPI 定义、四大评分维度、90天新品豁免期、Professional计划限定、容量上限关联等核心问题，本次搜索未发现明显遗漏的官方主题页，不勉强补充凑数。
  - "In-stock rate"本身不直接作为IPI输入项，但如果热销品持续断货、而留在库存里的都是低销量/超额/超龄商品，会间接拖累分数。
  - **没有IPI分数的情况**：仅 Professional 计划、有FBA库存、且近13周有活跃记录的卖家才会显示IPI分数；新卖家或FBA仅用于多渠道履约（MCF，不在Amazon平台销售）的卖家可能没有IPI分数。

## What Is Amazon IPI Score (and Why It Matters)（jarvio.io）
- 链接: https://jarvio.io/blog/what-is-amazon-ipi-score
- 要点:
  - IPI 由 Amazon 于 **2018年**推出，目的是遏制卖家无限占用仓储空间囤积滞销品的问题；此后仓储配额直接与库存管理效率挂钩。
  - **分数区间：0-1000**，多数卖家分数落在 **300-800** 之间。
  - **关键阈值：当前是 400 分**（Amazon过去调整过这个阈值，未来可能再变）——低于400会触发下季度的仓储容量限制。
  - **各分段对应状态（可直接用于内页做分数解读表格）**：
    - 0-399：低于阈值，触发仓储限制，旺季可能无法发送足够库存
    - 400-499：合格（Passing），暂无限制，但没有缓冲空间，一个差季度就可能跌破
    - 500-649：健康（Healthy），仓储配额良好
    - 650-799：优秀（Strong），最大仓储容量
    - 800-1000：顶尖（Elite），极少数卖家能稳定达到
  - **评估节奏**：Amazon在每个季度末评估IPI分数，用以设定下一季度的仓储容量限制；若评估日分数低于阈值，下季度会收到以立方英尺计的仓储上限——旺季（Q4）撞上这个限制影响尤其致命（备货跟不上需求）。
  - 官方未公开具体加权公式，但业界推测由四项健康指标加权构成（呼应官方FAQ的四大类别）。
  - **常见误区两条**：① 拖到季度评估日才应对，为时已晚——应每周监控，一旦出现下降趋势就要开始纠正；② "宁可多囤货防止断货"——过度囤货（比如囤120天用量）反而是导致超额库存、拖垮IPI的头号原因。
  - 建议的补货节奏：设置在21-30天库存量时触发补货点（需综合供应商交期），并维持7-14天的安全库存缓冲；选择交期稳定的供应商；关注季节性销量波动带来的补货节奏变化。
  - 文中出现一个第三方工具（Jarvio）的示例问答，展示了"当前IPI 445，高于400阈值无限制；6个ASIN超额库存拖累分数；建议对3个具体ASIN分别采取促销/移除/清仓措施"——可以作为攻略里"IPI分数诊断+具体行动建议"这种结构范式的参考，不需要照抄工具本身。

## 4 Ways to Improve Your Amazon IPI Score + IPI Updates（SPS Commerce）
- 链接: https://www.spscommerce.com/community/articles/improve-your-amazon-ipi-score
- 要点:
  - IPI分数可在 Seller Central 的 Inventory Dashboard 查看，范围 **0-1000**。
  - Amazon不公开具体算法，但官方列出四项决定因素：① 搁浅库存 ② 超额库存 ③ 动销率（sell-through） ④ 有货率（in-stock inventory）。
  - **提升IPI的4个具体动作**：
    1. **处理搁浅库存**：重新上架（relist）或提交移除订单（remove）
    2. **移除超额库存**：主动清理占比过高的滞销库存
    3. **提升动销率**：加大广告投放（Sponsored Ads）、优化listing质量以拉动销量，动销率按近90天滚动周期计算
    4. **保持热销品有货**：避免断货，作者提到疫情期间因Amazon自身入库/上架延迟导致卖家被动断货、进而拖累"有货率"指标的真实案例
  - 补充建议：投资第三方物流/海外仓（3PL）作为备份渠道，降低对FBA单一仓储的依赖；维持缓冲库存避免断货。

---

## YouTube 视频素材

### What is Amazon IPI Score? [The PPC Den Podcast]
- 链接: https://www.youtube.com/watch?v=VXbZzwUoIeE
- 发布日期: 2024-04-12
- 观看量: 3648
- 整理内容:

**这是一期访谈类播客**，主持人 Michael（PPC Den）对话 AMZ Prep 的 Blair Forrest，从"广告投放人视角"切入讲 IPI 分数为什么值得关注。核心论点：IPI 表面上看是个仓储/物流指标，实际上是一个直接影响广告和自然排名表现的**排名因子**——两个关键词竞价、相关性、出价都相同的竞品，库存管理更好的那个账户在自然排名和广告排名上会更靠前。作者提到一个直觉类比：库存管理是电商运营里"不性感但极其重要"的话题，好比"每天吃西兰花"，不吸引眼球但决定长期健康。

**IPI 的历史由来。** IPI 最早在新冠疫情期间被引入，当时 Amazon 仓库空间极度紧张（电商需求一夜暴增），Amazon 最初尝试"直接上调仓储费"来抑制卖家囤货，但发现卖家根本不在乎涨价、还是照常大量发货；于是进入"第二阶段"——推出 IPI 评分机制，把库存管理表现量化成一个 0-1000 的分数，分数不达标就限制仓储额度，直接倒逼卖家改变囤货行为。作者强调一个常被忽视的底层逻辑：**Amazon 本质是履约公司（fulfillment company），不是仓储公司**——库存"躺在"仓库里不产生收入，只有"库存流动起来"（发货、配送）才为 Amazon 创造收入，所以整套 IPI 机制的设计目标就是逼库存加速流转、别在仓库里"睡大觉"。

**四大影响因素的详细解读（按重要性排序）：**
1. **超额库存（excess inventory）——权重最高**：粗略经验法则是"任何 SKU 库存超过 90 天可售量"就会被判定为超额，对分数冲击最大；作者提到目前实操中团队已经把内部目标收紧到 **60 天**（而不是等到 90 天），主要是出于成本考虑——自建仓/3PL 存货通常比 Amazon 仓储更便宜。
2. **动销率（sell-through rate）——权重次高**：计算方式是"销售件数 ÷ 天数"体现的流转速度，比如发 100 件进仓 10 天内卖完 = 高动销率；发 100 件但要 90 天才卖完 = 低动销率。视频演示的账户示例动销率为 **0.8**（处于"后40%卖家"分位区间），作者建议的应对策略是：要么发货量减少匹配实际卖出速度，要么加大广告/优化转化来加快卖出速度；理想目标是把周期控制在 **4-12周内**（12周为绝对上限）。
3. **搁浅库存占比（stranded inventory percentage）——权重较低**：指因 listing 失效、退货未处理、listing 合并出错等原因导致"账面上有但实际卖不出去"的库存占比，目标应保持在 **95% 以上"未搁浅"**（即搁浅占比低于5%），作者提示这类问题即使只有一两个 SKU 出问题也会拖累整体分数，建议每 6-8 周做一次退货/搁浅库存审计清理。
4. **有货率（FBA in stock rate）——权重最低但仍需重视**：核心是别断货，尤其是主力单品；作者提醒断货不仅拖累 IPI，还会连带打击广告表现和自然排名。

**分数高低的实际影响。** IPI 分数高能带来更大的仓储灵活性，尤其是 Q4 旺季——分数不够的账户可能被限制发货额度，逼得不得不切换成 FBM 自发货（作者认为 FBM 无论对广告转化还是自然排名表现都明显更差）。做得好的品牌（High-IPI）往往采用"小批量、高频次"的补货策略，通过 3PL/预处理中心（prep center）做中转分批发货，而不是一次性囤一大批货。

**互动环节里提到的一个信息：** 视频录制时提到"Amazon 3月1日 2023 FBA费率变更"链接会放在简介栏，说明这期内容录制/引用的费率背景对应的是 2023 年 3 月的费率周期，具体分数门槛请以当前官方页面为准。

### How to Increase IPI Inventory Performance Index Score on Amazon Seller Central?
- 链接: https://www.youtube.com/watch?v=TMysF_XACdQ
- 发布日期: 2020-07-18
- 观看量: 6300
- 整理内容:

**⚠️ 时效性提醒：** 本视频发布于 2020 年 7 月，视频中提到的具体分数门槛（如"500分"）、生效日期、和"IPI 从350→400→500"的历史变化都是 **2020 年疫情期间的特定背景**，不能直接作为当前费率/门槛引用，但视频对 IPI **底层计算机制**的解释（尤其是"90天滚动窗口"和"四因素优先级"）至今仍具参考价值，建议只提取机制类信息，具体数字以官方最新页面为准。

**滚动窗口机制（核心知识点，机制本身仍然适用）。** 作者强调一个关键容易被误解的点：IPI 分数是按 **90天滚动窗口** 计算的，这意味着"临时抱佛脚"式的操作（比如短期内做闪购清仓、大量提交移除订单）**并不会真正提升分数**，因为过去 90 天里的历史行为已经计入权重；这类操作只能起到"止损"作用（避免分数继续恶化），无法快速拉高分数——如果想要分数明显改善，本质上需要把销售速度提升一个数量级（作者举例"三周内销量提升200%"这种量级）才能在短期内看到效果。

**四大因素及其排序（与 2024 年那期播客的排序基本一致，互相印证）：**
1. **超额库存（excess inventory）——权重最高**，对分数杀伤力最大，主要针对"大量发货但每月只卖两三件"这种严重囤货失衡的情况。
2. **动销率（sell-through）——权重第二**。
3. **搁浅库存（stranded inventory）——权重远低于前两者**（作者原话"very distant third"）。
4. **有货率（in-stock inventory）——权重同样很低**，逻辑是"Amazon 认为卖家本身就有动机保证有货，所以这项指标默认卖家不会故意搞砸"。

**账户页面查看路径（UI 可能已变化，仅供参考）：** 光标移到 Inventory → Manage Inventory，右上角能进入 Inventory Dashboard 查看分数；页面左下角一个不起眼的区域点击后会展开"当前仓储额度"和"下一周期额度"的对比——作者演示的案例中，485分对应"下一周期仓储额度会被限制到当前用量的约1.6倍"，如果卖家有季节性商品、旺季需求会涨到平时的3倍，那么这个限额就完全不够用，会直接导致断货。

**给旺季卖家的建议（结合2020年疫情背景，思路仍可参考）：** ①备一个独立于 Amazon 的 3PL 仓库作为缓冲，提前谈好合同和物流时效；②发货节奏上，建议始终保持 Amazon 仓内 **60天供货量**（而不是30天）——因为入库上架平均要花 30 天甚至更久，如果只发30天量，等新货上架完老货可能已经断货；③3PL 仓库那边则建议备 **90天供货量** 作为二级缓冲；④移除订单（removal order）**不会**提升 IPI 分数，只能停止分数继续恶化——这是一个常见误解，很多卖家以为"清完库存分数就会立刻涨"，实际上分数看的是过去90天的综合表现。

## 未深入抓取但可作为补充信源
- Amazon IPI Score 2026: How to Improve It and Why It Matters（novadata.io）：https://novadata.io/resources/blog/amazon-ipi-score — 未抓取，2026年新文章，可作为最新数据点的交叉验证来源。
- What Is the Amazon Inventory Performance Index (IPI) And...（flexport.com）：https://www.flexport.com/blog/amazon-inventory-performance-index — 未抓取，日期较早（2018年），主要作历史背景/定义类信源，时效性数据不建议引用。
