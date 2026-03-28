import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "ZiggyIntake for Agencies — White-Label Forms for Every Client",
  description:
    "Give every client their own branded intake forms. Custom logos, colors, and domains per client. All leads flow into your CRM. ZiggyIntake for agencies — $19/mo.",
};

const agencyPains = [
  {
    pain: "Every client needs a different form",
    fix: "Build unlimited forms with conditional logic tailored to each client's specific intake needs.",
  },
  {
    pain: "Clients don't want to see \"Powered by X\"",
    fix: "Full white-label: your client's logo, colors, and custom domain. Their brand, your infrastructure.",
  },
  {
    pain: "Managing leads for 10+ clients is chaos",
    fix: "All client submissions flow into organized, separate lead pipelines in ZiggyHQ — one dashboard to rule them all.",
  },
  {
    pain: "Back-and-forth for signed docs",
    fix: "Include e-signature fields in every client form. Prospects sign NDAs, agreements, and scopes before you meet.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Build client-specific forms",
    description:
      "Create a unique intake form for each client with their logo, brand colors, and custom domain. Use conditional logic to ask the right questions for their specific service.",
  },
  {
    step: "02",
    title: "Deploy to client websites",
    description:
      "Each client gets a branded form link or embed code. From their customers' perspective, it looks fully native to the client's brand.",
  },
  {
    step: "03",
    title: "Leads flow to the right pipeline",
    description:
      "Every submission auto-routes to the correct client's lead pipeline in ZiggyHQ. You see everything; each client sees only their own leads.",
  },
  {
    step: "04",
    title: "Report results to clients",
    description:
      "Pull analytics per form to show clients lead volume, completion rates, and form performance. Data they&apos;ll want to see every month.",
  },
];

const benefits = [
  {
    title: "Unlimited forms",
    description: "One client or one hundred — build as many forms as you need at no extra cost.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Per-client white-labeling",
    description: "Each form gets its own logo, colors, and domain. Completely branded for every client.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Centralized lead management",
    description: "All client leads in one ZiggyHQ dashboard — organized, searchable, and actionable.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "E-signature for every client",
    description: "Add signature fields to any form — NDAs, scopes, agreements — all legally binding.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: "File uploads per client",
    description: "Let each client's prospects upload briefs, assets, or documents directly in the form.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    title: "Analytics per form",
    description: "Show clients their form stats: views, completions, drop-offs. Monthly reporting made easy.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function AgenciesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-20 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-accent/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs text-zinc-400 font-medium">For Agencies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            White-label forms
            <br />
            <span className="text-accent">for every client.</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Manage intake forms for every client in one place. Each form is fully branded to their business. All leads flow into organized pipelines in your CRM. One $19/mo plan covers it all.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="https://app.ziggyintake.com/signup" size="lg">
              Start Free — $19/mo
            </CTAButton>
            <a href="/pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">
              View pricing →
            </a>
          </div>
        </div>
      </section>

      {/* Agency Pains */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              Common agency headaches. Solved.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {agencyPains.map((item) => (
              <div key={item.pain} className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold">{item.pain}</span>
                </div>
                <div className="flex items-start gap-2 pl-1">
                  <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">The agency workflow</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workflow.map((step) => (
              <div key={step.step} className="flex gap-5">
                <div className="text-3xl font-bold text-accent/20 font-mono flex-shrink-0 w-12">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Built for agency scale</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent/20 transition-colors">
                  {b.icon}
                </div>
                <h3 className="text-base font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-accent/20 rounded-2xl p-8">
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              &ldquo;We manage intake forms for 14 clients. Every one has their own branding, their own domain, and their own lead pipeline. I honestly can&apos;t imagine handling this in anything else. And at $19/mo, it&apos;s practically free.&rdquo;
            </p>
            <div>
              <div className="font-semibold">Dominic R.</div>
              <div className="text-sm text-zinc-500">Director, Apex Digital Agency</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 via-card to-card border border-accent/30 p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl font-bold mb-4">
                Scale your agency with ZiggyIntake.
              </h2>
              <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                One platform, unlimited clients, professional results. Get started in minutes.
              </p>
              <CTAButton href="https://app.ziggyintake.com/signup" size="lg">
                Get Started Free — $19/mo
              </CTAButton>
              <p className="text-xs text-zinc-600 mt-4">No credit card required.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
