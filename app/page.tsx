'use client'

import { useState } from 'react'

const ACCENT = '#38bdf8'
const SIGNUP = 'https://app.ziggyintake.com/signup'
const LOGIN  = 'https://app.ziggyintake.com/login'

const faqs = [
  {
    q: 'How much does ZiggyIntake cost?',
    a: 'ZiggyIntake starts at $15/mo on the Starter plan (5 forms, unlimited responses). Pro is $19/mo for unlimited forms, unlimited responses, conditional logic, file uploads, electronic signatures, and auto-CRM sync. All plans include a 14-day free trial — no credit card required.',
  },
  {
    q: 'How is ZiggyIntake different from Typeform?',
    a: 'Typeform limits responses to 100/month on their entry plan and charges $29–$99/mo. ZiggyIntake has zero response limits on every plan, starting at $15/mo. Plus we auto-sync every lead directly to ZiggyHQ CRM — Typeform doesn\'t do that.',
  },
  {
    q: 'Does ZiggyIntake sync leads to my CRM automatically?',
    a: 'Yes — every form submission auto-syncs to ZiggyHQ CRM in real time. New leads appear in your pipeline instantly, with all form fields mapped to contact records. No manual exports, no Zapier required.',
  },
  {
    q: 'Can I add conditional logic to my forms?',
    a: 'Yes — conditional logic is built into the Pro plan. Show or hide fields based on previous answers, route respondents down different paths, and build smart intake flows without writing code.',
  },
  {
    q: 'How does the 14-day free trial work?',
    a: 'Sign up and get full access for 14 days — no credit card required. If it\'s not for you, just walk away. Nothing to cancel.',
  },
  {
    q: 'Can I embed ZiggyIntake forms on my website?',
    a: 'Yes. Every form gets an embed snippet you can drop into any website. Inline embed, popup, or slide-in — choose whatever fits your layout. Works with any site builder.',
  },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: '#080808', color: '#fff', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif', minHeight: '100vh' }}>

      {/* ── NAV ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(8,8,8,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1a1a1a', padding: '0 24px',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontSize: 22, fontWeight: 700, color: '#fff', textDecoration: 'none', letterSpacing: '-0.5px' }}>
            Ziggy<span style={{ color: ACCENT }}>Intake</span>
          </a>
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <a href="#features" style={{ color: '#888', fontSize: 14, textDecoration: 'none' }}>Features</a>
            <a href="/compare/typeform" style={{ color: '#888', fontSize: 14, textDecoration: 'none' }}>vs Typeform</a>
            <a href="/compare/jotform" style={{ color: '#888', fontSize: 14, textDecoration: 'none' }}>vs Jotform</a>
            <a href="#pricing" style={{ color: '#888', fontSize: 14, textDecoration: 'none' }}>Pricing</a>
            <a href={LOGIN} style={{ color: '#888', fontSize: 14, textDecoration: 'none' }}>Sign In</a>
            <a href={SIGNUP} style={{
              background: ACCENT, color: '#000', textDecoration: 'none',
              padding: '9px 18px', borderRadius: 8, fontSize: 14, fontWeight: 700,
            }}>Start Free Trial</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ padding: '100px 24px 80px', textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.25)',
          borderRadius: 99, padding: '6px 16px', fontSize: 13, color: ACCENT, fontWeight: 600,
          marginBottom: 32, letterSpacing: '0.02em',
        }}>
          Typeform alternative · $19/mo unlimited · Auto-CRM sync
        </div>

        <h1 style={{
          fontSize: 'clamp(44px,6vw,72px)', fontWeight: 800, lineHeight: 1.06,
          letterSpacing: '-2px', marginBottom: 28, color: '#fff',
        }}>
          Intake forms that{' '}
          <span style={{ color: ACCENT }}>actually convert</span>
        </h1>

        <p style={{ fontSize: 20, color: '#888', lineHeight: 1.65, marginBottom: 44, maxWidth: 680, margin: '0 auto 44px' }}>
          Typeform charges $29/month and limits your responses. We built unlimited forms, unlimited responses,
          conditional logic, file uploads, and auto-CRM sync for{' '}
          <strong style={{ color: '#fff' }}>$19/mo.</strong>
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
          <a href={SIGNUP} style={{
            background: ACCENT, color: '#000', textDecoration: 'none',
            padding: '16px 32px', borderRadius: 10, fontSize: 16, fontWeight: 700,
          }}>
            Start Free Trial — 14 days free
          </a>
          <a href="#pricing" style={{
            background: 'transparent', color: '#fff', textDecoration: 'none',
            padding: '16px 32px', borderRadius: 10, fontSize: 16, fontWeight: 600, border: '1px solid #2a2a2a',
          }}>
            See Pricing
          </a>
        </div>

        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
          {['14-day free trial', 'No credit card', 'Cancel anytime'].map(b => (
            <span key={b} style={{ fontSize: 13, color: '#555' }}>
              <span style={{ color: ACCENT, marginRight: 6 }}>✓</span>{b}
            </span>
          ))}
        </div>
      </section>

      {/* ── PRODUCT PLACEHOLDER ── */}
      <section style={{ padding: '0 24px 80px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{
          background: 'linear-gradient(135deg,#111 0%,#001520 100%)',
          border: '1px solid #2a2a2a', borderRadius: 20,
          padding: '80px 40px', textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(ellipse 60% 50% at 50% 0%,rgba(56,189,248,0.12) 0%,transparent 70%)`,
            pointerEvents: 'none',
          }} />
          <div style={{ fontSize: 48, marginBottom: 16 }}>📋</div>
          <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10, color: '#fff' }}>Product screenshot coming soon</h3>
          <p style={{ color: '#555', fontSize: 15 }}>Form builder · Conditional logic · Lead feed · CRM sync dashboard</p>
        </div>
      </section>

      {/* ── FACTS BAR ── */}
      <section style={{
        background: '#0d0d0d', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a',
        padding: '28px 24px',
      }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px 40px',
        }}>
          {[
            '$19/mo — unlimited everything',
            'Auto-syncs leads to ZiggyHQ CRM',
            'Conditional logic built in',
            'Support from the team that built it',
          ].map(fact => (
            <span key={fact} style={{ fontSize: 14, color: '#888', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: ACCENT, fontWeight: 700 }}>✓</span> {fact}
            </span>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: '96px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, letterSpacing: '-1px', marginBottom: 16 }}>
            Every lead captured. Every one.
          </h2>
          <p style={{ fontSize: 17, color: '#666', maxWidth: 500, margin: '0 auto' }}>
            No response limits. No response caps. Every submission syncs to your CRM automatically.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
          {[
            {
              icon: '∞',
              title: 'Unlimited Forms',
              desc: 'Build as many forms as you need — contact forms, intake questionnaires, service applications, surveys. No limits on the Pro plan.',
            },
            {
              icon: '🔀',
              title: 'Conditional Logic',
              desc: 'Show or hide fields based on previous answers. Route respondents down different paths. Build smart intake flows that feel personal.',
            },
            {
              icon: '📎',
              title: 'File Uploads',
              desc: 'Let clients upload documents, photos, contracts, or IDs directly in the form. Everything stored securely and attached to their record.',
            },
            {
              icon: '🔗',
              title: 'Auto-CRM Sync',
              desc: 'Every submission auto-syncs to ZiggyHQ CRM in real time. New leads appear in your pipeline instantly — no manual data entry, ever.',
            },
            {
              icon: '✍️',
              title: 'Electronic Signatures',
              desc: 'Collect legally binding e-signatures directly in your intake forms. Contracts, agreements, consent forms — signed before the first call.',
            },
            {
              icon: '🌐',
              title: 'Embed Anywhere',
              desc: 'Drop your form into any website with a single embed snippet. Inline, popup, or slide-in. Works with WordPress, Webflow, Squarespace, and more.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{
              background: '#111', border: '1px solid #1f1f1f', borderRadius: 16, padding: '32px 28px',
            }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: 15, color: '#666', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOUNDING STORY ── */}
      <section style={{
        background: 'linear-gradient(135deg,#001520 0%,#0a0a0a 100%)',
        borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a',
        padding: '96px 24px',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 26, margin: '0 auto 32px',
          }}>
            💡
          </div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, letterSpacing: '-0.8px', marginBottom: 28, lineHeight: 1.2 }}>
            Why we built ZiggyIntake
          </h2>
          <p style={{ fontSize: 19, color: '#999', lineHeight: 1.8, marginBottom: 32 }}>
            Typeform was capping our responses at 100/month on the entry plan. Every lead form we embedded was hitting the limit.
            We built unlimited forms with direct CRM sync — for $19/month.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            {[
              { stat: '$15/mo', label: 'Starter price' },
              { stat: 'Unlimited', label: 'responses' },
              { stat: 'CRM sync', label: 'automatic' },
              { stat: '14 days', label: 'free trial' },
            ].map(({ stat, label }) => (
              <div key={stat} style={{
                background: '#111', border: '1px solid #1f1f1f', borderRadius: 12,
                padding: '20px 28px', textAlign: 'center', minWidth: 130,
              }}>
                <div style={{ fontSize: 26, fontWeight: 700, color: ACCENT, letterSpacing: '-0.5px' }}>{stat}</div>
                <div style={{ fontSize: 13, color: '#555', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: '96px 24px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, letterSpacing: '-0.8px', marginBottom: 12 }}>
            Simple pricing. No surprises.
          </h2>
          <p style={{ color: '#666', fontSize: 16 }}>Typeform is $29–$99. Jotform is $39–$99. We're $19.</p>
        </div>

        {/* Competitor teaser */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12,
          marginBottom: 40,
        }}>
          {[
            { name: 'Typeform', price: '$29–$99/mo', note: 'response limits on lower tiers' },
            { name: 'Jotform', price: '$39–$99/mo', note: 'limits on submissions + storage' },
            { name: 'ZiggyIntake', price: '$15/mo', price2: '→ $19/mo Pro', note: 'unlimited everything + CRM sync', accent: true },
          ].map(({ name, price, price2, note, accent }) => (
            <div key={name} style={{
              background: accent ? 'rgba(56,189,248,0.07)' : '#0d0d0d',
              border: accent ? `1px solid rgba(56,189,248,0.3)` : '1px solid #1a1a1a',
              borderRadius: 12, padding: '20px 22px', textAlign: 'center',
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: accent ? ACCENT : '#555', marginBottom: 4 }}>{name}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: accent ? '#fff' : '#444', letterSpacing: '-0.5px' }}>{price}</div>
              {price2 && <div style={{ fontSize: 14, color: ACCENT, fontWeight: 600 }}>{price2}</div>}
              <div style={{ fontSize: 12, color: '#555', marginTop: 6 }}>{note}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
          {[
            {
              name: 'Starter',
              price: '$15',
              sub: '/mo',
              highlight: false,
              desc: 'For businesses getting started with lead capture and intake automation.',
              features: [
                '5 forms',
                'Unlimited responses',
                'File uploads',
                'Embed anywhere',
                'Email notifications',
                'Email support',
              ],
            },
            {
              name: 'Pro',
              price: '$19',
              sub: '/mo',
              highlight: true,
              desc: 'Unlimited everything — forms, responses, logic, signatures, and CRM sync.',
              features: [
                'Unlimited forms',
                'Unlimited responses',
                'Conditional logic',
                'File uploads',
                'Auto-CRM sync (ZiggyHQ)',
                'Electronic signatures',
                'Embed anywhere',
                'Priority support',
              ],
            },
          ].map(({ name, price, sub, highlight, desc, features }) => (
            <div key={name} style={{
              background: '#111',
              border: highlight ? `2px solid ${ACCENT}` : '1px solid #1f1f1f',
              borderRadius: 20, padding: '36px 28px', position: 'relative',
            }}>
              {highlight && (
                <div style={{
                  position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                  background: ACCENT, color: '#000', fontSize: 11, fontWeight: 700,
                  padding: '4px 14px', borderRadius: 99, letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                }}>Most Popular</div>
              )}
              <div style={{ fontSize: 13, fontWeight: 700, color: highlight ? ACCENT : '#555', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>{name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 10 }}>
                <span style={{ fontSize: 52, fontWeight: 700, color: '#fff', letterSpacing: '-2px' }}>{price}</span>
                <span style={{ fontSize: 16, color: '#555' }}>{sub}</span>
              </div>
              <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6, marginBottom: 28 }}>{desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: 28 }}>
                {features.map(item => (
                  <li key={item} style={{ padding: '8px 0', fontSize: 14, color: '#ccc', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid #1a1a1a' }}>
                    <span style={{ color: ACCENT, fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href={SIGNUP} style={{
                display: 'block', textDecoration: 'none', textAlign: 'center',
                background: highlight ? ACCENT : 'transparent',
                color: highlight ? '#000' : '#fff',
                border: highlight ? 'none' : '1px solid #333',
                padding: '14px', borderRadius: 10, fontSize: 15, fontWeight: 700,
              }}>
                Start Free Trial
              </a>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: '#444' }}>
          14-day free trial · No credit card required · Cancel anytime
        </p>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '96px 24px', maxWidth: 740, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(28px,4vw,38px)', fontWeight: 700, letterSpacing: '-0.6px', marginBottom: 48, textAlign: 'center' }}>
          Frequently asked questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqs.map((item, i) => (
            <div key={i} style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 10, overflow: 'hidden' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%', padding: '20px 24px', fontSize: 16, fontWeight: 600, color: '#fff',
                  cursor: 'pointer', background: 'none', border: 'none',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left',
                }}
              >
                {item.q}
                <span style={{ color: ACCENT, fontSize: 22, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>
                  {openFaq === i ? '−' : '+'}
                </span>
              </button>
              {openFaq === i && (
                <div style={{ padding: '0 24px 20px', fontSize: 15, color: '#777', lineHeight: 1.7, borderTop: '1px solid #1a1a1a', paddingTop: 16 }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        padding: '100px 24px', textAlign: 'center',
        background: 'linear-gradient(180deg,#0a0a0a 0%,#001520 100%)',
        borderTop: '1px solid #1a1a1a',
      }}>
        <h2 style={{ fontSize: 'clamp(36px,5vw,58px)', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: 16, lineHeight: 1.1 }}>
          Ready to capture every lead automatically?
        </h2>
        <p style={{ fontSize: 20, color: '#666', marginBottom: 16, fontWeight: 500 }}>
          Unlimited forms. Unlimited responses. Auto-synced to your CRM.
        </p>
        <p style={{ fontSize: 16, color: '#555', marginBottom: 44 }}>
          14 days free. No credit card. Cancel anytime.
        </p>
        <a href={SIGNUP} style={{
          display: 'inline-block', background: ACCENT, color: '#000', textDecoration: 'none',
          padding: '18px 44px', borderRadius: 12, fontSize: 18, fontWeight: 700, letterSpacing: '-0.3px',
        }}>
          Start Free Trial →
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#050505', borderTop: '1px solid #111', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, textAlign: 'center' }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>
            Ziggy<span style={{ color: ACCENT }}>Intake</span>
          </div>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              ['Features', '#features'],
              ['vs Typeform', '/compare/typeform'],
              ['vs Jotform', '/compare/jotform'],
              ['Pricing', '#pricing'],
              ['Blog', '/blog'],
              ['Privacy', '/privacy'],
              ['Terms', '/terms'],
              ['Sign In', LOGIN],
            ].map(([label, href]) => (
              <a key={label} href={href} style={{ color: '#555', fontSize: 14, textDecoration: 'none' }}>{label}</a>
            ))}
          </div>
          <p style={{ fontSize: 13, color: '#333' }}>
            Part of{' '}
            <a href="https://ziggybusiness.com" style={{ color: '#555', textDecoration: 'none' }}>ZiggyTech Business Suite</a>
          </p>
          <p style={{ fontSize: 12, color: '#2a2a2a' }}>© 2026 ZiggyIntake. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}
