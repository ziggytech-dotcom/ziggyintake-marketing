import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const rows = [
  { feature: `Forms included`, ziggy: `Unlimited` },
  { feature: `Responses per month`, ziggy: `Unlimited` },
  { feature: `Conditional logic`, ziggy: true },
  { feature: `File uploads`, ziggy: true },
  { feature: `Embed anywhere`, ziggy: true },
  { feature: `Basic analytics`, ziggy: true },
  { feature: `Email notifications`, ziggy: true },
  { feature: `Electronic signatures`, ziggy: true },
  { feature: `Auto-CRM sync`, ziggy: true },
  { feature: `Advanced analytics`, ziggy: true },
  { feature: `Custom branding`, ziggy: true },
  { feature: `API access`, ziggy: true },
  { feature: `Priority support`, ziggy: true },
]
const reasons = [
  `Save money every month — Typeform charges $29/mo. ZiggyIntake starts at $15/mo.`,
  `ZiggyIntake is built for how small businesses actually operate — not enterprise workflows.`,
  `Get up and running in under an hour. No lengthy onboarding required.`,
  `ZiggyIntake integrates natively with all 9 other ZiggyTech apps. No API setup needed.`,
]

export default function ComparePage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="relative overflow-hidden pt-20 pb-20 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#38bdf8]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-[#2d2d2d] rounded-full px-4 py-1.5 text-sm text-[#b3b3b3] mb-8">ZiggyIntake vs Typeform</div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-[#38bdf8]">ZiggyIntake</span> vs <span className="text-[#b3b3b3]">Typeform</span>
          </h1>
          <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto mb-10">The honest comparison. Same core features. Better pricing for small teams.</p>
          <Link href="https://app.ziggyintake.com/signup" className="bg-[#38bdf8] text-white rounded-xl px-8 py-4 font-semibold text-lg hover:opacity-90 inline-block">Try ZiggyIntake Free</Link>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#111111] border-y border-[#2d2d2d]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">The verdict</h2>
          <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl p-6">
            <p className="text-[#b3b3b3] leading-relaxed">Typeform charges $29/mo and limits responses to 100/month on their base plan. ZiggyIntake Pro is $19/mo with unlimited forms, unlimited responses, conditional logic, file uploads, e-signatures, and native CRM sync.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-[#111111] border-2 border-[#38bdf8]/40 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="px-3 py-1 bg-[#38bdf8] text-white text-xs font-bold rounded-full uppercase">Recommended</span></div>
              <p className="text-xl font-bold text-white mb-2">ZiggyIntake</p>
              <p className="text-5xl font-bold text-[#38bdf8] mb-1">$15<span className="text-xl text-[#b3b3b3]">/mo</span></p>
              <p className="text-sm text-[#38bdf8] mt-2">Full ZiggyTech Suite integration</p>
            </div>
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 text-center">
              <p className="text-xl font-bold text-white mb-2">Typeform</p>
              <p className="text-5xl font-bold text-white mb-1">$29<span className="text-xl text-[#b3b3b3]">/mo</span></p>
              <p className="text-sm text-[#b3b3b3] mt-2">No suite integration</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">Why teams switch to ZiggyIntake</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {reasons.map((r, i) => <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6 hover:border-[#38bdf8]/30 transition-colors"><p className="text-[#b3b3b3] text-sm leading-relaxed">{r}</p></div>)}
          </div>
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden mb-16">
            <div className="grid grid-cols-3 bg-[#1a1a1a] border-b border-[#1f1f1f]">
              <div className="p-4 text-sm font-semibold text-[#b3b3b3]">Feature</div>
              <div className="p-4 text-sm font-semibold text-[#38bdf8] text-center">ZiggyIntake</div>
              <div className="p-4 text-sm font-semibold text-[#b3b3b3] text-center">Typeform</div>
            </div>
            {rows.map((r) => (
              <div key={r.feature} className="grid grid-cols-3 border-b border-[#1f1f1f] last:border-0">
                <div className="p-4 text-sm text-[#b3b3b3]">{r.feature}</div>
                <div className="p-4 text-center">
                  {typeof r.ziggy === 'boolean' ? <svg className="w-5 h-5 text-[#38bdf8] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> : <span className="text-sm text-[#38bdf8] font-medium">{r.ziggy}</span>}
                </div>
                <div className="p-4 text-center">
                  <svg className="w-5 h-5 text-[#555] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center py-12 bg-[#111111] rounded-2xl border border-[#1f1f1f]">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to make the switch?</h2>
            <p className="text-[#b3b3b3] mb-8">14-day free trial. No credit card. Cancel anytime.</p>
            <Link href="https://app.ziggyintake.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#38bdf8] text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all">Try ZiggyIntake Free</Link>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
