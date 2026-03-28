import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "ZiggyIntake vs Jotform — Unlimited at $19/mo",
  description:
    "ZiggyIntake vs Jotform: $19/mo unlimited vs Jotform's per-submission pricing. Built-in CRM, e-signature, and no overage fees. See why businesses are switching.",
};

const comparisonRows = [
  { feature: "Pricing model", ziggy: "$19/mo flat", jotform: "Tiered — submissions cap per plan", ziggyBetter: true },
  { feature: "Submissions", ziggy: "Unlimited", jotform: "100 – 10,000/mo depending on plan", ziggyBetter: true },
  { feature: "Overage fees", ziggy: "None — ever", jotform: "Forms deactivate when limit hit", ziggyBetter: true },
  { feature: "CRM integration", ziggy: "Built-in ZiggyHQ sync", jotform: "Zapier/API required", ziggyBetter: true },
  { feature: "E-signature", ziggy: "Included", jotform: "Add-on cost ($)", ziggyBetter: true },
  { feature: "File uploads", ziggy: "Included", jotform: "Included", ziggyBetter: false },
  { feature: "Custom branding", ziggy: "Included", jotform: "Gold plan ($39+/mo)", ziggyBetter: true },
  { feature: "Conditional logic", ziggy: "Included", jotform: "Included", ziggyBetter: false },
  { feature: "Analytics", ziggy: "Included", jotform: "Included", ziggyBetter: false },
  { feature: "White-label", ziggy: "Included", jotform: "Enterprise only", ziggyBetter: true },
  { feature: "Storage", ziggy: "Included", jotform: "Limited on lower plans", ziggyBetter: true },
];

const switchReasons = [
  {
    icon: "💸",
    title: "No per-submission traps",
    description:
      "Jotform deactivates your forms when you hit your monthly submission limit. With ZiggyIntake, there are no limits — ever. Submit 10 or 10,000 — same price.",
  },
  {
    icon: "🔗",
    title: "Native CRM sync",
    description:
      "Jotform needs Zapier to connect to your CRM, adding $20-50/mo to your bill. ZiggyIntake syncs directly to ZiggyHQ — included in $19/mo.",
  },
  {
    icon: "✍️",
    title: "E-signature without add-ons",
    description:
      "Jotform charges extra for e-signature functionality. ZiggyIntake includes a full e-signature field on every form at no extra cost.",
  },
  {
    icon: "🎨",
    title: "Branding at any tier",
    description:
      "Jotform requires the $39+/mo Gold plan for custom branding. ZiggyIntake includes white-label branding in the base $19/mo plan.",
  },
  {
    icon: "📊",
    title: "Predictable billing",
    description:
      "Stop worrying about how many submissions you&apos;ve had this month. ZiggyIntake is always $19. No surprises, no deactivations, no overages.",
  },
];

export default function VsJotformPage() {
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
            ZiggyIntake vs Jotform
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
            Jotform charges per submission and charges extra for e-signature.
            ZiggyIntake is $19/mo — unlimited submissions, all features included.
          </p>

          {/* Quick stats */}
          <div className="inline-flex items-center gap-8 bg-card border border-border rounded-2xl px-8 py-5 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">Unlimited</div>
              <div className="text-xs text-zinc-500 mt-1">ZiggyIntake submissions</div>
            </div>
            <div className="text-zinc-700 text-2xl font-light">vs</div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zinc-500 line-through">Capped</div>
              <div className="text-xs text-zinc-500 mt-1">Jotform submissions</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="https://app.ziggyintake.com/signup" size="lg">
              Switch to ZiggyIntake — $19/mo
            </CTAButton>
          </div>
        </div>
      </section>

      {/* The Problem with Jotform */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">
              The problem with per-submission pricing
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Jotform&apos;s pricing looks cheap on the surface — but when your business starts generating real leads,
              you hit your submission limit. Your forms go dark. Leads stop coming in. You have to upgrade.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              ZiggyIntake is the opposite: one flat price, zero submission limits. The more leads you capture,
              the more value you get — without paying more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {switchReasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-colors"
              >
                <div className="text-2xl mb-3">{reason.icon}</div>
                <h3 className="text-base font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{reason.description}</p>
              </div>
            ))}
            {/* Testimonial card */}
            <div className="bg-gradient-to-br from-accent/10 to-card border border-accent/20 rounded-xl p-6 flex flex-col justify-between">
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                &ldquo;Jotform deactivated our intake form at 100 submissions in the middle of a busy month. Lost God knows how many leads. Switched to ZiggyIntake and never looked back.&rdquo;
              </p>
              <div>
                <div className="text-sm font-semibold">Priya M.</div>
                <div className="text-xs text-zinc-500">Practice Manager, WellPath Physio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Full feature comparison
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
                    <div className="text-xs font-normal mt-0.5 text-accent/70">$19/mo unlimited</div>
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-zinc-400 text-center w-[30%]">
                    <div>Jotform</div>
                    <div className="text-xs font-normal mt-0.5 text-zinc-600">Per-submission</div>
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
                        {row.jotform}
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
                Stop hitting submission limits.
              </h2>
              <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                Switch to ZiggyIntake and never worry about your forms going offline mid-month again.
              </p>
              <CTAButton href="https://app.ziggyintake.com/signup" size="lg">
                Start Free — $19/mo Unlimited
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
