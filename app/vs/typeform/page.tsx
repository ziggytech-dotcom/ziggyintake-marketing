import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "ZiggyIntake vs Typeform — Better & Cheaper",
  description:
    "ZiggyIntake vs Typeform: $19/mo flat vs $25-83/mo. Unlimited submissions, built-in CRM sync, e-signature — all included. See why businesses are switching.",
};

const comparisonRows = [
  { feature: "Monthly price", ziggy: "$19/mo flat", typeform: "$25 – $83/mo", ziggyBetter: true },
  { feature: "Submission limit", ziggy: "Unlimited", typeform: "Capped (10–100/mo on lower tiers)", ziggyBetter: true },
  { feature: "CRM integration", ziggy: "Built-in ZiggyHQ sync", typeform: "Zapier required ($)", ziggyBetter: true },
  { feature: "E-signature", ziggy: "Included", typeform: "Not available", ziggyBetter: true },
  { feature: "File uploads", ziggy: "Included", typeform: "Higher tiers only", ziggyBetter: true },
  { feature: "Custom branding", ziggy: "Included", typeform: "Higher tiers only ($50+/mo)", ziggyBetter: true },
  { feature: "Conditional logic", ziggy: "Included", typeform: "Higher tiers only", ziggyBetter: true },
  { feature: "Analytics", ziggy: "Included", typeform: "Included", ziggyBetter: false },
  { feature: "White-label", ziggy: "Included", typeform: "Not available", ziggyBetter: true },
  { feature: "Cancel anytime", ziggy: "Yes", typeform: "Yes", ziggyBetter: false },
];

const switchReasons = [
  {
    title: "Pay 57% less",
    description:
      "Typeform's most popular plans run $50-83/mo. ZiggyIntake is $19/mo — and includes everything Typeform locks behind higher tiers.",
  },
  {
    title: "No submission caps",
    description:
      "Typeform caps submissions on lower plans (as few as 10/mo). ZiggyIntake gives you unlimited submissions at every price point.",
  },
  {
    title: "Built-in CRM sync",
    description:
      "Typeform requires Zapier (another $20-50/mo) to connect to your CRM. ZiggyIntake syncs directly to ZiggyHQ — zero setup, zero extra cost.",
  },
  {
    title: "E-signature included",
    description:
      "Typeform doesn't offer e-signature at all. ZiggyIntake includes a legally-binding e-signature field on every form.",
  },
  {
    title: "Custom branding from day one",
    description:
      "Typeform locks branding removal behind their $50+/mo Business plan. ZiggyIntake lets you white-label every form from the start.",
  },
];

export default function VsTypeformPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-20 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs text-zinc-400 font-medium">Comparison</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            ZiggyIntake vs Typeform
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
            Same beautiful forms. More features. Less than half the price.
            Here&apos;s exactly how they compare.
          </p>

          {/* Quick stat */}
          <div className="inline-flex items-center gap-8 bg-card border border-border rounded-2xl px-8 py-5 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">$19</div>
              <div className="text-xs text-zinc-500 mt-1">ZiggyIntake/mo</div>
            </div>
            <div className="text-zinc-700 text-2xl font-light">vs</div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zinc-500 line-through">$50+</div>
              <div className="text-xs text-zinc-500 mt-1">Typeform/mo</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="https://app.ziggyintake.com/signup" size="lg">
              Switch to ZiggyIntake — $19/mo
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Why Switch */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            5 reasons businesses switch from Typeform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {switchReasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{reason.description}</p>
              </div>
            ))}
            {/* Filler card */}
            <div className="bg-gradient-to-br from-accent/10 to-card border border-accent/20 rounded-xl p-6 flex flex-col justify-between">
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                &ldquo;We were paying $83/mo for Typeform and still needed Zapier to get leads into our CRM. ZiggyIntake is $19 and does it all natively.&rdquo;
              </p>
              <div>
                <div className="text-sm font-semibold">James W.</div>
                <div className="text-xs text-zinc-500">Owner, Apex Plumbing Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full">
              <thead>
                <tr className="bg-card border-b border-border">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-400 w-[40%]">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-sm font-bold text-accent text-center w-[30%]">
                    <div>ZiggyIntake</div>
                    <div className="text-xs font-normal mt-0.5 text-accent/70">$19/mo</div>
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-zinc-400 text-center w-[30%]">
                    <div>Typeform</div>
                    <div className="text-xs font-normal mt-0.5 text-zinc-600">$25-83/mo</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border last:border-b-0 ${
                      i % 2 === 0 ? "bg-background/40" : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-sm text-center">
                      <span className={row.ziggyBetter ? "text-accent font-semibold" : "text-zinc-300"}>
                        {row.ziggy}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-center">
                      <span className={row.ziggyBetter ? "text-zinc-600" : "text-zinc-300"}>
                        {row.typeform}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 via-card to-card border border-accent/30 p-10 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl font-bold mb-4">
                Make the switch today.
              </h2>
              <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                Get more features for less than half the price of Typeform. No migration headaches — set up in minutes.
              </p>
              <CTAButton href="https://app.ziggyintake.com/signup" size="lg">
                Start Free — $19/mo
              </CTAButton>
              <p className="text-xs text-zinc-600 mt-4">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
