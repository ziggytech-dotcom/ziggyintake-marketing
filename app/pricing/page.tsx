import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Pricing — ZiggyIntake",
  description:
    "ZiggyIntake is $19/mo flat. Unlimited forms, unlimited submissions, all features included. Compare vs Typeform ($25-83/mo) and Jotform (per-submission).",
};

const included = [
  "Unlimited forms",
  "Unlimited submissions",
  "ZiggyHQ CRM auto-integration",
  "Conditional logic",
  "File uploads",
  "E-signature field",
  "Custom branding & white-label",
  "Analytics dashboard",
  "Custom domain support",
  "Team members",
  "Email notifications",
  "Priority support",
];

const comparisonRows = [
  {
    feature: "Monthly price",
    ziggy: "$19/mo",
    typeform: "$25 – $83/mo",
    jotform: "Varies by submissions",
    ziggyWins: true,
  },
  {
    feature: "Unlimited submissions",
    ziggy: "Yes",
    typeform: "Capped on lower tiers",
    jotform: "No — per-submission pricing",
    ziggyWins: true,
  },
  {
    feature: "CRM auto-integration",
    ziggy: "Built-in (ZiggyHQ)",
    typeform: "Zapier/3rd party required",
    jotform: "Zapier/3rd party required",
    ziggyWins: true,
  },
  {
    feature: "E-signature field",
    ziggy: "Included",
    typeform: "Not available",
    jotform: "Add-on cost",
    ziggyWins: true,
  },
  {
    feature: "File uploads",
    ziggy: "Included",
    typeform: "Higher tiers only",
    jotform: "Included",
    ziggyWins: false,
  },
  {
    feature: "Custom branding",
    ziggy: "Included",
    typeform: "Higher tiers only",
    jotform: "Higher tiers only",
    ziggyWins: true,
  },
  {
    feature: "Conditional logic",
    ziggy: "Included",
    typeform: "Higher tiers only",
    jotform: "Included",
    ziggyWins: false,
  },
  {
    feature: "Analytics dashboard",
    ziggy: "Included",
    typeform: "Included",
    jotform: "Included",
    ziggyWins: false,
  },
];

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes. You can create and publish forms for free during your trial period. No credit card required to start.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. There are no long-term contracts. Cancel anytime from your account settings with no cancellation fees.",
  },
  {
    q: "What happens if I exceed submission limits?",
    a: "There are no submission limits. $19/mo gets you truly unlimited submissions — no overage fees, no throttling.",
  },
  {
    q: "Does $19/mo include the ZiggyHQ CRM?",
    a: "ZiggyIntake connects directly with ZiggyHQ, which is a separate product in the ZiggyTech Business Suite. The integration is built-in — no API keys or third-party tools required.",
  },
  {
    q: "Can I use my own domain for the forms?",
    a: "Yes. Custom domain and subdomain support is included in the $19/mo plan.",
  },
  {
    q: "Is there a discount for annual billing?",
    a: "Yes — annual billing saves you two months compared to monthly. Contact us for details.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-2xl mx-auto text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Pricing
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            Simple pricing.
            <br />
            <span className="text-accent">No surprises.</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            One plan. All features. Unlimited everything. $19/mo.
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="pb-20 px-4">
        <div className="max-w-md mx-auto">
          <div className="relative bg-card border-2 border-accent/40 rounded-2xl p-8 overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-bl-xl">
              ALL FEATURES
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />

            <div className="relative">
              <div className="mb-6">
                <div className="text-5xl font-bold mb-1">
                  $19
                  <span className="text-xl text-zinc-500 font-normal">/mo</span>
                </div>
                <div className="text-sm text-zinc-500">Billed monthly &bull; Cancel anytime</div>
              </div>

              <ul className="space-y-3 mb-8">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>

              <CTAButton
                href="https://app.ziggyintake.com/signup"
                size="lg"
                className="w-full justify-center"
              >
                Start Free Trial
              </CTAButton>
              <p className="text-xs text-zinc-600 text-center mt-3">
                No credit card required to start
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How we compare</h2>
            <p className="text-zinc-400">
              See why businesses are switching from Typeform and Jotform.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full">
              <thead>
                <tr className="bg-card/80 border-b border-border">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-400 w-[35%]">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-sm font-bold text-accent w-[21%]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-base">ZiggyIntake</span>
                      <span className="text-xs font-normal text-accent/70 bg-accent/10 px-2 py-0.5 rounded-full">
                        $19/mo
                      </span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-zinc-400 w-[22%]">
                    <div className="flex flex-col items-center gap-1">
                      <span>Typeform</span>
                      <span className="text-xs font-normal text-zinc-600">$25-83/mo</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-zinc-400 w-[22%]">
                    <div className="flex flex-col items-center gap-1">
                      <span>Jotform</span>
                      <span className="text-xs font-normal text-zinc-600">Per-submission</span>
                    </div>
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
                      <span
                        className={`font-semibold ${
                          row.ziggyWins ? "text-accent" : "text-zinc-300"
                        }`}
                      >
                        {row.ziggy}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-zinc-500">
                      {row.typeform}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-zinc-500">
                      {row.jotform}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-base font-semibold mb-3">{faq.q}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-zinc-400 mb-8">
            Join hundreds of businesses using ZiggyIntake to capture and convert leads automatically.
          </p>
          <CTAButton href="https://app.ziggyintake.com/signup" size="lg">
            Start Free Trial
          </CTAButton>
        </div>
      </section>
    </>
  );
}
