"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0.5 text-xl font-bold tracking-tight">
            <span className="text-ziggy">Ziggy</span>
            <span className="text-white">Intake</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/features"
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-150"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-150"
            >
              Pricing
            </Link>
            <div className="relative group">
              <button className="text-sm text-zinc-400 hover:text-white transition-colors duration-150 flex items-center gap-1">
                Compare
                <svg
                  className="w-3.5 h-3.5 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-44 bg-card border border-border rounded-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 shadow-xl shadow-black/50">
                <Link
                  href="/vs/typeform"
                  className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  vs Typeform
                </Link>
                <Link
                  href="/vs/jotform"
                  className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  vs Jotform
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://app.ziggyintake.com"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Log in
            </a>
            <a
              href="https://app.ziggyintake.com/signup"
              className="inline-flex items-center gap-2 bg-accent hover:bg-violet-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-150"
            >
              Get Started Free
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/features"
              className="block text-sm text-zinc-400 hover:text-white py-2"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block text-sm text-zinc-400 hover:text-white py-2"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/vs/typeform"
              className="block text-sm text-zinc-400 hover:text-white py-2"
              onClick={() => setMobileOpen(false)}
            >
              vs Typeform
            </Link>
            <Link
              href="/vs/jotform"
              className="block text-sm text-zinc-400 hover:text-white py-2"
              onClick={() => setMobileOpen(false)}
            >
              vs Jotform
            </Link>
            <div className="pt-2 border-t border-border">
              <a
                href="https://app.ziggyintake.com/signup"
                className="block w-full text-center bg-accent hover:bg-violet-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
