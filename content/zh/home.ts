export const home = {
  hero: {
    eyebrow: "写给库存滞销的亚马逊卖家",
    title: "你的亚马逊库存,每多放一个月就多亏一个月的钱",
    subhead:
      "不管货是压在亚马逊仓库里,还是放在你自己的第三方海外仓,滞销库存都在持续吃掉你的利润。这里讲清楚:如果你在用 FBA,那些仓储费到底意味着什么;不管货放在哪,你清库存有哪些选项;以及被清算掉的库存最终都去了哪。",
    diagnosticIntro: "你现在遇到的是哪种情况?",
    diagnostics: [
      { label: "仓储费突然涨了,不知道为什么", href: "/storage-fees/fba-storage-fees" },
      { label: "莫名其妙被扣了一笔超龄库存附加费", href: "/storage-fees/aged-inventory-surcharge" },
      { label: "IPI 分数掉了,仓储额度被限制了", href: "/storage-fees/ipi-score" },
      { label: "在清算、处置、捐赠之间拿不定主意", href: "/clearing-methods/disposal-vs-liquidation" },
      { label: "想知道清算项目到底值不值得参加", href: "/clearing-methods/liquidation-program" },
      { label: "想搞清楚拍卖和货盘买家到底是怎么运作的", href: "/channels/liquidation-auctions" },
      { label: "想确认 Direct Liquidation 是不是靠谱渠道", href: "/channels/direct-liquidation" },
    ],
  },
  trust: {
    label1: "本站内容范围",
    body1:
      "SellerLiquidation 是一个独立的攻略站,写给正在处理亚马逊 FBA 滞销、超龄或积压库存的卖家。我们讲清楚亚马逊仓储费、超龄库存附加费、IPI 分数到底是怎么运作的,对比清算、处置、捐赠这几种清库存方式的差异,并说明库存被清算之后实际流向了哪里。",
    label2: "「Amazon liquidation」这个词有两种完全不同的意思",
    body2:
      "大多数搜索这个词的人,其实是想找一个能低价淘货的清仓店。本站服务的是这个交易的另一端——库存正在被亚马逊收取费用、或者正在纠结要不要自己清算库存的卖家。",
    byline: "由 SellerLiquidation 编辑团队调研维护 · 更新于 2026 年 9 月",
  },
  pillars: [
    {
      id: "storage-fees",
      title: "为什么你会被扣费",
      intro:
        "如果你在用 FBA,亚马逊会为你囤积的库存收费——而且放得越久,费用越高。在这些费用吃掉你的利润之前,先搞清楚它们到底是怎么算的。(如果你的货放在自己的仓库或第三方海外仓,这些具体费用跟你无关——可以直接跳到下面的「清库存方法」板块。)",
      href: "/storage-fees",
      cards: [
        { title: "亚马逊 FBA 仓储费", description: "把库存放在亚马逊仓库里的基础月费,以及为什么每年十月都会涨价。", href: "/storage-fees/fba-storage-fees" },
        { title: "亚马逊超龄库存附加费", description: "库存超过 181 天之后,在仓储费之外额外收取的一笔罚款。这里讲清楚它怎么算、怎么提前发现。", href: "/storage-fees/aged-inventory-surcharge" },
        { title: "亚马逊 IPI 分数", description: "决定你会不会被限制仓储额度的那个指标。哪些行为会计入分数,怎么把分数稳定保持在 400 以上。", href: "/storage-fees/ipi-score" },
        { title: "FBA 仓储费计算器", description: "在账单出来之前,先估算一下你现在的库存到底在吃掉你多少钱。", href: "/storage-fees/calculator" },
      ],
    },
    {
      id: "clearing-methods",
      title: "清库存的几种方式",
      intro:
        "一旦确定库存必须处理掉,你的选择不止一种——而且这些选择并不能互相替代。这里讲清楚清算、处置、捐赠、退货这几种方式到底有什么区别。",
      href: "/clearing-methods",
      cards: [
        { title: "亚马逊清算项目", description: "亚马逊官方渠道,把你的积压库存卖给批发买家。入驻流程、费用、到账时间到底是怎样的。", href: "/clearing-methods/liquidation-program" },
        { title: "亚马逊处置 vs 清算", description: "同一个问题,两种完全不同的结果。一个能拿回一点钱,另一个什么都拿不回——这里讲清楚怎么根据你的产品来选。", href: "/clearing-methods/disposal-vs-liquidation" },
        { title: "捐赠你的积压 FBA 库存", description: "亚马逊可以代你把卖不掉的库存捐出去——还可能抵税。哪些商品符合资格,这个项目具体怎么运作。", href: "/clearing-methods/donations" },
        { title: "被清算的退货库存去了哪里", description: "你的客户退货一旦从可售库存里被剔除,最终去了哪里,这对你的利润率意味着什么。", href: "/clearing-methods/return-pallets" },
      ],
    },
    {
      id: "channels",
      title: "被清算的库存流向了哪里",
      intro:
        "被清算的库存不会凭空消失——它会流入一个由拍卖、货盘买家和二次转售商组成的真实市场。搞清楚这个市场怎么运作,能帮你理解自己实际能拿回多少价值。",
      href: "/channels",
      cards: [
        { title: "亚马逊清算拍卖", description: "大部分被清算的 FBA 库存流入的 B2B 拍卖体系。谁在参与竞拍,价格是怎么定出来的。", href: "/channels/liquidation-auctions" },
        { title: "亚马逊清算货盘", description: "为什么清算库存是按整托打包卖,而不是一件一件卖——这对回收价值意味着什么。", href: "/channels/liquidation-pallets" },
        { title: "亚马逊大宗清算商城", description: "亚马逊自营的积压库存与退货货盘商城。和第三方清算渠道相比有什么不同。", href: "/channels/bulk-liquidations" },
        { title: "亚马逊清算仓库", description: "库存在被卖掉之前,实际存放在哪里,这个流程是怎么运作的。", href: "/channels/liquidation-warehouse" },
        { title: "Direct Liquidation", description: "亚马逊库存流入的几个较大的第三方清算市场之一。它是什么、在整个链条里处于什么位置。", href: "/channels/direct-liquidation" },
      ],
    },
  ],
  scopeSourcing: {
    label: "内容范围与信息来源",
    title: "我们不是亚马逊——这正是本站存在的意义",
    body:
      "亚马逊自己的 Seller Central 帮助页面告诉你规则是什么。我们告诉你这些规则对你的生意到底意味着什么、哪些地方官方文档没讲清楚、以及其他卖家实际踩过哪些坑。本站每一篇内容都会链接回对应的亚马逊官方文档——我们不是要取代它,只是让它更好用。",
    sources: [
      "FBA 清算项目条款与条件",
      "月度库存仓储费说明",
      "超龄库存附加费说明",
      "库存表现指数(IPI)说明",
      "FBA 捐赠项目说明",
    ],
  },
  calculatorBanner: {
    text: "不确定你的库存到底在吃掉多少钱?用我们的 FBA 仓储费计算器算一下",
    href: "/storage-fees/calculator",
    cta: "去算一下 →",
  },
};
