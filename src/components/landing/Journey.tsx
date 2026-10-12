import { yearStages } from '@/data/content';
import { Icon, SectionTitle, Badge } from '@/components/ui/Primitives';
import { ArrowRight, Lock, Check } from 'lucide-react';

interface JourneyProps {
  onGetStarted: () => void;
}

export function Journey({ onGetStarted }: JourneyProps) {
  return (
    <section id="journey" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionTitle
          center
          eyebrow="The Four-Year Journey"
          title="Your B.Tech Roadmap, Year by Year"
          subtitle="From foundation to launch — GROWVIA walks with you through every stage of your engineering journey. First Year is ready — the rest is on the way."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {yearStages.map((year) => (
            <div
              key={year.id}
              className={`glass-card p-6 transition-all duration-300 ${
                year.status === 'active'
                  ? 'border-purple-500/50 shadow-xl shadow-purple-900/20 ring-1 ring-purple-500/20'
                  : 'opacity-75 hover:opacity-90'
              }`}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform ${
                    year.status === 'active'
                      ? 'bg-gradient-cta shadow-lg shadow-purple-500/20'
                      : 'bg-midnight-700/60 border border-purple-800/30'
                  }`}
                >
                  <Icon
                    name={year.icon}
                    size={22}
                    className={year.status === 'active' ? 'text-white' : 'text-lavender-500'}
                  />
                </div>
                {year.status === 'active' ? (
                  <Badge variant="active">
                    <Check size={12} />
                    Active
                  </Badge>
                ) : (
                  <Badge variant="coming">
                    <Lock size={11} />
                    Coming Soon
                  </Badge>
                )}
              </div>

              <div className="mb-3">
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                  Year {year.id}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">{year.title}</h3>
                <p className="text-xs text-lavender-400 font-medium">{year.subtitle}</p>
              </div>

              <p className="text-sm text-lavender-300 leading-relaxed mb-5">{year.description}</p>

              {year.status === 'active' ? (
                <button
                  onClick={onGetStarted}
                  className="w-full btn-primary text-sm py-2.5 group"
                >
                  Enter Dashboard
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <div className="w-full py-2.5 rounded-xl bg-midnight-700/40 border border-purple-800/20 text-center text-sm text-lavender-500 font-medium">
                  Stay Tuned
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
