import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Features — ZiggyIntake",
  description:
    "Explore all ZiggyIntake features: ZiggyHQ CRM integration, conditional logic, e-signature, file uploads, custom branding, and analytics. All included at $19/mo.",
};

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "ZiggyHQ Auto-Integration",
    tagline: "Zero manual entry. Leads just appear.",
    description:
      "When someone submits your intake form, ZiggyIntake automatically creates a structured lead record in your ZiggyHQ CRM. Every field is mapped, tagged, and ready for follow-up — before you even see the notification.",
    bullets: [
      "Auto-creates lead records in ZiggyHQ",
      "Custom field mapping per form",
      "Triggers automated workflows in ZiggyHQ",
      "Assign leads to team members automatically",
      "Track lead source and form origin",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Conditional Logic",
    tagline: "Forms that think for themselves.",
    description:
      "Build dynamic intake flows that show or hide fields based on previous answers. Create branching paths for different customer types, service needs, or locations — all without writing a single line of code.",
    bullets: [
      "Show/hide fields based on any condition",
      "Multi-branch logic paths",
      "Skip sections not relevant to the respondent",
      "Works with all field types",
      "Visual logic builder — no code required",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    title: "File Uploads",
    tagline: "Get the documents you need, upfront.",
    description:
      "Add a file upload field to any form and let clients submit photos, IDs, insurance cards, signed documents, or any other files you need — right at intake time. No more back-and-forth emails.",
    bullets: [
      "Accept any file type or restrict to specific types",
      "Multiple files per submission",
      "Secure cloud storage included",
      "Files attached directly to lead in ZiggyHQ",
      "Set maximum file size limits",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: "E-Signature Field",
    tagline: "Sign it. Seal it. Move on.",
    description:
      "Add a legally-binding e-signature field to your intake forms. Collect signed service agreements, consent forms, liability waivers, or any other document that needs a signature — before the appointment, before the project starts.",
    bullets: [
      "Legally binding digital signatures",
      "Draw or type signature options",
      "Timestamp and IP logging",
      "Signed documents stored with the lead",
      "Perfect for contracts and consent forms",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Custom Branding",
    tagline: "Your brand. Your forms. Your clients.",
    description:
      "Replace ZiggyIntake branding with your own. Add your logo, set your brand colors, use a custom domain or subdomain, and create a seamless branded experience from first touchpoint to signed contract.",
    bullets: [
      "Upload your logo",
      "Custom brand colors and fonts",
      "Custom domain / subdomain support",
      "Remove ZiggyIntake branding",
      "White-label for agency clients",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Analytics Dashboard",
    tagline: "Know exactly where your leads come from.",
    description:
      "Track every aspect of your forms' performance. See how many people started vs. completed, where they dropped off, which form fields cause friction, and how lead quality trends over time.",
    bullets: [
      "Form views and completion rates",
      "Drop-off point analysis",
      "Lead volume by form and date range",
      "Source attribution tracking",
      "Exportable reports",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-20 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Features
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            Everything you need to capture
            <br />
            <span className="text-accent">and convert leads.</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
            Six powerful features, one flat price. No feature tiers, no add-ons,
            no surprises on your bill.
          </p>
          <CTAButton href="https://app.ziggyintake.com/signup" size="lg">
            Get All Features for $19/mo
          </CTAButton>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`bg-card border border-border rounded-2xl p-8 sm:p-10 flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-10 items-start hover:border-accent/30 transition-colors duration-300`}
            >
              {/* Icon + tagline side */}
              <div className="lg:w-80 flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                  {feature.icon}
                </div>
                <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
                <p className="text-accent text-sm font-medium mb-4">{feature.tagline}</p>
                <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
              </div>

              {/* Bullets side */}
              <div className="flex-1">
                <ul className="space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-zinc-300">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-card border border-accent/20 rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl font-bold mb-4">All features. One price.</h2>
              <p className="text-zinc-400 mb-8">
                $19/mo gets you every feature listed above. Start free today.
              </p>
              <CTAButton href="https://app.ziggyintake.com/signup" size="lg">
                Start Free Today
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
