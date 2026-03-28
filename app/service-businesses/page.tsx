import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "ZiggyIntake for Service Businesses — Turn Inquiries into Booked Jobs",
  description:
    "ZiggyIntake helps service businesses capture leads, collect signatures, and book more jobs automatically. $19/mo flat. Perfect for plumbers, HVAC, cleaning, restoration, and more.",
};

const painPoints = [
  {
    problem: "Leads slip through the cracks",
    solution:
      "Every inquiry auto-creates a lead in your ZiggyHQ CRM — even if it comes in at 2am on a Sunday.",
  },
  {
    problem: "Back-and-forth for signatures",
    solution:
      "Include your service agreement right in the intake form. Clients sign before you even show up.",
  },
  {
    problem: "Missing photos and documents",
    solution:
      "Clients upload photos of the job site, insurance docs, or whatever you need — right at intake.",
  },
  {
    problem: "\"Wrong job\" surprises on-site",
    solution:
      "Conditional logic surfaces the right questions for each service type — so you know exactly what you're walking into.",
  },
];

const useCases = [
  { industry: "Plumbing", example: "Capture leak location, property type, urgency — before you dispatch." },
  { industry: "HVAC", example: "Get unit model, age, issue description, and photos in one intake form." },
  { industry: "Cleaning", example: "Qualify square footage, pet situation, frequency — auto-book or quote." },
  { industry: "Restoration", example: "Insurance info, damage photos, e-signature on scope of work — all upfront." },
  { industry: "Landscaping", example: "Property size, service list, photos — convert inquiries to quoted jobs instantly." },
  { industry: "Pest Control", example: "Pest type, infestation severity, access instructions — ready before you arrive." },
];

const features = [
  {
    title: "Instant CRM leads",
    description: "Form submitted = lead in your CRM. No manual data entry. No lost contact info.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "E-signature on estimates",
    description: "Include your service agreement right in the form. Get it signed before the job starts.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: "Photo & document uploads",
    description: "Collect job site photos, permits, or insurance documents before you even quote.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    title: "Smart conditional forms",
    description: "Different questions for different services. Collect the right info every time.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ServiceBusinessesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-20 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-accent/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs text-zinc-400 font-medium">For Service Businesses</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Turn service inquiries
            <br />
            <span className="text-accent">into booked jobs.</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Every call, text, and web inquiry can be a structured lead. ZiggyIntake captures the details you need — signature, photos, and all — before you pick up the phone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="https://app.ziggyintake.com/signup" size="lg">
              Start Free — $19/mo
            </CTAButton>
            <a href="/features" className="text-sm text-zinc-400 hover:text-white transition-colors">
              See all features →
            </a>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              The problems service businesses face
            </h2>
            <p className="text-zinc-400">And exactly how ZiggyIntake solves them.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {painPoints.map((item) => (
              <div key={item.problem} className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-zinc-300">{item.problem}</span>
                </div>
                <div className="flex items-start gap-3 pl-1">
                  <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-zinc-400 leading-relaxed">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases by Industry */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Works for your trade</h2>
            <p className="text-zinc-400">
              ZiggyIntake is built for field service businesses of all kinds.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((item) => (
              <div
                key={item.industry}
                className="bg-card border border-border rounded-xl p-5 hover:border-accent/30 transition-colors"
              >
                <div className="text-accent font-bold text-sm mb-2">{item.industry}</div>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              Features built for the field
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-card border border-border rounded-xl p-6 flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">{f.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 via-card to-card border border-accent/30 p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl font-bold mb-4">
                Ready to stop losing leads?
              </h2>
              <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                Set up your intake form in minutes. Every lead captured, every signature collected, every job ready to book.
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
