import { Outlet, Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Phone, Mail, Instagram } from 'lucide-react';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Outlet />

      {/* Footer */}
      <footer className="bg-[#0e1a3f] text-white pt-14 pb-6 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Top: Brand + Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">

            {/* Brand */}
            <div>
              <h3 className="text-[#d4a017] mb-2">Explore Dream Tours</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Turning Dreams Into Journeys — handcrafted travel experiences across India and beyond.
              </p>
              <div className="space-y-2.5 text-sm text-gray-400">
                <a href="tel:+919167989361" className="flex items-center gap-2 hover:text-[#d4a017] transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +91 9167989361
                </a>
                <a href="mailto:info.edreamz@gmail.com" className="flex items-center gap-2 hover:text-[#d4a017] transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  info.edreamz@gmail.com
                </a>
              </div>
              <div className="mt-5">
                <a
                  href="https://www.instagram.com/exploredreamtours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833ab4]/30 via-[#fd1d1d]/20 to-[#fcb045]/20 border border-white/10 rounded-xl px-5 py-3 hover:border-white/30 transition-all group"
                >
                  <Instagram className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-white font-medium">Follow us on Instagram</p>
                    <p className="text-xs text-gray-400">@exploredreamtours</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-[10px] tracking-widest text-gray-500 uppercase mb-4">Quick Links</p>
              <ul className="space-y-2 text-sm text-gray-400">
                {[
                  { label: 'Home', to: '/' },
                  { label: 'Domestic Destinations', to: '/domestic' },
                  { label: 'International Destinations', to: '/international' },
                  { label: 'Services', to: '/services' },
                  { label: 'About Us', to: '/about' },
                  { label: 'Contact', to: '/contact' },
                ].map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="hover:text-[#d4a017] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom: copyright centered */}
          <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-500">
            © 2026 Explore Dream Tours. All rights reserved.
          </div>

        </div>
      </footer>
    </div>
  );
}
