import { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'landing' | 'dashboard') => void;
  currentPage: 'landing' | 'dashboard';
}

export function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Features', target: 'features' },
    { label: 'Journey', target: 'journey' },
  ];

  const handleNavClick = (target: string) => {
    setMobileOpen(false);
    if (currentPage !== 'landing') {
      onNavigate('landing');
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-midnight-950/85 backdrop-blur-xl border-b border-purple-800/20 shadow-lg shadow-purple-950/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-18">
        <button
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-cta flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300">
            <Rocket size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold font-display text-white tracking-tight">
            GROW<span className="gradient-text">VIA</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleNavClick(link.target)}
              className="px-4 py-2 text-sm font-medium text-lavender-300 hover:text-white rounded-lg hover:bg-purple-800/20 transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
          {currentPage === 'landing' && (
            <button
              onClick={() => onNavigate('dashboard')}
              className="ml-2 btn-primary text-sm py-2 px-5"
            >
              Start Your Journey
            </button>
          )}
          {currentPage === 'dashboard' && (
            <button
              onClick={() => onNavigate('landing')}
              className="ml-2 btn-secondary text-sm py-2 px-5"
            >
              Back to Home
            </button>
          )}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-lavender-200 hover:text-white"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-midnight-950/95 backdrop-blur-xl border-b border-purple-800/20 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleNavClick(link.target)}
              className="px-4 py-3 text-left text-sm font-medium text-lavender-300 hover:text-white rounded-lg hover:bg-purple-800/20 transition-all"
            >
              {link.label}
            </button>
          ))}
          {currentPage === 'landing' ? (
            <button
              onClick={() => {
                setMobileOpen(false);
                onNavigate('dashboard');
              }}
              className="mt-2 btn-primary text-sm py-2.5"
            >
              Start Your Journey
            </button>
          ) : (
            <button
              onClick={() => {
                setMobileOpen(false);
                onNavigate('landing');
              }}
              className="mt-2 btn-secondary text-sm py-2.5"
            >
              Back to Home
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
