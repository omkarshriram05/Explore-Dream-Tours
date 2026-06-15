import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import logo from '../../imports/EDT_NEW_LOGO.jpg.jpeg';

const activeClass = 'text-[#d4a017] font-semibold relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#d4a017] after:rounded-full';
const inactiveClass = 'text-gray-700 hover:text-[#d4a017] transition-colors relative';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const location = useLocation();

  const isDestinationsActive =
    location.pathname === '/domestic' || location.pathname === '/international';

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? activeClass : inactiveClass;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Explore Dream Tours" className="h-16 w-auto" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#1a2a6c] via-[#d4a017] to-[#e8621a] bg-clip-text text-transparent">
              Explore Dream Tours
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            {/* Destinations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDestinationsOpen(true)}
              onMouseLeave={() => setIsDestinationsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 transition-colors relative ${
                  isDestinationsActive
                    ? 'text-[#d4a017] font-semibold after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#d4a017] after:rounded-full'
                    : 'text-gray-700 hover:text-[#d4a017]'
                }`}
              >
                Destinations
                <ChevronDown className={`w-4 h-4 transition-transform ${isDestinationsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDestinationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                  <div className="p-2">
                    <NavLink
                      to="/domestic"
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-[#1a2a6c]/10 text-[#1a2a6c] font-semibold'
                            : 'text-gray-700 hover:bg-[#1a2a6c]/10 hover:text-[#1a2a6c]'
                        }`
                      }
                    >
                      🇮🇳 Domestic Destinations
                    </NavLink>
                    <NavLink
                      to="/international"
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-[#1a2a6c]/10 text-[#1a2a6c] font-semibold'
                            : 'text-gray-700 hover:bg-[#1a2a6c]/10 hover:text-[#1a2a6c]'
                        }`
                      }
                    >
                      <Globe className="w-4 h-4 inline-block mr-1.5 align-text-bottom" />International Destinations
                    </NavLink>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#1a2a6c]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-3">
            <div className="flex flex-col space-y-1">
              <NavLink
                to="/"
                end
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `py-2.5 px-3 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-[#d4a017]/10 text-[#d4a017] font-semibold'
                      : 'text-gray-700 hover:text-[#d4a017]'
                  }`
                }
              >
                Home
              </NavLink>

              <div>
                <button
                  onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
                  className={`w-full text-left py-2.5 px-3 rounded-lg text-sm flex items-center justify-between transition-colors ${
                    isDestinationsActive
                      ? 'bg-[#d4a017]/10 text-[#d4a017] font-semibold'
                      : 'text-gray-700 hover:text-[#d4a017]'
                  }`}
                >
                  Destinations
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDestinationsOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDestinationsOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    <NavLink
                      to="/domestic"
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block py-2.5 px-3 rounded-lg text-sm transition-colors ${
                          isActive
                            ? 'bg-[#1a2a6c]/10 text-[#1a2a6c] font-semibold'
                            : 'text-gray-600 hover:text-[#1a2a6c]'
                        }`
                      }
                    >
                      🇮🇳 Domestic Destinations
                    </NavLink>
                    <NavLink
                      to="/international"
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block py-2.5 px-3 rounded-lg text-sm transition-colors ${
                          isActive
                            ? 'bg-[#1a2a6c]/10 text-[#1a2a6c] font-semibold'
                            : 'text-gray-600 hover:text-[#1a2a6c]'
                        }`
                      }
                    >
                      <Globe className="w-4 h-4 inline-block mr-1.5 align-text-bottom" />International Destinations
                    </NavLink>
                  </div>
                )}
              </div>

              {[
                { to: '/services', label: 'Services' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `py-2.5 px-3 rounded-lg text-sm transition-colors ${
                      isActive
                        ? 'bg-[#d4a017]/10 text-[#d4a017] font-semibold'
                        : 'text-gray-700 hover:text-[#d4a017]'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
