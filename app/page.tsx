import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZiggyIntake — Beautiful forms that actually do something with the answers.",
  description:
    "Smart forms, lead capture & client intake automation. Drag-and-drop builder, conditional logic, file uploads, Supabase sync — $19/mo flat. No response limits.",
  keywords:
    "intake forms, lead capture, form builder, conditional logic, file uploads, Supabase sync, embed forms",
  openGraph: {
    title: "ZiggyIntake — Beautiful forms that actually do something with the answers.",
    description:
      "Smart intake forms for service businesses, agencies & coaches. $19/mo flat. Unlimited responses, no caps, no watermarks.",
    url: "https://ziggyintake.com",
    siteName: "ZiggyIntake",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZiggyIntake — Beautiful forms that actually do something with the answers.",
    description:
      "Smart intake forms for service businesses. $19/mo flat, unlimited responses, Supabase sync.",
  },
};

const ACCENT = "#8b5cf6";
const BG = "#0a0a0a";
const CARD = "#111111";
const BORDER = "1px solid #1f1f1f";
const RADIUS = "14px";

const features = [
  {
    emoji: "🖱️",
    name: "Drag-and-Drop Builder",
    description:
      "Build professional forms in minutes — no code required. Add fields, reorder sections, and launch without touching a line of code.",
  },
  {
    emoji: "🔀",
    name: "Conditional Logic",
    description:
      "Show or hide questions based on previous answers. Build smart forms that adapt to each respondent in real time.",
  },
  {
    emoji: "📎",
    name: "File Uploads",
    description:
      "Let clients attach documents, photos, IDs, contracts, or insurance cards directly inside your intake form.",
  },
  {
    emoji: "📋",
    name: "Multi-Step Forms",
    description:
      "Break long forms into a smooth conversational flow. Higher completion rates, less abandonment.",
  },
  {
    emoji: "🔗",
    name: "Embed Anywhere",
    description:
      "Drop your form on your website, landing page, emails, or link-in-bio. One snippet, works everywhere.",
  },
  {
    emoji: "🗄️",
    name: "Supabase Sync",
    description:
      "All responses sync automatically to your own Supabase database — your data, your infrastructure, always.",
  },
  {
    emoji: "🔔",
    name: "Email Notifications",
    description:
      "Get notified the instant a form is submitted. Real-time alerts so you never miss a new lead.",
  },
  {
    emoji: "🎨",
    name: "Custom Branding",
    description:
      "Add your logo, match your colors, and remove all 'Powered by' watermarks. Forms that look built in-house.",
  },
];

const comingSoon = [
  {
    emoji: "🤝",
    name: "CRM Sync",
    description: "Native ZiggyHQ integration — every submission auto-creates a structured lead in your CRM.",
    badge: "In Development",
    badgeColor: "#ff9500",
  },
  {
    emoji: "💳",
    name: "Payment Collection",
    description: "Collect deposits, booking fees, or one-time payments directly inside your intake form.",
    badge: "Coming Soon",
    badgeColor: "#0066ff",
  },
  {
    emoji: "✍️",
    name: "E-Signature Fields",
    description: "Collect legally-binding signatures on contracts, consent forms, and service agreements.",
    badge: "Coming Soon",
    badgeColor: "#0066ff",
  },
];

const industries = [
  {
    emoji: "💼",
    name: "Agencies & Consultants",
    description: "Client onboarding, project briefs, discovery questionnaires",
  },
  {
    emoji: "🏠",
    name: "Real Estate",
    description: "Buyer/seller questionnaires, lead capture, mortgage pre-qual intake",
  },
  {
    emoji: "🏥",
    name: "Healthcare & Wellness",
    description: "New patient intake, health history, consent forms",
  },
  {
    emoji: "🎓",
    name: "Coaches & Educators",
    description: "Student intake, program application, assessment forms",
  },
  {
    emoji: "🔨",
    name: "Contractors & Home Services",
    description: "Quote requests, project scope forms, inspection checklists",
  },
  {
    emoji: "🎨",
    name: "Photographers & Creatives",
    description: "Booking intake, style questionnaires, licensing agreements",
  },
  {
    emoji: "🐾",
    name: "Pet Services",
    description: "New client intake, pet health history, grooming preferences",
  },
  {
    emoji: "🚗",
    name: "Auto Services",
    description: "Service intake, damage assessment, customer consent",
  },
];

const comparisonRows = [
  { feature: "Price", ziggy: "$19/mo flat", typeform: "$29/mo+" },
  { feature: "Responses/mo", ziggy: "Unlimited", typeform: "Capped on base plans" },
  { feature: "Forms allowed", ziggy: "Unlimited", typeform: "Limited on base plans" },
  { feature: "Conditional logic", ziggy: "✅ Included", typeform: "Higher tiers only" },
  { feature: "File uploads", ziggy: "✅ Included", typeform: "Higher tiers only" },
  { feature: "Custom branding", ziggy: "✅ No watermark", typeform: "Paid add-on" },
  { feature: "Response limits", ziggy: "None — ever", typeform: "Hard caps on lower plans" },
  { feature: "Data ownership", ziggy: "Your Supabase DB", typeform: "Their servers" },
  { feature: "Embed options", ziggy: "Website, email, link-in-bio", typeform: "Embed + share link" },
  { feature: "CRM sync", ziggy: "Coming soon (native)", typeform: "Zapier only ($)" },
];

const faqs = [
  {
    q: "Is there really a 14-day free trial?",
    a: "Yes — start building and collecting responses for free for 14 days. No credit card required. Cancel or subscribe at the end.",
  },
  {
    q: "What happens when I hit my response limit?",
    a: "You never will. ZiggyIntake has zero response limits. Collect as many submissions as you want, forever.",
  },
  {
    q: "Can I embed forms on my existing website?",
    a: "Absolutely. Copy a one-line embed snippet and paste it anywhere — WordPress, Webflow, Squarespace, custom HTML, emails, you name it.",
  },
  {
    q: "Do I need a Supabase account?",
    a: "You can use our built-in response dashboard without any external setup. If you want direct database sync, you connect your own Supabase project — it takes about 2 minutes.",
  },
  {
    q: "How is this different from Typeform?",
    a: "Typeform charges $29/mo and caps responses on base plans. ZiggyIntake is $19/mo with unlimited responses, no watermarks, and your data syncs directly to your own database. See the full comparison below.",
  },
  {
    q: "Can I use my own branding on every form?",
    a: "Yes — your logo, your colors, no 'Powered by ZiggyIntake' anywhere. Every plan includes full white-label branding.",
  },
];

export default function HomePage() {
  return (
    <div style={{ background: BG, color: "#ffffff", fontFamily: "'Space Grotesk', sans-serif" }}>
      <style>{`@media(max-width:768px){.nav-links{display:none}}`}</style>

      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "96px 24px 112px",
          textAlign: "center",
        }}
      >
        {/* Glow blob */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 400,
            background: "rgba(139,92,246,0.10)",
            borderRadius: "50%",
            filter: "blur(120px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: CARD,
              border: BORDER,
              borderRadius: 99,
              padding: "6px 16px",
              marginBottom: 32,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: ACCENT,
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: 12, color: "#a1a1aa", fontWeight: 500 }}>
              14-day free trial — no credit card required
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            Beautiful forms that actually
            <br />
            <span style={{ color: ACCENT }}>do something with the answers.</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "#a1a1aa",
              maxWidth: 600,
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Smart intake forms for service businesses, agencies, and coaches. Capture leads,
            qualify clients, and onboard customers — all without touching a line of code.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
              marginBottom: 56,
            }}
          >
            <a
              href="https://app.ziggyintake.com/signup"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: ACCENT,
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                padding: "14px 28px",
                borderRadius: 10,
                textDecoration: "none",
                transition: "opacity 0.15s",
              }}
            >
              Start Free Trial — $19/mo after
              <span style={{ fontSize: 18 }}>→</span>
            </a>
            <a
              href="#features"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: "#a1a1aa",
                fontWeight: 500,
                fontSize: 14,
                padding: "14px 24px",
                borderRadius: 10,
                border: BORDER,
                textDecoration: "none",
              }}
            >
              See all features ↓
            </a>
          </div>

          {/* Trust badges */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 32,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {[
              "✅ 14-day free trial",
              "✅ No credit card required",
              "✅ Cancel anytime",
            ].map((badge) => (
              <span
                key={badge}
                style={{ fontSize: 13, color: "#52525b", fontWeight: 500 }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem Strip ── */}
      <section
        style={{
          background: "#0d0d0d",
          borderTop: BORDER,
          borderBottom: BORDER,
          padding: "64px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 40,
          }}
        >
          {[
            {
              emoji: "😤",
              title: "Form submissions pile up in email",
              desc: "Clients fill out your form. You manually copy the data into a spreadsheet or CRM. It's 2024 — this shouldn't still be happening.",
            },
            {
              emoji: "💸",
              title: "Typeform charges $29/mo and still caps responses",
              desc: "You hit 100 responses and your form goes dark mid-month. And you're still paying more for a tool that does less.",
            },
            {
              emoji: "🕳️",
              title: "Leads fall through the cracks",
              desc: "Without instant notifications and automated routing, qualified leads sit uncontacted for hours while your competitor follows up in minutes.",
            },
          ].map((pain) => (
            <div key={pain.title} style={{ display: "flex", gap: 16 }}>
              <div style={{ fontSize: 28, flexShrink: 0 }}>{pain.emoji}</div>
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 15,
                    marginBottom: 8,
                    color: "#fff",
                  }}
                >
                  {pain.title}
                </div>
                <div style={{ fontSize: 13, color: "#71717a", lineHeight: 1.6 }}>
                  {pain.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p
              style={{
                color: ACCENT,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Everything included
            </p>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Powerful features. Flat $19/mo.
            </h2>
            <p style={{ color: "#71717a", maxWidth: 500, margin: "0 auto", lineHeight: 1.6 }}>
              No tiers, no upsells, no per-response fees. Every feature below is included from day one.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {features.map((f) => (
              <div
                key={f.name}
                style={{
                  background: CARD,
                  border: BORDER,
                  borderRadius: RADIUS,
                  padding: "24px",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.emoji}</div>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 8 }}>{f.name}</div>
                <div style={{ fontSize: 13, color: "#71717a", lineHeight: 1.6 }}>
                  {f.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coming Soon Strip ── */}
      <section
        style={{
          background: "#0d0d0d",
          borderTop: BORDER,
          borderBottom: BORDER,
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p
              style={{
                color: ACCENT,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              On the roadmap
            </p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700 }}>
              What's coming next
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {comingSoon.map((item) => (
              <div
                key={item.name}
                style={{
                  background: CARD,
                  border: BORDER,
                  borderRadius: RADIUS,
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 24 }}>{item.emoji}</span>
                  <span style={{ fontWeight: 600, fontSize: 15 }}>{item.name}</span>
                  <span
                    style={{
                      marginLeft: "auto",
                      background: item.badgeColor + "20",
                      color: item.badgeColor,
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "3px 10px",
                      borderRadius: 99,
                      border: `1px solid ${item.badgeColor}40`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
                <div style={{ fontSize: 13, color: "#71717a", lineHeight: 1.6 }}>
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p
              style={{
                color: ACCENT,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Built for your industry
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700 }}>
              ZiggyIntake works for everyone who
              <br />
              collects client information
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
              marginBottom: 40,
            }}
          >
            {industries.map((ind) => (
              <div
                key={ind.name}
                style={{
                  background: CARD,
                  border: BORDER,
                  borderRadius: RADIUS,
                  padding: "20px 22px",
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: 24, flexShrink: 0 }}>{ind.emoji}</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
                    {ind.name}
                  </div>
                  <div style={{ fontSize: 12, color: "#71717a", lineHeight: 1.5 }}>
                    {ind.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom callout */}
          <div
            style={{
              background: CARD,
              border: `1px solid ${ACCENT}30`,
              borderRadius: RADIUS,
              padding: "24px 32px",
              textAlign: "center",
            }}
          >
            <p style={{ color: "#a1a1aa", fontSize: 14, marginBottom: 12 }}>
              Don't see your industry? We build custom form setups for any use case.
            </p>
            <a
              href="mailto:hello@ziggyintake.com"
              style={{
                color: ACCENT,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Need a custom form setup? Contact us →
            </a>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section
        id="compare"
        style={{
          background: "#0d0d0d",
          borderTop: BORDER,
          borderBottom: BORDER,
          padding: "96px 24px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p
              style={{
                color: ACCENT,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              How we stack up
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700 }}>
              ZiggyIntake vs Typeform
            </h2>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                background: CARD,
                border: BORDER,
                borderRadius: RADIUS,
                overflow: "hidden",
                minWidth: 600,
              }}
            >
              <thead>
                <tr style={{ borderBottom: BORDER }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "16px 24px",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#71717a",
                      width: "40%",
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      padding: "16px 24px",
                      fontSize: 13,
                      fontWeight: 700,
                      color: ACCENT,
                      textAlign: "center",
                      width: "30%",
                    }}
                  >
                    ZiggyIntake
                    <div style={{ fontSize: 11, fontWeight: 400, marginTop: 2, opacity: 0.7 }}>
                      $19/mo
                    </div>
                  </th>
                  <th
                    style={{
                      padding: "16px 24px",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#71717a",
                      textAlign: "center",
                      width: "30%",
                    }}
                  >
                    Typeform
                    <div style={{ fontSize: 11, fontWeight: 400, marginTop: 2 }}>
                      $29/mo+
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{
                      borderBottom: i < comparisonRows.length - 1 ? BORDER : "none",
                      background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                    }}
                  >
                    <td
                      style={{
                        padding: "14px 24px",
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#d4d4d8",
                      }}
                    >
                      {row.feature}
                    </td>
                    <td
                      style={{
                        padding: "14px 24px",
                        fontSize: 13,
                        textAlign: "center",
                        color: ACCENT,
                        fontWeight: 600,
                      }}
                    >
                      {row.ziggy}
                    </td>
                    <td
                      style={{
                        padding: "14px 24px",
                        fontSize: 13,
                        textAlign: "center",
                        color: "#52525b",
                      }}
                    >
                      {row.typeform}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              marginTop: 32,
              padding: "20px 24px",
              background: `${ACCENT}10`,
              border: `1px solid ${ACCENT}30`,
              borderRadius: RADIUS,
              textAlign: "center",
              fontSize: 14,
              color: "#a1a1aa",
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#fff" }}>Bottom line:</strong> Typeform charges $29/mo and
            caps responses on base plans. ZiggyIntake is $19/mo — unlimited responses, no caps, no
            watermarks. Your data syncs directly to your own database.{" "}
            <a
              href="/vs/typeform"
              style={{ color: ACCENT, textDecoration: "none", fontWeight: 600 }}
            >
              Full comparison →
            </a>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" style={{ padding: "96px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p
            style={{
              color: ACCENT,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Simple pricing
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            One plan. Everything included.
          </h2>
          <p style={{ color: "#71717a", marginBottom: 48, lineHeight: 1.6 }}>
            No tiers. No feature gates. No surprise overage fees at the end of the month.
          </p>

          <div
            style={{
              background: CARD,
              border: `1px solid ${ACCENT}40`,
              borderRadius: 20,
              padding: "48px 40px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 240,
                height: 240,
                background: `${ACCENT}15`,
                borderRadius: "50%",
                filter: "blur(60px)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative" }}>
              <div
                style={{
                  display: "inline-block",
                  background: `${ACCENT}20`,
                  color: ACCENT,
                  fontWeight: 700,
                  fontSize: 12,
                  padding: "4px 14px",
                  borderRadius: 99,
                  marginBottom: 24,
                  border: `1px solid ${ACCENT}40`,
                }}
              >
                14-day free trial
              </div>

              <div style={{ marginBottom: 8 }}>
                <span
                  style={{
                    fontSize: "clamp(3rem, 8vw, 5rem)",
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  $19
                </span>
                <span style={{ fontSize: 20, color: "#71717a", marginLeft: 4 }}>/mo</span>
              </div>
              <p style={{ fontSize: 14, color: "#71717a", marginBottom: 36 }}>
                Everything. Unlimited. Always.
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 40px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px 24px",
                  textAlign: "left",
                }}
              >
                {[
                  "Unlimited forms",
                  "Unlimited responses",
                  "Conditional logic",
                  "File uploads",
                  "Multi-step forms",
                  "Embed anywhere",
                  "Supabase sync",
                  "Email notifications",
                  "Response dashboard",
                  "Custom branding",
                  "Webhooks & integrations",
                  "Priority support",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 13,
                      color: "#d4d4d8",
                    }}
                  >
                    <span style={{ color: ACCENT, fontSize: 15 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://app.ziggyintake.com/signup"
                style={{
                  display: "inline-block",
                  background: ACCENT,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 16,
                  padding: "16px 40px",
                  borderRadius: 10,
                  textDecoration: "none",
                  width: "100%",
                  boxSizing: "border-box" as const,
                  textAlign: "center",
                }}
              >
                Start Free Trial
              </a>
              <p style={{ fontSize: 12, color: "#52525b", marginTop: 12 }}>
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        style={{
          background: "#0d0d0d",
          borderTop: BORDER,
          borderBottom: BORDER,
          padding: "96px 24px",
        }}
      >
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p
              style={{
                color: ACCENT,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              FAQ
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700 }}>
              Common questions
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqs.map((faq) => (
              <div
                key={faq.q}
                style={{
                  background: CARD,
                  border: BORDER,
                  borderRadius: RADIUS,
                  padding: "24px 28px",
                }}
              >
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 15,
                    marginBottom: 10,
                    color: "#fff",
                  }}
                >
                  {faq.q}
                </div>
                <div style={{ fontSize: 14, color: "#71717a", lineHeight: 1.7 }}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              background: `linear-gradient(135deg, ${ACCENT}20, ${CARD})`,
              border: `1px solid ${ACCENT}30`,
              borderRadius: 20,
              padding: "80px 40px",
              textAlign: "center",
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: 500,
                height: 200,
                background: `${ACCENT}10`,
                borderRadius: "50%",
                filter: "blur(60px)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative" }}>
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                Stop losing leads to a broken process.
              </h2>
              <p
                style={{
                  color: "#a1a1aa",
                  fontSize: 16,
                  lineHeight: 1.7,
                  maxWidth: 500,
                  margin: "0 auto 40px",
                }}
              >
                Start collecting smarter today. Build your first form free — no card, no commitment.
              </p>
              <a
                href="https://app.ziggyintake.com/signup"
                style={{
                  display: "inline-block",
                  background: ACCENT,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 16,
                  padding: "16px 40px",
                  borderRadius: 10,
                  textDecoration: "none",
                  marginBottom: 16,
                }}
              >
                Start Your Free Trial →
              </a>
              <br />
              <span style={{ fontSize: 12, color: "#52525b" }}>
                14 days free. $19/mo after. Cancel anytime.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
