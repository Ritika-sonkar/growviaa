import { ArrowRight, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onGetStarted: () => void;
}

export function CTASection({ onGetStarted }: CTASectionProps) {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        <div className="glass-card p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-accent/10 pointer-events-none" />
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <span className="badge-active mb-6 inline-flex">
              <Sparkles size={14} />
              Ready to begin?
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 text-balance">
              Your Engineering Future <br className="hidden md:block" />
              Starts <span className="gradient-text">Today</span>
            </h2>

            <p className="text-lavender-300 text-base md:text-lg max-w-2xl mx-auto mb-8 text-balance">
              Join GROWVIA and take the first step toward a successful career in tech.
              Explore your interests, build skills, and chart your path — all in one place.
            </p>

            <button onClick={onGetStarted} className="btn-primary text-base group mx-auto">
              Start Your Journey
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
