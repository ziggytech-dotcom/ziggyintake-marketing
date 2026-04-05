import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const features = [
  { title: `Unlimited Forms`, desc: `Build as many forms as your business needs — lead capture, intake, event registrations, surveys.`, bullets: [`Unlimited forms on Pro`, `30+ field types`, `Multi-step form builder`, `Drag-and-drop editor`, `Mobile-optimized`, `Form duplication`] },
  { title: `Conditional Logic`, desc: `Show or hide fields based on previous answers. Create branching paths that guide respondents intelligently.`, bullets: [`Field show/hide rules`, `Page skip logic`, `Multi-path branching`, `Calculation fields`, `Dynamic required fields`, `Preview all paths`] },
  { title: `File Uploads`, desc: `Let respondents upload files directly in your form. Stored securely and linked to their submission.`, bullets: [`Any file type`, `Multiple files per submission`, `Max file size settings`, `Virus scan on upload`, `Linked to submission`, `Download all as ZIP`] },
  { title: `Electronic Signatures`, desc: `Add a signature field to any form. Legally binding e-signatures with timestamp and IP logging.`, bullets: [`Draw or type signature`, `Timestamp and IP logging`, `ESIGN compliant`, `Signature certificate`, `Required signature enforcement`, `Confirmation email`] },
  { title: `Auto-CRM Sync`, desc: `Every ZiggyIntake submission automatically creates or updates a contact in ZiggyHQ. No Zapier needed.`, bullets: [`Native ZiggyHQ integration`, `Auto-create contacts`, `Auto-update existing`, `Field mapping`, `Duplicate detection`, `Tag contacts from answers`] },
  { title: `Analytics`, desc: `See form conversion rates, drop-off points, average completion time, and answer distribution.`, bullets: [`Conversion rate tracking`, `Drop-off field analysis`, `Average completion time`, `Answer distribution charts`, `UTM source tracking`, `A/B test variants (Pro)`] },
]

export default function FeaturesPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#38bdf8]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#38bdf8] mb-4">Features</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Everything ZiggyIntake can do</h1>
          <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto mb-8">Every feature explained. No fluff.</p>
          <Link href="https://app.ziggyintake.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#38bdf8] text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all">
            Start Free Trial — 14 days free
          </Link>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {features.map((f, i) => (
            <div key={f.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-start`}>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">{f.title}</h2>
                <p className="text-lg text-[#b3b3b3] leading-relaxed mb-6">{f.desc}</p>
                <ul className="space-y-2">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[#b3b3b3]">
                      <div className="w-5 h-5 rounded-full bg-[#38bdf8]/20 border border-[#38bdf8]/40 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-[#111111] border border-[#1f1f1f] rounded-2xl aspect-video flex items-center justify-center">
                <p className="text-[#555] text-sm">Screenshot coming soon</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to see it in action?</h2>
          <p className="text-xl text-[#b3b3b3] mb-8">14-day free trial. No credit card required.</p>
          <Link href="https://app.ziggyintake.com/signup" className="inline-flex items-center gap-2 px-10 py-5 bg-[#38bdf8] text-white rounded-xl font-bold text-xl hover:opacity-90 transition-all">Start Free Trial</Link>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
