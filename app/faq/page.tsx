'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const faqs = [
  { q: `Is there a response limit?`, a: `No. Both Starter and Pro include unlimited responses. We don't charge you more because your forms are performing well.` },
  { q: `Can I embed forms on my website?`, a: `Yes. Every ZiggyIntake form can be embedded as an iframe or inline widget on any website, landing page, or Webflow site.` },
  { q: `How does the CRM sync work?`, a: `Pro plan includes native ZiggyHQ sync. When a form is submitted, ZiggyIntake checks if a contact with that email exists in ZiggyHQ. If yes, it updates. If not, it creates.` },
  { q: `Are electronic signatures legally binding?`, a: `Yes. ZiggyIntake e-signatures comply with the ESIGN Act (US) and eIDAS (EU). Every signature is logged with a timestamp, IP address, and email.` },
  { q: `Can respondents upload files?`, a: `Yes. Add a file upload field to any form. Respondents can upload any file type up to the configured size limit. Files are stored securely.` },
  { q: `How many forms can I create?`, a: `Starter includes 5 forms at $15/mo. Pro includes unlimited forms at $19/mo. The difference is just $4/month for most businesses.` },
]

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#38bdf8] mb-4">FAQ</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Frequently asked questions</h1>
          <p className="text-xl text-[#b3b3b3]">Everything you need to know about ZiggyIntake.</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3 mb-16">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#38bdf8]/20 transition-colors">
                <button className="w-full flex items-center justify-between p-6 md:p-8 text-left" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#38bdf8] flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {open === i && <div className="px-6 md:px-8 pb-6 md:pb-8"><p className="text-[#b3b3b3] text-lg leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
          <div className="bg-[#111111] border border-[#38bdf8]/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Still have questions?</h2>
            <p className="text-[#b3b3b3] mb-6">Our team is happy to help.</p>
            <Link href="https://app.ziggyintake.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#38bdf8] text-white rounded-xl font-semibold hover:opacity-90 transition-all">Start Free Trial</Link>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
