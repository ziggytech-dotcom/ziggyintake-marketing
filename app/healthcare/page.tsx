import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "ZiggyIntake for Healthcare — Digital Patient Intake Forms",
  description:
    "Replace paper intake forms with secure digital forms. E-signature, file uploads, conditional logic for healthcare providers. $19/mo flat — no per-submission fees.",
};

const painPoints = [
  {
    icon: "📋",
    problem: "Patients filling out paper forms in the waiting room",
    solution:
      "Send a digital intake link before the appointment. Patients complete it on their phone, at home, in advance — your staff reviews before they walk in.",
  },
  {
    icon: "✍️",
    problem: "Chasing signatures on consent forms",
    solution:
      "Include consent forms and HIPAA acknowledgments directly in your intake form. Patients sign electronically before they arrive.",
  },
  {
    icon: "📁",
    problem: "Manual re-entry of patient data",
    solution:
      "Every intake submission flows directly into your ZiggyHQ CRM as a structured record — no re-typing, no lost forms, no manual data entry.",
  },
  {
    icon: "📷",
    problem: "Missing insurance cards and referral documents",
    solution:
      "Patients upload insurance cards, referral letters, or prior authorization docs right in the intake form before their appointment.",
  },
];

const features = [
  {
    title: "E-signature for consent & HIPAA",
    description:
      "Add legally-binding signature fields for consent forms, HIPAA acknowledgments, and treatment authorizations. Signed documents are stored with the patient record.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: "Document & insurance uploads",
    description:
      "Patients upload insurance cards, referral letters, prior auth documents, and medical records directly in the intake form — before the visit.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    title: "Smart conditional intake flows",
    description:
      "Show relevant symptom questions based on reason for visit. Different intake forms for new vs. returning patients. Collect the right clinical information every time.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Auto-CRM patient records",
    description:
      "Every intake auto-creates a structured patient record in ZiggyHQ — searchable, sortable, and ready for your team to act on before the appointment.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Branded patient experience",
    description:
      "Your practice's logo, colors, and a custom domain. Patients see your brand, not a third-party form tool — building trust from the first touchpoint.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Completion analytics",
    description:
      "Track how many patients complete intake before their appointment vs. at check-in. Identify which questions cause drop-off and optimize your form.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const useCases = [
  { specialty: "Primary Care", example: "New patient intake, medical history, medications, consent, insurance upload." },
  { specialty: "Physical Therapy", example: "Injury intake, functional assessment questions, prior treatment history, e-sign consent." },
  { specialty: "Mental Health", example: "Intake questionnaire, symptom scales, release of information, HIPAA acknowledgment signature." },
  { specialty: "Chiropractic", example: "Pain location/severity intake, health history, auto accident details, consent forms." },
  { specialty: "Dental", example: "Medical history, current medications, dental anxiety screening, insurance upload, e-sign consent." },
  { specialty: "Urgent Care", example: "Chief complaint, symptom onset, insurance card upload, consent to treat — before they walk in." },
];

export default function HealthcarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-20 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-accent/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs text-zinc-400 font-medium">For Healthcare</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            HIPAA-friendly
            <br />
            <span className="text-accent">patient intake forms.</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Replace paper clipboards with secure digital intake. Patients complete forms before they arrive. E-signatures, document uploads, and clinical data — organized and ready before the appointment.
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

      {/* Before / After */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              The old way vs the ZiggyIntake way
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="bg-card border border-red-500/20 rounded-2xl p-7">
              <div className="text-red-400 text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                The old way
              </div>
              <ul className="space-y-4">
                {[
                  "Paper clipboards in the waiting room",
                  "Staff manually entering data into systems",
                  "Chasing patients for missing signatures",
                  "Insurance cards copied at front desk",
                  "Forms filed in folders (or lost entirely)",
                  "New patients arrive late because of intake",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-500">
                    <svg className="w-4 h-4 text-red-500/50 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-card border border-accent/30 rounded-2xl p-7">
              <div className="text-accent text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                With ZiggyIntake
              </div>
              <ul className="space-y-4">
                {[
                  "Digital link sent via SMS or email before appointment",
                  "Patient data auto-populates in ZiggyHQ CRM",
                  "Consent signed digitally in the form",
                  "Insurance card uploaded from patient's phone",
                  "All records organized, searchable, secure",
                  "Patients arrive ready — staff ready too",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                    <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Common intake problems. Solved.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {painPoints.map((item) => (
              <div key={item.problem} className="bg-card border border-border rounded-xl p-6">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-semibold mb-2 text-zinc-300">{item.problem}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Features for healthcare providers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases by Specialty */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Works for every specialty</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((item) => (
              <div key={item.specialty} className="bg-card border border-border rounded-xl p-5 hover:border-accent/30 transition-colors">
                <div className="text-accent font-bold text-sm mb-2">{item.specialty}</div>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4">
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
              &ldquo;We switched from paper intake at our physio practice and the difference is night and day. Patients arrive with forms already complete. Signatures are done. Insurance is uploaded. Our front desk now has time to actually welcome people instead of doing data entry.&rdquo;
            </p>
            <div>
              <div className="font-semibold">Sarah K.</div>
              <div className="text-sm text-zinc-500">Practice Manager, KineCare Health</div>
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
                Modernize your patient intake today.
              </h2>
              <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                Digital intake forms that patients complete before they arrive. Secure, signed, and auto-organized. $19/mo.
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
