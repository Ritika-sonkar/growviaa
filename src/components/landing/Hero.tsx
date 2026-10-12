import { ArrowRight, Sparkles, GraduationCap, TrendingUp } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-16"
    >
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full py-20">
        <div className="animate-fade-in-up">
          <span className="badge-active mb-6 inline-flex">
            <Sparkles size={14} />
            Your B.Tech journey starts here
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-6 text-balance">
            Grow With <span className="gradient-text">Us</span> Throughout Your B.Tech
          </h1>

          <p className="text-lavender-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl text-balance">
            GROWVIA guides you through every year of your computer science journey — discover
            your interests, build real skills, and land your dream career.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button onClick={onGetStarted} className="btn-primary text-base group">
              Start Your Journey
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-base"
            >
              Explore Features
            </button>
          </div>

          <div className="flex flex-wrap gap-6 pt-6 border-t border-purple-800/20">
            {[
              { icon: GraduationCap, value: '4 Years', label: 'Complete Journey' },
              { icon: TrendingUp, value: '10+', label: 'Career Paths' },
              { icon: Sparkles, value: '1st Year', label: 'Now Active' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-900/30 border border-purple-700/30 flex items-center justify-center">
                  <stat.icon size={18} className="text-purple-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{stat.value}</div>
                  <div className="text-lavender-500 text-xs">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-accent/20 rounded-3xl blur-2xl" />
            <div className="relative glass-card p-8 animate-float">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-lavender-400 text-sm">Welcome back,</p>
                  <p className="text-white text-xl font-bold">Future Engineer</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center">
                  <GraduationCap size={24} className="text-white" />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Programming Basics', progress: 85, color: 'from-purple-500 to-accent-light' },
                  { label: 'Web Development', progress: 60, color: 'from-blue-500 to-purple-400' },
                  { label: 'Problem Solving', progress: 65, color: 'from-green-500 to-emerald-400' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-lavender-200 font-medium">{item.label}</span>
                      <span className="text-sm text-purple-300 font-semibold">{item.progress}%</span>
                    </div>
                    <div className="h-2 bg-midnight-700/60 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-purple-900/20 border border-purple-700/20">
                <p className="text-xs text-lavender-400 mb-1">Next Step</p>
                <p className="text-sm text-white font-medium">Learn HTML & CSS Basics</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 glass-card px-4 py-3 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-purple-400" />
                <span className="text-sm text-white font-semibold">Level Up!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
