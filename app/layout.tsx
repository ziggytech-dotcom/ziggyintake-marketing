import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ZiggyIntake — Forms that turn into leads automatically.",
  description:
    "ZiggyIntake turns every form submission into a lead. Smart intake forms with conditional logic, e-signature, file uploads, and direct ZiggyHQ CRM integration. $19/mo flat.",
  keywords:
    "intake forms, lead capture, form builder, conditional logic, e-signature, ZiggyHQ, CRM integration",
  openGraph: {
    title: "ZiggyIntake — Forms that turn into leads automatically.",
    description:
      "Smart intake forms that auto-flow into your CRM. $19/mo flat. No per-submission fees.",
    url: "https://ziggyintake.com",
    siteName: "ZiggyIntake",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZiggyIntake — Forms that turn into leads automatically.",
    description:
      "Smart intake forms that auto-flow into your CRM. $19/mo flat. No per-submission fees.",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
