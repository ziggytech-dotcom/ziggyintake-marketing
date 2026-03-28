import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-0.5 text-xl font-bold tracking-tight mb-3">
              <span className="text-ziggy">Ziggy</span>
              <span className="text-white">Intake</span>
            </Link>
            <p className="text-sm text-zinc-500 max-w-xs leading-relaxed mb-4">
              Forms that turn into leads automatically. The smartest intake form builder for modern businesses.
            </p>
            <p className="text-xs text-zinc-600 font-medium uppercase tracking-wider">
              Part of ZiggyTech Business Suite
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-sm text-zinc-500 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-zinc-500 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="https://app.ziggyintake.com/signup" className="text-sm text-zinc-500 hover:text-white transition-colors">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="https://app.ziggyintake.com" className="text-sm text-zinc-500 hover:text-white transition-colors">
                  Log In
                </a>
              </li>
            </ul>
          </div>

          {/* Compare Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Compare</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/vs/typeform" className="text-sm text-zinc-500 hover:text-white transition-colors">
                  vs Typeform
                </Link>
              </li>
              <li>
                <Link href="/vs/jotform" className="text-sm text-zinc-500 hover:text-white transition-colors">
                  vs Jotform
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Industries</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/service-businesses" className="text-sm text-zinc-500 hover:text-white transition-colors">
                  Service Businesses
                </Link>
              </li>
              <li>
                <Link href="/agencies" className="text-sm text-zinc-500 hover:text-white transition-colors">
                  Agencies
                </Link>
              </li>
              <li>
                <Link href="/healthcare" className="text-sm text-zinc-500 hover:text-white transition-colors">
                  Healthcare
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} ZiggyTech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
