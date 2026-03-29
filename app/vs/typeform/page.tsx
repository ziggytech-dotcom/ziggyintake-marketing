import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZiggyIntake vs Typeform — More Features. Less Money.",
  description:
    "ZiggyIntake vs Typeform: $19/mo flat vs $29/mo+. Unlimited responses, no caps, no watermarks, Supabase sync — all included. See why businesses are switching.",
  openGraph: {
    title: "ZiggyIntake vs Typeform — More Features. Less Money.",
    description:
      "Unlimited responses, custom branding, file uploads — all at $19/mo. No caps, no Zapier required.",
    url: "https://ziggyintake.com/vs/typeform",
    siteName: "ZiggyIntake",
    type: "website",
  },
};

const ACCENT = "#8b5cf6";
const BG = "#0a0a0a";
const CARD = "#111111";
const BORDER = "1px solid #1f1f1f";
const RADIUS = "14px";

const comparisonRows = [
  {
    feature: "Price",
    ziggy: "$19/mo flat",
    typeform: "$29/mo+ (basic plan)",
    ziggyWins: true,
  },
  {
    feature: "Responses/mo",
    ziggy: "Unlimited — always",
    typeform: "Capped (10–unlimited depends on tier)",
    ziggyWins: true,
  },
  {
    feature: "Forms allowed",
    ziggy: "Unlimited",
    typeform: "Limited on base plans",
    ziggyWins: true,
  },
  {
    feature: "Conditional logic",
    ziggy: "✅ Included",
    typeform: "Higher tiers only",
    ziggyWins: true,
  },
  {
    feature: "File uploads",
    ziggy: "✅ Included",
    typeform: "Higher tiers only",
    ziggyWins: true,
  },
  {
    feature: "Custom branding",
    ziggy: "✅ No watermarks",
    typeform: "Paid add-on ($50+/mo plan)",
    ziggyWins: true,
  },
  {
    feature: "Response limits",
    ziggy: "None — ever",
    typeform: "Hard caps on lower plans",
    ziggyWins: true,
  },
  {
    feature: "Data ownership",
    ziggy: "Your Supabase DB",
    typeform: "Typeform's servers",
    ziggyWins: true,
  },
  {
    feature: "Embed options",
    ziggy: "Website, email, link-in-bio",
    typeform: "Embed + share link",
    ziggyWins: false,
  },
  {
    feature: "CRM sync",
    ziggy: "Coming soon (native)",
    typeform: "Zapier only ($20-50/mo extra)",
    ziggyWins: true,
  },
];

const switchReasons = [
  {
    emoji: "💰",
    title: "Pay 35% less",
    description:
      "Typeform starts at $29/mo. ZiggyIntake is $19/mo — and includes everything Typeform hides behind higher tiers. Same quality. Lower bill.",
  },
  {
    emoji: "♾️",
    title: "Zero response caps",
    description:
      "Typeform's base plan caps responses. You collect 100 leads and then your form goes dark. ZiggyIntake gives you unlimited responses on every plan, always.",
  },
  {
    emoji: "🗄️",
    title: "Your data, your database",
    description:
      "Typeform stores your responses on their servers. ZiggyIntake syncs every submission directly to your own Supabase database. Data portability built in.",
  },
  {
    emoji: "🎨",
    title: "Custom branding from day one",
    description:
      "Typeform locks white-label branding behind their $50+/mo Business plan. ZiggyIntake removes all watermarks and lets you use your own brand from the very first form.",
  },
  {
    emoji: "📎",
    title: "File uploads included",
    description:
      "Typeform only unlocks file uploads on higher-tier plans. ZiggyIntake includes file uploads at $19/mo — perfect for documents, photos, contracts, and IDs.",
  },
];

export default function VsTypeformPage() {
  return (
    <div style={{ background: BG, color: "#ffffff", fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "96px 24px 80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 350,
            background: "rgba(139,92,246,0.10)",
            borderRadius: "50%",
            filter: "blur(100px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", maxWidth: 820, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: CARD,
              border: BORDER,
              borderRadius: 99,
              padding: "6px 16px",
              marginBottom: 28,
            }}
          >
            <span style={{ fontSize: 12, color: "#71717a", fontWeight: 500 }}>Comparison</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5.5vw, 3.75rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 20,
            }}
          >
            ZiggyIntake vs Typeform
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "#a1a1aa",
              maxWidth: 560,
              margin: "0 auto 40px",
              lineHeight: 1.6,
            }}
          >
            Same beautiful forms. More features. Less than two-thirds the price.
            Here's exactly how they compare.
          </p>

          {/* Price comparison badges */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 40,
              background: CARD,
              border: BORDER,
              borderRadius: 16,
              padding: "24px 48px",
              marginBottom: 48,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: ACCENT }}>$19</div>
              <div style={{ fontSize: 12, color: "#71717a", marginTop: 4 }}>ZiggyIntake/mo</div>
            </div>
            <div style={{ fontSize: 28, color: "#3f3f46", fontWeight: 300 }}>vs</div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: "#52525b",
                  textDecoration: "line-through",
                }}
              >
                $29+
              </div>
              <div style={{ fontSize: 12, color: "#52525b", marginTop: 4 }}>Typeform/mo</div>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
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
              }}
            >
              Switch to ZiggyIntake — $19/mo →
            </a>
          </div>
        </div>
      </section>

      {/* ── Why Switch ── */}
      <section
        style={{
          background: "#0d0d0d",
          borderTop: BORDER,
          borderBottom: BORDER,
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            5 reasons businesses switch from Typeform
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {switchReasons.map((reason) => (
              <div
                key={reason.title}
                style={{
                  background: CARD,
                  border: BORDER,
                  borderRadius: RADIUS,
                  padding: "24px",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{reason.emoji}</div>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 8 }}>
                  {reason.title}
                </div>
                <div style={{ fontSize: 13, color: "#71717a", lineHeight: 1.6 }}>
                  {reason.description}
                </div>
              </div>
            ))}

            {/* Social proof card */}
            <div
              style={{
                background: `linear-gradient(135deg, ${ACCENT}15, ${CARD})`,
                border: `1px solid ${ACCENT}30`,
                borderRadius: RADIUS,
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <p style={{ fontSize: 14, color: "#d4d4d8", lineHeight: 1.6, fontStyle: "italic" }}>
                "We were paying $83/mo for Typeform Business and still needed Zapier to get leads into our CRM. ZiggyIntake is $19 and does it all natively. No-brainer switch."
              </p>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>James W.</div>
                <div style={{ fontSize: 12, color: "#71717a" }}>Owner, Apex Plumbing Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            Side-by-side comparison
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                background: CARD,
                border: BORDER,
                borderRadius: RADIUS,
                overflow: "hidden",
                minWidth: 560,
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
                    <div style={{ fontSize: 11, fontWeight: 400, marginTop: 2 }}>$29/mo+</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{
                      borderBottom:
                        i < comparisonRows.length - 1 ? BORDER : "none",
                      background:
                        i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
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
                        color: row.ziggyWins ? ACCENT : "#d4d4d8",
                        fontWeight: row.ziggyWins ? 600 : 400,
                      }}
                    >
                      {row.ziggy}
                    </td>
                    <td
                      style={{
                        padding: "14px 24px",
                        fontSize: 13,
                        textAlign: "center",
                        color: row.ziggyWins ? "#52525b" : "#d4d4d8",
                      }}
                    >
                      {row.typeform}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom line callout */}
          <div
            style={{
              marginTop: 32,
              padding: "24px 28px",
              background: `${ACCENT}10`,
              border: `1px solid ${ACCENT}30`,
              borderRadius: RADIUS,
              fontSize: 14,
              color: "#a1a1aa",
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: "#fff" }}>Bottom line:</strong> Typeform charges $29/mo and
            caps responses on base plans. ZiggyIntake is $19/mo — unlimited responses, no caps, no
            watermarks. Your data syncs directly to your own database.
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        style={{
          background: "#0d0d0d",
          borderTop: BORDER,
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div
            style={{
              background: `linear-gradient(135deg, ${ACCENT}20, ${CARD})`,
              border: `1px solid ${ACCENT}30`,
              borderRadius: 20,
              padding: "60px 40px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: 400,
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
                  fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                Make the switch today.
              </h2>
              <p style={{ color: "#a1a1aa", fontSize: 15, lineHeight: 1.6, marginBottom: 36 }}>
                Get more features for less than Typeform. Set up in minutes — no migration headaches.
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
                Start Free — $19/mo
              </a>
              <br />
              <span style={{ fontSize: 12, color: "#52525b" }}>
                14-day free trial. No credit card required. Cancel anytime.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
