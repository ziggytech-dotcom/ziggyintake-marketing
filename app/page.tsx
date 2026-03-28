import CTAButton from "@/components/CTAButton";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "ZiggyHQ Auto-Integration",
    description:
      "Every submission flows directly into your ZiggyHQ CRM as a structured lead — zero manual entry, zero lost contacts.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Conditional Logic",
    description:
      "Show or hide fields based on previous answers. Build smart forms that adapt to each respondent automatically.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: "E-Signature Field",
    description:
      "Collect legally-binding signatures directly in your forms. Perfect for contracts, consent forms, and service agreements.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    title: "File Uploads",
    description:
      "Let clients upload IDs, insurance cards, photos, or documents directly through your intake form.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Custom Branding",
    description:
      "Use your own logo, colors, and domain. Forms that look like they were built in-house — because they were.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Analytics Dashboard",
    description:
      "Track form views, completion rates, drop-off points, and lead quality — all in one clean dashboard.",
  },
];

const steps = [
  {
    number: "01",
    title: "Build your intake form",
    description:
      "Drag and drop fields, add conditional logic, and style it to match your brand in minutes — no code required.",
  },
  {
    number: "02",
    title: "Share your form link",
    description:
      "Embed it on your website, share a direct link, or send it via email. Works perfectly on every device.",
  },
  {
    number: "03",
    title: "Watch leads appear in ZiggyHQ",
    description:
      "Every submission auto-creates a lead in your CRM. Follow up faster, close more deals.",
  },
];

const testimonials = [
  {
    quote:
      "We used to manually copy form submissions into our CRM. ZiggyIntake eliminated that entirely. Now leads just show up ready to contact.",
    author: "Marcus T.",
    role: "Owner, Elite Restoration Co.",
  },
  {
    quote:
      "The e-signature field alone saved us hours every week. Clients sign their service agreement right in the intake form.",
    author: "Sarah K.",
    role: "Practice Manager, KineCare Health",
  },
  {
    quote:
      "We manage forms for 12 clients. Custom branding per client, all submissions centralized. ZiggyIntake is a game-changer for our agency.",
    author: "Dominic R.",
    role: "Director, Apex Digital Agency",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-24 pb-28 px-4">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-zinc-400 font-medium">
              Now with ZiggyHQ CRM auto-sync
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            Every form submission
            <br />
            <span className="text-accent">becomes a lead.</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Forms that turn into leads automatically. ZiggyIntake connects your intake forms
            directly to your CRM so nothing slips through the cracks — ever.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <CTAButton href="https://app.ziggyintake.com/signup" size="lg">
              Start Free — $19/mo
            </CTAButton>
            <a
              href="#how-it-works"
              className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
            >
              See how it works
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-zinc-600">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Unlimited submissions
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Cancel anytime
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              ZiggyHQ CRM included
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Everything you need
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Powerful features, flat pricing
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Every feature is included at $19/mo. No tiers, no upsells, no per-submission fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors duration-200 group"
              >
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Up and running in minutes
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              No complex setup. No dev work. Just build, share, and watch leads flow in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-start">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-full w-full h-px bg-gradient-to-r from-border to-transparent -translate-y-px" />
                )}
                <div className="text-4xl font-bold text-accent/20 mb-4 font-mono">{step.number}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Teaser ── */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-10 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
                  Simple pricing
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  One price.
                  <br />
                  Everything included.
                </h2>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  No tiers. No feature gates. No per-submission fees that surprise you at the end of the month.
                </p>
                <CTAButton href="/pricing" variant="outline">
                  See full pricing
                </CTAButton>
              </div>

              <div className="text-center md:text-right">
                <div className="inline-block">
                  <div className="text-7xl font-bold text-white mb-1">
                    $19
                    <span className="text-2xl text-zinc-500 font-normal">/mo</span>
                  </div>
                  <div className="text-sm text-zinc-500 mb-6">
                    vs Typeform&apos;s $25-83/mo &bull; vs Jotform&apos;s per-submission fees
                  </div>
                  <ul className="text-sm text-zinc-400 space-y-2 text-left">
                    {[
                      "Unlimited forms",
                      "Unlimited submissions",
                      "All features included",
                      "ZiggyHQ CRM sync",
                      "Custom branding",
                      "Priority support",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Trusted by businesses
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Real results, real businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-card border border-border rounded-xl p-7 flex flex-col gap-4"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="text-sm font-semibold">{t.author}</div>
                  <div className="text-xs text-zinc-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA Banner ── */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 via-card to-card border border-accent/30 p-12 text-center">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-accent/10 rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Stop losing leads in your inbox.
              </h2>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto text-lg">
                Join hundreds of businesses that turned their intake forms into an automated lead machine.
              </p>
              <CTAButton href="https://app.ziggyintake.com/signup" size="lg">
                Get Started Free — $19/mo
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
