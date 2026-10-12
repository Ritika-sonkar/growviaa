import { Sparkles, ArrowRight } from 'lucide-react';
import { ProgressBar } from '@/components/ui/Primitives';

interface WelcomeSectionProps {
  onExplore: () => void;
}

export function WelcomeSection({ onExplore }: WelcomeSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-12">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-card p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

            <span className="badge-active mb-5 inline-flex">
              <Sparkles size={14} />
              First Year · Foundation Stage
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3">
              Welcome to <span className="gradient-text">GROWVIA</span>
            </h1>
            <p className="text-lavender-300 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
              You are at the start of an amazing journey. This dashboard will help you discover
              your interests, explore career paths, and build the skills you need — one step at a time.
            </p>

            <button onClick={onExplore} className="btn-primary group">
              Explore Career Interests
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="glass-card p-6 flex flex-col justify-between">
            <div>
              <p className="text-xs text-lavender-400 font-medium uppercase tracking-wider mb-1">
                Your Progress
              </p>
              <p className="text-3xl font-bold text-white mb-1">37%</p>
              <p className="text-sm text-lavender-300 mb-5">First Year Roadmap</p>
            </div>
            <ProgressBar value={37} showValue={false} />
            <div className="mt-5 pt-5 border-t border-purple-800/20 grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-lg font-bold text-white">2</p>
                <p className="text-xs text-lavender-500">Completed</p>
              </div>
              <div>
                <p className="text-lg font-bold text-white">4</p>
                <p className="text-xs text-lavender-500">In Progress</p>
              </div>
              <div>
                <p className="text-lg font-bold text-white">6</p>
                <p className="text-xs text-lavender-500">Total Steps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
