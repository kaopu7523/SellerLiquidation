export const home = {
  hero: {
    eyebrow: "For Amazon Sellers Sitting on Excess Inventory",
    title: "Your Amazon Inventory Is Costing You Money Every Month It Sits There",
    subhead:
      "Whether it's parked in an Amazon fulfillment center or your own 3PL warehouse, slow-moving stock costs you. Here's what FBA fees actually mean if you're enrolled, what your options are for clearing excess inventory either way, and where liquidated stock really ends up.",
    diagnosticIntro: "What's going on right now?",
    diagnostics: [
      { label: "My storage costs jumped and I don't know why", href: "/storage-fees/fba-storage-fees" },
      { label: "I got hit with a surprise aged inventory charge", href: "/storage-fees/aged-inventory-surcharge" },
      { label: "My IPI score tanked and now I have storage limits", href: "/storage-fees/ipi-score" },
      { label: "I'm deciding between liquidating, disposing, or donating stock", href: "/clearing-methods/disposal-vs-liquidation" },
      { label: "I want to know if the Liquidations Program is worth it", href: "/clearing-methods/liquidation-program" },
      { label: "I want to see what auctions and pallet buyers actually do", href: "/channels/liquidation-auctions" },
      { label: "I want to know if Direct Liquidation is a real, legit channel", href: "/channels/direct-liquidation" },
    ],
  },
  trust: {
    label1: "WHAT THIS SITE COVERS",
    body1:
      "SellerLiquidation is an independent guide for Amazon sellers dealing with excess, aged, or slow-moving FBA inventory. It explains how Amazon's storage fees, aged inventory surcharge, and IPI score actually work, compares your options for clearing stock — liquidation, disposal, donation — and shows where liquidated inventory goes once it leaves Amazon's hands.",
    label2: "\"AMAZON LIQUIDATION\" MEANS TWO DIFFERENT THINGS",
    body2:
      "Most people searching this term are shoppers looking for a liquidation store to buy discounted pallets. This site is for the other side of that transaction — sellers whose own FBA inventory is being charged fees, or who are deciding whether to liquidate it themselves.",
    byline: "Researched and maintained by the SellerLiquidation editorial team · Updated September 2026",
  },
  pillars: [
    {
      id: "storage-fees",
      title: "Why You're Being Charged",
      intro:
        "If you're enrolled in FBA, Amazon charges you for holding onto inventory — and the longer it sits, the more it costs. Understand exactly how these fees work before they eat your margin. (Storing inventory yourself or through a 3PL / overseas warehouse? These specific charges don't apply to you — skip ahead to Clearing Methods.)",
      href: "/storage-fees",
      cards: [
        { title: "Amazon FBA Storage Fees", description: "The base monthly cost of keeping inventory in Amazon's warehouses — and why it jumps every October.", href: "/storage-fees/fba-storage-fees" },
        { title: "Amazon Aged Inventory Surcharge", description: "A separate penalty charged on top of storage fees once your stock passes 181 days. Here's how it's calculated and how to see it coming.", href: "/storage-fees/aged-inventory-surcharge" },
        { title: "Amazon IPI Score", description: "The metric that decides whether you get hit with storage limits. What counts toward it, and how to keep yours above 400.", href: "/storage-fees/ipi-score" },
        { title: "FBA Storage Fee Calculator", description: "Estimate what your current inventory is costing you — before the bill shows up.", href: "/storage-fees/calculator" },
      ],
    },
    {
      id: "clearing-methods",
      title: "Your Options for Clearing Inventory",
      intro:
        "Once you know inventory has to go, you've got more than one option — and they're not interchangeable. Here's how liquidation, disposal, donation, and returns actually compare.",
      href: "/clearing-methods",
      cards: [
        { title: "Amazon Liquidation Program", description: "Amazon's official channel for selling off your excess stock to wholesale buyers. How enrollment, payouts, and timing actually work.", href: "/clearing-methods/liquidation-program" },
        { title: "Amazon Disposal vs. Liquidation", description: "Two very different outcomes for the same problem. One recovers some value, the other doesn't — here's how to decide which fits your product.", href: "/clearing-methods/disposal-vs-liquidation" },
        { title: "Donating Excess FBA Inventory", description: "Amazon will donate unsellable stock on your behalf — and it can be a tax write-off. What's eligible and how the program works.", href: "/clearing-methods/donations" },
        { title: "What Happens to Liquidated Return Pallets", description: "Where your customer returns end up once they're pulled from sellable inventory, and why it matters for your margins.", href: "/clearing-methods/return-pallets" },
      ],
    },
    {
      id: "channels",
      title: "Where Liquidated Inventory Goes",
      intro:
        "Liquidated inventory doesn't just disappear — it moves through a real marketplace of auctions, pallet buyers, and resellers. Knowing how that market works helps you understand what you're actually getting back.",
      href: "/channels",
      cards: [
        { title: "Amazon Liquidation Auctions", description: "The B2B auction system most liquidated FBA inventory moves through. Who's bidding, and how pricing gets set.", href: "/channels/liquidation-auctions" },
        { title: "Amazon Liquidation Pallets", description: "Why liquidated stock gets sold in bulk pallets instead of individual units — and what that means for recovery value.", href: "/channels/liquidation-pallets" },
        { title: "Amazon Bulk Liquidations", description: "Amazon's own storefront for overstock and returned lots. How it's different from third-party liquidation channels.", href: "/channels/bulk-liquidations" },
        { title: "Amazon Liquidation Warehouse", description: "Where liquidated inventory physically sits before it's sold off, and how that process is run.", href: "/channels/liquidation-warehouse" },
        { title: "Direct Liquidation", description: "One of the larger third-party liquidation marketplaces Amazon inventory flows into. What it is and how it fits the bigger picture.", href: "/channels/direct-liquidation" },
      ],
    },
  ],
  scopeSourcing: {
    label: "SCOPE & SOURCING",
    title: "We're Not Amazon — and That's the Point",
    body:
      "Amazon's own Seller Central help pages tell you the rules. We tell you what those rules mean for your business, what they don't explain, and what other sellers have actually run into. Every page here links back to Amazon's official documentation where it exists — we're not here to replace it, just to make it usable.",
    sources: [
      "FBA Liquidations program terms and conditions",
      "Monthly inventory storage fees",
      "Aged inventory surcharge",
      "Inventory Performance Index",
      "FBA Donations program",
    ],
  },
  calculatorBanner: {
    text: "Not sure what your inventory is actually costing you? Run the numbers with our FBA Storage Fee Calculator",
    href: "/storage-fees/calculator",
    cta: "Run the calculator →",
  },
};
