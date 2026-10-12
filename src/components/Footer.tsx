import { Rocket, Github, Twitter, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'landing' | 'dashboard') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const links = [
    { label: 'Home', target: 'hero' as const, page: 'landing' as const },
    { label: 'Features', target: 'features' as const, page: 'landing' as const },
    { label: 'Journey', target: 'journey' as const, page: 'landing' as const },
    { label: 'Dashboard', target: null, page: 'dashboard' as const },
  ];

  const handleLinkClick = (link: typeof links[number]) => {
    if (link.page !== 'landing') {
      onNavigate(link.page);
      return;
    }
    onNavigate('landing');
    setTimeout(() => {
      if (link.target) {
        document.getElementById(link.target)?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="border-t border-purple-800/20 bg-midnight-950/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-cta flex items-center justify-center">
                <Rocket size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold font-display text-white">
                GROW<span className="gradient-text">VIA</span>
              </span>
            </div>
            <p className="text-lavender-400 text-sm leading-relaxed max-w-md">
              Grow With Us. Your personalized companion for navigating the B.Tech CSE journey —
              from first-year exploration to career launch.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[Github, Twitter, Linkedin, Mail].map((SocialIcon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg border border-purple-700/30 bg-purple-900/20 flex items-center justify-center text-lavender-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-800/30 transition-all"
                >
                  <SocialIcon size={16} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="text-sm text-lavender-400 hover:text-purple-300 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Get Started</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="text-sm text-lavender-400 hover:text-purple-300 transition-colors"
                >
                  First Year Dashboard
                </button>
              </li>
              <li className="text-sm text-lavender-500/60">
                Second Year <span className="text-xs">(Coming Soon)</span>
              </li>
              <li className="text-sm text-lavender-500/60">
                Third Year <span className="text-xs">(Coming Soon)</span>
              </li>
              <li className="text-sm text-lavender-500/60">
                Fourth Year <span className="text-xs">(Coming Soon)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-purple-800/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-lavender-500/70">
            © 2026 GROWVIA. Grow With Us. Built for students, by students.
          </p>
          <p className="text-xs text-lavender-500/70">
            Frontend Prototype · B.Tech CSE First Year
          </p>
        </div>
      </div>
    </footer>
  );
}
